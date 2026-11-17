/* Nightwood rules engine. No DOM dependencies; safe for browser and Node tests. */
(function (root, factory) {
  const api=factory();
  if (typeof module==="object"&&module.exports) module.exports=api;
  else root.NightwoodCore=api;
})(typeof globalThis!=="undefined"?globalThis:this,function(){
"use strict";
const SKILLS=[
  ["athletics","Athletics","Run, train, and dodge"],
  ["research","Research","Study clues and examine the unusual"],
  ["electronics","Electronics","Repair terminals and modify tools"],
  ["firstAid","First Aid","Prepare supplies and treat injuries"],
  ["scavenging","Scavenging","Find useful materials"],
  ["gaming","Gaming","Play arcade games"],
  ["cardSense","Card Sense","Master library table games"],
  ["bladecraft","Bladecraft","Master the Night Splitter"],
  ["channeling","Channeling","Channel sword magic"]
];
const MONSTERS={
  stray:{label:"Stray",hp:20,speed:57,damage:4,range:25,attackMs:950,kind:"swarm",color:"#aab9d3",xp:8},
  shadewalker:{label:"Shadewalker",hp:58,speed:77,damage:9,range:40,attackMs:1500,kind:"shadow",color:"#ac8efa",xp:24},
  howler:{label:"Howler",hp:35,speed:43,damage:7,range:125,attackMs:2050,kind:"howl",color:"#ed9ac5",xp:14},
  feeder:{label:"Feeder",hp:65,speed:38,damage:4,range:88,attackMs:1700,kind:"fear",color:"#d28fb9",xp:25},
  nighthound:{label:"Nighthound",hp:30,speed:109,damage:7,range:31,attackMs:1200,kind:"pounce",color:"#dfc7af",xp:12},
  crawler:{label:"Crawler",hp:29,speed:68,damage:6,range:44,attackMs:1650,kind:"climb",color:"#9dbec5",xp:11}
};
const BOSSES=["Mistress Shade","The Warden","The Unseen King","Nyxara","The Maw","Astrix","The Crown Council"];
const PEERS={
  mara:{name:"Mara Ortiz",gender:"girl",skill:"research",color:"#e9a8bc"},
  jessa:{name:"Jessa Navarro",gender:"girl",skill:"athletics",color:"#e5bc79"},
  theo:{name:"Theo Brooks",gender:"boy",skill:"gaming",color:"#7ec8d8"},
  adrian:{name:"Adrian Bell",gender:"boy",skill:"research",color:"#baa5e6"}
};
const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
const xpNeed=level=>20+15*level+5*level*level;
function cleanName(name){
  const n=String(name||"").replace(/[\u0000-\u001f<>]/g,"").trim().replace(/\s+/g," ").slice(0,20);
  return n||"Student";
}
function freshSave(name,gender,color){
 const skills={};
 SKILLS.forEach(s=>skills[s[0]]={level:1,xp:0});
 return {
   version:2, name:cleanName(name),gender:gender==="girl"?"girl":"boy",shirt:color||"#52c3d5",
   skills,level:1,advXp:0,health:100,focus:100,dread:0,
   realm:"homewood",position:{x:600,y:400},sword:false,story:0,
   inventory:{nightShards:0,parts:0,medkits:1,cash:15},
   flags:{},trust:{mara:0,jessa:0,theo:0,adrian:0},romance:{},
   highScores:{ghostCircuit:0,stacks21:0},runs:[],stats:{monsters:0,arcade:0,cards:0},upgrades:{edge:0,ward:0,rift:0},
   discovered:{arcade:false,library:false},timePlayed:0,lastSaved:null
 };
}
function awardSkill(save,id,amount){
 if(!save.skills[id])return {levels:0};
 const s=save.skills[id],start=s.level;
 s.xp+=Math.max(0,Math.floor(Number(amount)||0));
 while(s.level<50&&s.xp>=xpNeed(s.level)){s.xp-=xpNeed(s.level);s.level++;}
 return {levels:s.level-start,level:s.level};
}
function awardAdventure(save,amount){
 save.advXp+=Math.max(0,Math.floor(Number(amount)||0));
 while(save.advXp>=50+save.level*32){save.advXp-=50+save.level*32;save.level++;}
}
function activityReward(save,which,runId,score){
 if(which!=="ghostCircuit"&&which!=="stacks21")throw Error("Unknown activity");
 if(typeof runId!=="string"||!runId||save.runs.includes(runId))return {applied:false,best:false,xp:0};
 const n=clamp(Math.floor(Number(score)||0),0,1000000),previous=save.highScores[which]||0;
 const best=n>previous, xp=8+Math.min(12,Math.floor(n/(which==="ghostCircuit"?45:12)));
 save.runs.push(runId);if(save.runs.length>150)save.runs.shift();
 save.highScores[which]=Math.max(previous,n);
 const key=which==="ghostCircuit"?"gaming":"cardSense";
 const leveled=awardSkill(save,key,xp);
 save.inventory.cash+=n>0?1:0;
 save.stats[which==="ghostCircuit"?"arcade":"cards"]++;
 return {applied:true,best,xp,levelUp:leveled.levels,score:n};
}
function rng(seed){
 let v=(Number(seed)>>>0)||123456789;
 return function(){v^=v<<13;v^=v>>>17;v^=v<<5;return (v>>>0)/4294967296;};
}
function newStacks(seed){
 const rand=rng(seed);
 // Ten cards between 1 and 8 keep the average total manageable for three 21-point stacks.
 const cards=Array.from({length:10},()=>1+Math.floor(rand()*8));
 return {seed,cards,index:0,piles:[0,0,0],states:["open","open","open"],finished:false,score:0};
}
function scoreStacks(game){
 return game.piles.reduce((sum,p,i)=>sum+(game.states[i]==="busted"?0:p)+(game.states[i]==="exact"?10:0),0);
}
function placeStack(game,pile){
 if(game.finished)throw Error("Round finished");
 if(!Number.isInteger(pile)||pile<0||pile>2||game.states[pile]!=="open")throw Error("Stack unavailable");
 const value=game.cards[game.index++];
 game.piles[pile]+=value;
 if(game.piles[pile]>21) game.states[pile]="busted";
 else if(game.piles[pile]===21)game.states[pile]="exact";
 game.finished=game.index>=game.cards.length||game.states.every(s=>s!=="open");
 if(game.finished)game.score=scoreStacks(game);
 return {value,finished:game.finished,score:game.finished?game.score:null};
}
function choosePartner(save,id){
 if(!PEERS[id])return false;
 // Player gender is deliberately irrelevant to all romance paths.
 const visited={...((save.romance&&save.romance.visited)||{})};
 if(!visited[id])save.trust[id]=Math.max(0,(save.trust[id]||0))+1;
 visited[id]=true;
 save.romance={active:id,visited};
 return true;
}
function normalizeSave(raw){
 if(!raw||typeof raw!=="object")return null;
 if(raw.version!==2||!raw.skills||!raw.inventory||!raw.position)return null;
 const blank=freshSave(raw.name,raw.gender,raw.shirt);
 const merged={...blank,...raw,name:cleanName(raw.name),gender:raw.gender==="girl"?"girl":"boy"};
 merged.skills={...blank.skills,...raw.skills};
 merged.inventory={...blank.inventory,...raw.inventory};
 merged.flags={...blank.flags,...raw.flags};merged.trust={...blank.trust,...raw.trust};
 merged.highScores={...blank.highScores,...raw.highScores};merged.upgrades={...blank.upgrades,...raw.upgrades};
 merged.discovered={...blank.discovered,...raw.discovered};merged.runs=Array.isArray(raw.runs)?raw.runs.slice(-150):[];
 merged.realm=raw.realm==="nightwood"?"nightwood":"homewood";
 merged.health=clamp(Number(raw.health)||100,1,100);
 merged.focus=clamp(Number(raw.focus)||100,0,100);
 merged.dread=clamp(Number(raw.dread)||0,0,100);
 merged.position={x:clamp(Number(raw.position.x)||600,30,1470),y:clamp(Number(raw.position.y)||400,30,870)};
 return merged;
}
return {SKILLS,MONSTERS,BOSSES,PEERS,clamp,xpNeed,cleanName,freshSave,awardSkill,awardAdventure,activityReward,rng,newStacks,scoreStacks,placeStack,choosePartner,normalizeSave};
});
