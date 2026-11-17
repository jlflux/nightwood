/* Nightwood — browser vertical slice. All art is drawn directly on Canvas. */
(function(){
"use strict";
const C=window.NightwoodCore;
const $=id=>document.getElementById(id);
const canvas=$("world"),ctx=canvas.getContext("2d"),screen=$("screen"),layer=$("screenLayer");
const WIDTH=1500,HEIGHT=900,STORAGE="nightwood_save_v2";
let save=null,tab="journal",mode="create",target=null,targetAction=null,waypoints=[],near=null,keys=new Set();
let enemies=[],fx=[],particles=[],runner=null,stackGame=null,runCounter=0,charge=0,slashTime=0,attackCd=0,dodgeCd=0,dodgeTime=0,iframe=0,hitTimer=0,frameTime=performance.now(),elapsedUI=0,saveTick=0;
let facing={x:0,y:1},cam={x:0,y:0},viewport={w:960,h:630},lightShift=0,spawnTimer=0,toastTimer=null,lastStory=false;
const places=[
 {id:"school",x:590,y:350,label:"Homewood High",type:"school",realm:"homewood"},
 {id:"auditorium",x:1000,y:355,label:"School Auditorium",type:"auditorium",realm:"homewood"},
 {id:"arcade",x:300,y:780,label:"Quarterlight Arcade",type:"arcade",realm:"homewood"},
 {id:"library",x:1160,y:780,label:"Homewood Public Library",type:"library",realm:"homewood"},
 {id:"mara",x:715,y:440,label:"Mara Ortiz",type:"friend",realm:"homewood"},
 {id:"theo",x:420,y:480,label:"Theo Brooks",type:"friend",realm:"homewood"},
 {id:"jessa",x:1075,y:475,label:"Jessa Navarro",type:"friend",realm:"homewood"},
 {id:"adrian",x:1025,y:750,label:"Adrian Bell",type:"friend",realm:"homewood"},
 {id:"lena",x:1210,y:772,label:"Ms. Park",type:"lena",realm:"homewood"},
 {id:"shadow",x:825,y:415,label:"Unnatural Shadow",type:"shadow",realm:"homewood"},
 {id:"portal",x:990,y:411,label:"Nightwood Seam",type:"portal",realm:"homewood"},
 {id:"exit",x:990,y:410,label:"Return to Homewood",type:"exit",realm:"nightwood"},
 {id:"nightClue",x:770,y:345,label:"Broken Custodian Seal",type:"nightClue",realm:"nightwood"}
];
const blocks=[
 {x:370,y:95,w:455,h:249},{x:858,y:135,w:315,h:192},
 {x:160,y:565,w:285,h:184},{x:1042,y:557,w:289,h:181}
];
function escapeHTML(s){return String(s).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));}
function toast(message){const t=$("toast");t.textContent=message;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2300);}
function saveGame(){
 if(!save)return;save.lastSaved=new Date().toISOString();
 try{localStorage.setItem(STORAGE,JSON.stringify(save));$("saveLabel").textContent="Saved";}catch(e){$("saveLabel").textContent="Save unavailable";} 
}
function loadGame(){try{return C.normalizeSave(JSON.parse(localStorage.getItem(STORAGE)));}catch(e){return null;}}
function show(html,nextMode){screen.innerHTML=html;layer.classList.remove("hidden");mode=nextMode;keys.clear();target=null;waypoints=[];}
function close(){if(mode==="create")return;layer.classList.add("hidden");mode=null;target=null;waypoints=[];renderPanel();}
function choiceScreen(title,description,choices){
 let html='<div class="tag">HOMEWOOD / NIGHTWOOD</div><h2>'+escapeHTML(title)+'</h2><p>'+escapeHTML(description)+'</p><div id="choices"></div>';
 show(html,"dialog");
 const container=$("choices");
 choices.forEach(ch=>{const b=document.createElement("button");b.className="choice";b.textContent=ch.label;container.appendChild(b);b.onclick=()=>{close();ch.action();};});
}
function makeCharacter(){
 let temp={gender:"boy",shirt:"#52c3d5"};
 show('<div class="tag">A NORMAL CITY. AN IMPOSSIBLE OTHER SIDE.</div><h1>NIGHTWOOD</h1><p class="lead">Homewood feels like home. But beyond its shadows lives another world. Build your own student and discover what waits there.</p><label for="charName">YOUR CHARACTER NAME</label><input id="charName" maxlength="20" placeholder="Choose a name" autocomplete="off"><label>YOUR CHARACTER</label><div class="pickers"><button id="boyPick" class="selected">Boy</button><button id="girlPick">Girl</button></div><label>JACKET COLOR</label><div class="color-picks" id="colors"></div><div class="buttons"><button id="createBtn" class="primary">START IN HOMEWOOD</button></div><p class="note">Your name and appearance are yours to choose. Either character can befriend or date the same students later. Progress saves on this browser.</p>',"create");
 $("boyPick").onclick=()=>{temp.gender="boy";$("boyPick").classList.add("selected");$("girlPick").classList.remove("selected");};
 $("girlPick").onclick=()=>{temp.gender="girl";$("girlPick").classList.add("selected");$("boyPick").classList.remove("selected");};
 ["#52c3d5","#d68f94","#dab56e","#a7a3d6","#76b58b"].forEach(color=>{const b=document.createElement("button");b.style.background=color;b.setAttribute("aria-label","Jacket "+color);if(temp.shirt===color)b.classList.add("selected");$("colors").appendChild(b);b.onclick=()=>{temp.shirt=color;for(const item of $("colors").children)item.classList.remove("selected");b.classList.add("selected");};});
 $("createBtn").onclick=()=>{save=C.freshSave($("charName").value,temp.gender,temp.shirt);layer.classList.add("hidden");mode=null;saveGame();renderUI();intro();};
 $("charName").focus();
}
function intro(){
 choiceScreen("Just another afternoon in Homewood",
 "School's out soon. Theo has been talking up an arcade high score, Mara is chasing a strange story, and the auditorium lights have been flickering again. For now, you're just another student. You can explore, talk, or go play a game.",
 [{label:"Let's go. (Move with WASD or click anywhere)",action:()=>toast("Visit the arcade, library, school, or auditorium.")}]);
}
function resize(){
 const box=canvas.getBoundingClientRect(),ratio=Math.min(2,devicePixelRatio||1);
 viewport={w:Math.max(240,box.width),h:Math.max(190,box.height)};
 canvas.width=Math.round(viewport.w*ratio);canvas.height=Math.round(viewport.h*ratio);
 ctx.setTransform(ratio,0,0,ratio,0,0);
}
function dist(a,b){return Math.hypot(a.x-b.x,a.y-b.y);}
function nearby(){if(!save)return null;let list=places.filter(o=>o.realm===save.realm&&(o.type!=="portal"||save.sword));list.sort((a,b)=>dist(a,save.position)-dist(b,save.position));return list.length&&dist(list[0],save.position)<73?list[0]:null;}
function available(){return places.filter(o=>o.realm===save.realm&&(o.type!=="portal"||save.sword));}
function intersects(x,y){
 if(x<24||x>WIDTH-24||y<24||y>HEIGHT-24)return true;
 if(save.realm==="homewood")return blocks.some(b=>x>b.x-12&&x<b.x+b.w+12&&y>b.y-12&&y<b.y+b.h+12);
 return blocks.some((b,i)=>i===1&&x>b.x-4&&x<b.x+b.w+4&&y>b.y-4&&y<b.y+b.h+4);
}
function relocate(x,y){if(!intersects(x,y))save.position={x,y};}
// Small-grid pathfinding keeps click-to-move from walking into arcade/school roofs.
// No external navmesh or art pack is required for the current map.
function findPath(point,object){
 const cell=32,cols=Math.ceil(WIDTH/cell),rows=Math.ceil(HEIGHT/cell);
 const center=id=>({x:(id%cols+.5)*cell,y:(Math.floor(id/cols)+.5)*cell});
 const startX=C.clamp(Math.floor(save.position.x/cell),0,cols-1),startY=C.clamp(Math.floor(save.position.y/cell),0,rows-1);
 const start=startY*cols+startX,visited=new Uint8Array(cols*rows),prev=new Int32Array(cols*rows);
 prev.fill(-1);const queue=[start];visited[start]=1;let best=start,bestDist=Infinity,found=false,head=0;
 const dirs=[[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,1],[1,-1],[-1,-1]];
 while(head<queue.length){
  const node=queue[head++],at=center(node),d=dist(at,point);
  if(d<bestDist){bestDist=d;best=node;}
  if(d<(object?60:cell*.7)){best=node;found=true;break;}
  const x=node%cols,y=Math.floor(node/cols);
  for(const [dx,dy] of dirs){
   const nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=cols||ny>=rows)continue;
   const id=ny*cols+nx;if(visited[id])continue;
   const next=center(id);if(intersects(next.x,next.y))continue;
   if(dx&&dy){const sideA=center(y*cols+nx),sideB=center(ny*cols+x);if(intersects(sideA.x,sideA.y)||intersects(sideB.x,sideB.y))continue;}
   visited[id]=1;prev[id]=node;queue.push(id);
  }
 }
 if(!found&&object&&bestDist>83)return [];
 const route=[];let cursor=best;
 while(cursor!==start&&cursor>=0){route.push(center(cursor));cursor=prev[cursor];}
 route.reverse();
 return route;
}
function chooseTarget(point,object){
 if(!save||mode)return;
 if(object&&dist(point,save.position)<73){target=null;targetAction=null;waypoints=[];interactObject(object);return;}
 waypoints=findPath(point,object);
 if(!waypoints.length){target=null;targetAction=null;if(object)toast("Can't reach that spot yet. Try approaching from the sidewalk.");return;}
 target=point;targetAction=object||null;
}
function movement(dt){
 if(!save||mode||runner)return;
 let vx=Number(keys.has("d")||keys.has("arrowright"))-Number(keys.has("a")||keys.has("arrowleft"));
 let vy=Number(keys.has("s")||keys.has("arrowdown"))-Number(keys.has("w")||keys.has("arrowup"));
 if(vx||vy){target=null;targetAction=null;waypoints=[];}
 else if(waypoints.length){
  const next=waypoints[0];vx=next.x-save.position.x;vy=next.y-save.position.y;
  if(Math.hypot(vx,vy)<10){
   waypoints.shift();
   if(!waypoints.length){const obj=targetAction;targetAction=null;target=null;if(obj&&dist(save.position,obj)<87)interactObject(obj);}
   return;
  }
 }
 const magnitude=Math.hypot(vx,vy);if(magnitude<=0)return;
 vx/=magnitude;vy/=magnitude;facing={x:vx,y:vy};
 const speed=(175+(save.skills.athletics.level-1)*1.5)*(dodgeTime>0?2.9:1);
 const nx=save.position.x+vx*speed*dt,ny=save.position.y+vy*speed*dt;
 if(!intersects(nx,save.position.y))save.position.x=nx;
 if(!intersects(save.position.x,ny))save.position.y=ny;
 charge+=speed*dt;if(charge>170){charge=0;C.awardSkill(save,"athletics",1);}
}
function floatText(text,x,y,color){fx.push({kind:"text",text,x,y,life:1,color:color||"#e5eaf7"});}
function soundRing(x,y,color){fx.push({kind:"ring",x,y,life:.5,max:.5,color:color||"#add6e8"});}
function spawnParticles(x,y,color,count){for(let i=0;i<count;i++)particles.push({x,y,vx:(Math.random()-.5)*150,vy:(Math.random()-.5)*150,life:.5+Math.random()*.4,color});}
function spawnNightwood(){
 enemies=[];
 const kinds=["stray","stray","stray","crawler","shadewalker","howler","feeder","nighthound"];
 const locs=[[710,410],[790,510],[630,560],[1150,445],[1120,530],[460,460],[380,370],[440,355]];
 for(let i=0;i<kinds.length;i++){
  const k=kinds[i],p=locs[i],t=C.MONSTERS[k];
  enemies.push({id:i+1,kind:k,x:p[0],y:p[1],hp:t.hp,max:t.hp,cool:500+i*230,think:0,state:"roam",shadow:0,warn:0,glow:0,alive:true});
 }
 spawnTimer=0;
}
function cross(to){
 if(!save.sword){toast("The auditorium is hiding something.");return;}
 save.realm=to;save.position={x:to==="nightwood"?950:975,y:442};save.health=Math.max(60,save.health);
 if(to==="nightwood")spawnNightwood();else{enemies=[];save.dread=0;}
 saveGame();renderUI();
 toast(to==="nightwood"?"NIGHTWOOD — the shadow realm of Homewood":"Back in Homewood. For now.");
}
function startSword(){
 if(save.sword){cross("nightwood");return;}
 choiceScreen("The Night Splitter",
 "Behind the stage, a narrow black sword hangs where no sword should be. When you touch its hilt, the school lights blink out. You can still see Homewood — but its walls stretch into something called Nightwood. The weapon responds to you.",
 [{label:"Take The Night Splitter and cross into Nightwood",action:()=>{save.sword=true;save.story=Math.max(save.story,1);save.flags.foundSword=true;C.awardSkill(save,"bladecraft",10);saveGame();cross("nightwood");toast("Sword: SPACE • Magic: F • Dodge: SHIFT");}},
 {label:"Not yet — go back outside",action:()=>{}}]);
}
function friendChat(id){
 const friend=C.PEERS[id];if(!friend)return;
 const partner=save.romance.active===id;
 const descriptions={
  mara:"Mara is following unusual stories from the auditorium. She's direct, curious and doesn't believe easy explanations.",
  theo:"Theo wants you to beat his Ghost Circuit score. He makes things feel normal even when everything else is strange.",
  jessa:"Jessa is wrapping up athletics practice and asking whether you're up for a challenge.",
  adrian:"Adrian has been cataloging recordings at the library. One of them sounds almost like a second school bell."
 };
 const choices=[
  {label:"Talk and get to know "+friend.name,action:()=>{save.trust[id]=Math.min(30,(save.trust[id]||0)+1);if(!save.flags["friend_"+id]){save.flags["friend_"+id]=true;C.awardSkill(save,friend.skill,5);}saveGame();toast(friend.name+" appreciates the conversation.");}},
  {label:partner?"You're getting closer — spend a little time together":"Ask about hanging out together (optional romance)",action:()=>{C.choosePartner(save,id);saveGame();toast(friend.name+": \"I'd like that. Let's make some time.\"");}},
 ];
 if(id==="theo")choices.splice(1,0,{label:"Play Ghost Circuit together",action:()=>openArcade()});
 if(id==="adrian")choices.splice(1,0,{label:"Try Stacks 21 at the library",action:()=>openStacks()});
 choices.push({label:"Head back to town",action:()=>{}});
 choiceScreen(friend.name,descriptions[id],choices);
}
function interactObject(obj){
 if(!obj)return;
 switch(obj.type){
  case "school":
   choiceScreen("Homewood High","The notice board is full of ordinary after-school announcements. One paper mentions a projector failing whenever the auditorium is quiet.",
   [{label:save.flags.researchSchool?"Read the notice again":"Investigate the note (+Research XP, once)",action:()=>{if(!save.flags.researchSchool){save.flags.researchSchool=true;C.awardSkill(save,"research",12);C.awardSkill(save,"electronics",6);save.story=Math.max(save.story,1);saveGame();toast("Research +12 · Electronics +6");}}},
   {label:"Back to the courtyard",action:()=>{}}]);break;
  case "auditorium":startSword();break;
  case "arcade":save.discovered.arcade=true;saveGame();openArcade();break;
  case "library":save.discovered.library=true;saveGame();openStacks();break;
  case "friend":friendChat(obj.id);break;
  case "lena":choiceScreen("Ms. Lena Park",save.sword?"\"You found it, didn't you? The Night Splitter. Then you need to learn what the Custodians have been keeping closed.\"":"\"There are old plans for that auditorium in the archives. Strange ones.\"",
  [{label:"Examine an old archive (Research)",action:()=>{if(!save.flags.libraryClue){save.flags.libraryClue=true;C.awardSkill(save,"research",14);save.inventory.parts++;saveGame();toast("Research +14 · 1 part found");}else toast("You already studied this archive.");}},
   {label:"Join the library card table",action:()=>{save.discovered.library=true;openStacks();}}]);break;
  case "shadow":choiceScreen("The shadow moves the wrong way",save.sword?"The shape moves as though something on the other side is walking. A Shadewalker's shadow can reach into Homewood — even when its body stays in Nightwood.":"The shadow by the auditorium stretches against the sunlight. Nothing is standing there to cast it.",
   [{label:"Remember this clue",action:()=>{if(!save.flags.shadowClue){save.flags.shadowClue=true;C.awardSkill(save,"research",8);saveGame();toast("Research +8 · The boundary is thin here");}}}]);break;
  case "portal":cross("nightwood");break;
  case "exit":cross("homewood");break;
  case "nightClue":
    choiceScreen("A damaged seal","The Custodians have been here. An ancient mark is scratched onto the same wall you passed at school this afternoon. Mistress Shade's name is written beneath it.",
    [{label:"Study the seal",action:()=>{if(!save.flags.nightSeal){save.flags.nightSeal=true;C.awardSkill(save,"research",15);save.inventory.nightShards+=2;save.story=Math.max(save.story,2);saveGame();toast("Research +15 · Night Shards +2");}else toast("You have already recorded the seal.");}}]);break;
 }
}
function interact(){
 if(!save||mode)return;
 const n=nearby();
 if(n)interactObject(n);else toast("Get closer to someone, a place, or an unusual object.");
}
function damageMonster(e,amount){
 if(!e||!e.alive)return;
 e.hp-=amount;e.glow=.15;floatText("-"+Math.ceil(amount),e.x,e.y-33,"#e8f6ff");spawnParticles(e.x,e.y,"#88d9ef",5);
 if(e.hp<=0){e.alive=false;save.stats.monsters++;save.inventory.nightShards+=1;C.awardSkill(save,"bladecraft",C.MONSTERS[e.kind].xp);C.awardAdventure(save,C.MONSTERS[e.kind].xp);floatText("+ Night Shard",e.x,e.y-47,"#d3caed");saveGame();
 if(!save.flags.shadeTeaser&&save.stats.monsters>=3){save.flags.shadeTeaser=true;setTimeout(()=>{if(save.realm==="nightwood"&&!mode)choiceScreen("Mistress Shade","The black auditorium curtain moves though there is no wind. A voice whispers: \"That blade belongs in Nightwood. Come back when you understand what you carry.\" Something powerful watches from the shadow school.",[{label:"I will be ready.",action:()=>{save.story=Math.max(save.story,2);saveGame();}}]);},600);}
 }
}
function attack(){
 if(!save||mode||!save.sword||save.realm!=="nightwood"){if(save&&save.realm==="homewood")toast("The Night Splitter awakens in Nightwood.");return;}
 if(attackCd>0)return;attackCd=.31;slashTime=.18;
 soundRing(save.position.x+facing.x*38,save.position.y+facing.y*38,"#92e6fb");
 let count=0;
 for(const e of enemies){if(!e.alive)continue;
 const delta={x:e.x-save.position.x,y:e.y-save.position.y};const d=Math.hypot(delta.x,delta.y);
 if(d<91&&(delta.x*facing.x+delta.y*facing.y)/Math.max(1,d)>-.10){damageMonster(e,15+save.skills.bladecraft.level*2+save.upgrades.edge*3);count++;}}
 if(count)C.awardSkill(save,"bladecraft",2);
}
function pulse(){
 if(!save||mode||!save.sword||save.realm!=="nightwood")return;
 if(save.focus<16){toast("Not enough Focus");return;}
 save.focus-=16;soundRing(save.position.x,save.position.y,"#adc5ff");
 let hits=0;for(const e of enemies){if(e.alive&&dist(e,save.position)<160){damageMonster(e,10+save.skills.channeling.level*3+save.upgrades.rift*4);hits++;}}
 if(hits){C.awardSkill(save,"channeling",5+hits);save.dread=Math.max(0,save.dread-8);}
 else C.awardSkill(save,"channeling",1);
}
function dodge(){if(!save||mode||dodgeCd>0)return;dodgeCd=.9;dodgeTime=.18;iframe=.32;soundRing(save.position.x,save.position.y,"#def0cc");C.awardSkill(save,"athletics",1);}
function hurt(amount,kind){
 if(iframe>0)return;save.health=Math.max(0,save.health-amount);iframe=.55;hitTimer=.25;floatText("-"+amount,save.position.x,save.position.y-45,"#f399a0");
 if(save.health<=0){save.health=100;save.focus=100;save.dread=0;cross("homewood");toast("You escaped Nightwood. Your progress and items are safe.");}
}
function updateMonsters(dt){
 if(!save||save.realm!=="nightwood"||mode)return;
 const p=save.position;
 for(const e of enemies){if(!e.alive)continue;
 const cfg=C.MONSTERS[e.kind],d=dist(p,e);e.cool-=dt*1000;e.think+=dt;e.glow=Math.max(0,e.glow-dt);
 let dx=(p.x-e.x)/Math.max(1,d),dy=(p.y-e.y)/Math.max(1,d);
 if(e.kind==="crawler"&&e.think%4<1.0){e.x+=Math.cos(e.think*8)*30*dt;e.y-=36*dt;continue;}
 if(e.kind==="shadewalker"&&e.think>4.3){e.think=0;e.shadow=1;const nx=p.x+(Math.random()-.5)*150,ny=p.y+(Math.random()-.5)*150;if(!intersects(nx,ny)){e.x=nx;e.y=ny;}soundRing(e.x,e.y,"#8e7bce");}
 if(e.kind==="howler"&&e.think>3.2){e.think=0;soundRing(e.x,e.y,"#d4a3dd");floatText("?",e.x+55,e.y-55,"#e6bde9");}
 if(e.kind==="feeder"&&d<120){save.dread=Math.min(100,save.dread+13*dt);if(save.dread>65)save.focus=Math.max(0,save.focus-5*dt);}
 if(d<420 && d>cfg.range*.85){
  let speed=cfg.speed*(e.kind==="nighthound"&&(e.think%3)<.35?2.1:1);
  const nx=e.x+dx*speed*dt,ny=e.y+dy*speed*dt;
  if(!intersects(nx,e.y))e.x=nx;
  if(!intersects(e.x,ny))e.y=ny;
 }
 if(d<cfg.range&&e.cool<=0){
   e.cool=cfg.attackMs;
   if(e.kind==="howler"){e.warn=.65;soundRing(e.x,e.y,"#dda8c5");}
   else if(e.kind==="crawler"){e.warn=.45;soundRing(e.x,e.y,"#b1d8e1");}
   else if(e.kind==="feeder"){save.dread=Math.min(100,save.dread+12);hurt(cfg.damage,"feeder");}
   else hurt(cfg.damage,e.kind);
 }
 if(e.warn>0){e.warn-=dt;if(e.warn<=0&&dist(p,e)<cfg.range+25)hurt(cfg.damage,e.kind);}
 e.shadow=Math.max(0,e.shadow-dt);
 }
 if(enemies.every(e=>!e.alive)){spawnTimer+=dt;if(spawnTimer>8){spawnNightwood();toast("More Nightwood creatures emerge from the dark.");}}
}
function renderPanel(){
 if(!save)return;
 $("playerLabel").textContent=save.name;
 $("realmLabel").textContent=save.realm==="homewood"?"HOMEWOOD":"NIGHTWOOD";
 $("realmLabel").classList.toggle("night",save.realm==="nightwood");
 $("levelLabel").textContent=save.level;
 const p=$("panelBody");if(tab==="journal"){
 const objective=!save.sword?"Investigate the auditorium and discover the Night Splitter":save.story<2?"Explore Nightwood, defeat Strays and inspect a Custodian seal":"Return to Homewood or train your skills; Mistress Shade is still out there.";
 p.innerHTML='<div class="eyebrow">CHAPTER ONE · THE OTHER SIDE OF HOME</div><h2>'+escapeHTML(objective)+'</h2><div class="quest-card"><strong>YOUR TWO WORLDS</strong><span>Homewood is bright and ordinary. Nightwood is the realm hiding behind its shadows. The Custodians guard the boundary.</span></div><div class="tip">30 seconds? Visit the arcade or library for a real mini-game. Longer session? Explore the school and fight in Nightwood.</div><h3>Adventure</h3><div class="prof-row">Monsters defeated <strong>'+save.stats.monsters+'</strong></div><div class="prof-row">Night Shards <strong>'+save.inventory.nightShards+'</strong></div><div class="prof-row">Cash <strong>$'+save.inventory.cash+'</strong></div><h3>Current threat</h3><p>Strays • Shadewalkers • Howlers • Feeders • Nighthounds • Crawlers. Bosses including Mistress Shade and the Crown Council are part of the planned story campaign.</p>';
 }else if(tab==="skills"){
 p.innerHTML='<div class="eyebrow">MODERN SKILLS + SUPERNATURAL MASTERY</div><h2>Your skills</h2><p>Every activity improves a different part of your character. No daily chores.</p>'+C.SKILLS.map(item=>{const s=save.skills[item[0]],need=C.xpNeed(s.level),progress=Math.min(100,100*s.xp/need);return '<div class="skill"><div class="r"><b>'+escapeHTML(item[1])+'</b><span>LV '+s.level+'</span></div><small>'+escapeHTML(item[2])+'</small><div class="skill-track"><i style="width:'+progress+'%"></i></div><small>'+s.xp+' / '+need+' XP</small></div>';}).join("");
 }else{
 const active=save.romance.active,info=active&&C.PEERS[active]?C.PEERS[active].name:"None";
 p.innerHTML='<div class="eyebrow">STUDENT PROFILE</div><h2>'+escapeHTML(save.name)+'</h2><p>'+escapeHTML(save.gender==="girl"?"Girl":"Boy")+' · Level '+save.level+' · '+(save.sword?"Night Splitter bearer":"Homewood student")+'</p><div class="prof-row">Blade <strong>'+(save.sword?"The Night Splitter":"Not discovered")+'</strong></div><div class="prof-row">Arcade best <strong>'+save.highScores.ghostCircuit+'</strong></div><div class="prof-row">Library best <strong>'+save.highScores.stacks21+'</strong></div><div class="prof-row">Arcade games <strong>'+save.stats.arcade+'</strong></div><div class="prof-row">Card games <strong>'+save.stats.cards+'</strong></div><div class="prof-row">Optional romance <strong>'+escapeHTML(info)+'</strong></div><h3>Friends</h3>'+Object.keys(C.PEERS).map(id=>'<div class="prof-row">'+escapeHTML(C.PEERS[id].name)+'<strong>Trust '+(save.trust[id]||0)+'</strong></div>').join("")+'<h3>Saved</h3><p>Progress is stored locally in this browser. Export a backup before clearing browser data or changing devices.</p>';
 }
 $("quickArcade").disabled=!save.discovered.arcade;
 $("quickLibrary").disabled=!save.discovered.library;
 $("homeBtn").textContent=save.realm==="nightwood"?"⌂ Homewood":"⌂ School";
}
function renderUI(){if(!save)return;renderPanel();$("hpFill").style.width=save.health+"%";$("hpText").textContent=Math.round(save.health);$("focusFill").style.width=save.focus+"%";$("focusText").textContent=Math.round(save.focus);$("dreadRow").style.display=save.dread>1?"flex":"none";$("dreadFill").style.width=save.dread+"%";$("dreadText").textContent=Math.round(save.dread);$("questBanner").textContent=!save.sword?"EXPLORE HOMEWOOD · THE AUDITORIUM HIDES SOMETHING":save.realm==="homewood"?"HOMEWOOD · KEEP YOUR SECRET / TRAIN":save.story>=2?"NIGHTWOOD · THE CUSTODIANS LEFT A SEAL":"NIGHTWOOD · MASTER YOUR NEW SWORD";}
function openStacks(){
 if(!save)return;save.discovered.library=true;saveGame();
 stackGame=C.newStacks((Date.now()>>>0)+runCounter++);
 mode="stacks";renderStacks();
}
function renderStacks(){
 if(!stackGame)return;
 const s=stackGame;let h='<div class="tag">HOMEWOOD PUBLIC LIBRARY · STACKS 21</div><h2>Build the best three stacks</h2><p>Place each numbered card into one of three stacks. Get close to 21 without going over. Exactly 21 earns 10 bonus points and locks that stack.</p><div class="runner-hud"><span>CARD '+Math.min(10,s.index+1)+' / 10</span><span>PERSONAL BEST '+save.highScores.stacks21+'</span></div>';
 if(s.finished){
  h+='<h2>Round complete · '+s.score+' points</h2><p>Stacks: '+s.piles.map((x,i)=>s.states[i]==="busted"?"BUST":x+(s.states[i]==="exact"?" (+10)":"")).join(" / ")+'</p><div class="buttons"><button id="againStacks" class="primary">PLAY AGAIN</button><button id="leaveStacks">BACK TO HOMEWOOD</button></div>';
  show(h,"stacks-result");
  $("againStacks").onclick=()=>openStacks();$("leaveStacks").onclick=close;
  return;
 }
 h+='<div class="next-card">'+s.cards[s.index]+'</div><div class="stacks-layout">'+s.piles.map((p,i)=>'<button class="stack '+s.states[i]+'" data-pile="'+i+'" '+(s.states[i]!=="open"?"disabled":"")+'><b>'+p+'</b><span>'+s.states[i].toUpperCase()+'</span></button>').join("")+'</div><p class="note">Tap a stack to place the card. The whole round takes about a minute, or play at your own pace.</p><div class="buttons"><button id="leaveStacks">LEAVE GAME</button></div>';
 show(h,"stacks");$("leaveStacks").onclick=close;
 for(const b of screen.querySelectorAll("[data-pile]"))b.onclick=()=>{const result=C.placeStack(stackGame,Number(b.dataset.pile));if(result.finished){const r=C.activityReward(save,"stacks21","stacks-"+Date.now()+"-"+runCounter++,stackGame.score);saveGame();toast("Card Sense +"+r.xp+" XP"+(r.best?" · NEW BEST!":""));}renderStacks();};
}
function openArcade(){
 if(!save)return;save.discovered.arcade=true;saveGame();
 runner={lane:1,lives:3,seconds:38,score:0,combo:0,spawn:0,objects:[],running:false,runId:"arcade-"+Date.now()+"-"+(runCounter++)};
 show('<div class="tag">QUARTERLIGHT ARCADE · GHOST CIRCUIT</div><h2>Ghost Circuit</h2><p>Switch between three lanes. Dodge pink blocks, collect teal nodes. Survive 38 seconds to beat your personal best.</p><div class="runner-hud"><span id="runTime">38s</span><span id="runScore">SCORE 0</span><span id="runLives">♥ ♥ ♥</span></div><div class="game-arcade" id="arcadeField"><div class="runner-lane" style="left:0%"></div><div class="runner-lane" style="left:33.33%"></div><div class="runner-lane" style="left:66.66%"></div><div id="runnerObjects"></div><div class="runner-hero" id="runnerHero"></div></div><div class="arcade-controls"><button id="arcLeft">◀ LEFT</button><button id="arcRight">RIGHT ▶</button></div><div class="buttons"><button id="arcStart" class="primary">START RUN</button><button id="arcLeave">LEAVE ARCADE</button></div><p class="note">Left/right arrow keys or A/D also work. A personal best is saved locally.</p>',"arcade");
 $("arcStart").onclick=()=>{runner.running=true;$("arcStart").disabled=true;$("arcStart").textContent="RUNNING";};
 $("arcLeave").onclick=()=>{runner=null;close();};
 $("arcLeft").onclick=()=>runnerMove(-1);$("arcRight").onclick=()=>runnerMove(1);
 renderRunner();
}
function runnerMove(dir){if(runner&&runner.running)runner.lane=C.clamp(runner.lane+dir,0,2);}
function renderRunner(){
 if(!runner||!$("arcadeField"))return;
 $("runTime").textContent=Math.ceil(runner.seconds)+"s";
 $("runScore").textContent="SCORE "+runner.score;
 $("runLives").textContent="♥ ".repeat(runner.lives);
 const field=$("arcadeField"),width=field.clientWidth;
 $("runnerHero").style.left=(runner.lane+.5)*100/3+"%";
 $("runnerObjects").innerHTML=runner.objects.map(o=>'<div class="runner-item '+o.type+'" style="left:'+((o.lane+.5)*100/3)+'%;top:'+o.y+'px;width:'+(o.type==="node"?24:55)+'px;height:'+(o.type==="node"?24:24)+'px"></div>').join("");
}
function endRun(){
 if(!runner)return;const current=runner;runner=null;
 const result=C.activityReward(save,"ghostCircuit",current.runId,current.score);saveGame();
 show('<div class="tag">GHOST CIRCUIT · RUN COMPLETE</div><h2>'+current.score+' points</h2><p>You collected nodes, dodged blockers, and finished with '+current.lives+' lives. '+(result.best?"New personal best!":"Keep chasing your personal best!")+'</p><span class="stat-pill">Gaming +'+result.xp+' XP</span><span class="stat-pill">BEST '+save.highScores.ghostCircuit+'</span><div class="buttons"><button id="againArcade" class="primary">PLAY AGAIN</button><button id="leaveArcade">BACK TO HOMEWOOD</button></div>',"arcade-result");
 $("againArcade").onclick=openArcade;$("leaveArcade").onclick=close;renderUI();
}
function updateRunner(dt){
 if(!runner||!runner.running)return;
 const r=runner;r.seconds-=dt;r.spawn-=dt;
 if(r.spawn<=0){r.spawn=.45+Math.random()*.24;r.objects.push({lane:Math.floor(Math.random()*3),type:Math.random()<.48?"hazard":"node",y:-26});}
 r.objects.forEach(o=>{o.y+=dt*255;if(o.y>265&&!o.hit){o.hit=true;if(o.lane===r.lane){if(o.type==="hazard"){r.lives=Math.max(0,r.lives-1);r.combo=0;}else{r.combo++;r.score+=10+Math.min(30,r.combo*2);}}}});
 r.objects=r.objects.filter(o=>o.y<340);
 renderRunner();if(r.seconds<=0||r.lives<=0)endRun();
}
function paint(){
 if(!save)return;const w=viewport.w,h=viewport.h;
 cam.x=C.clamp(save.position.x-w/2,0,Math.max(0,WIDTH-w));cam.y=C.clamp(save.position.y-h/2,0,Math.max(0,HEIGHT-h));
 ctx.clearRect(0,0,w,h);ctx.save();ctx.translate(-cam.x,-cam.y);
 const night=save.realm==="nightwood",t=performance.now()/1000;
 ctx.fillStyle=night?"#111b2b":"#638e70";ctx.fillRect(0,0,WIDTH,HEIGHT);
 // patterned grass/urban blocks
 for(let x=18;x<WIDTH;x+=42)for(let y=18;y<HEIGHT;y+=42){const v=Math.sin(x*11.1+y*3.42);if(v>.45){ctx.fillStyle=night?"#1e2a3f":"#86aa82";ctx.fillRect(x,y,4,2);}}
 // road network
 ctx.fillStyle=night?"#192134":"#626f73";ctx.fillRect(0,375,WIDTH,168);ctx.fillRect(740,0,155,HEIGHT);ctx.fillRect(0,770,WIDTH,85);
 ctx.strokeStyle=night?"#364057":"#d7d1ad";ctx.lineWidth=3;ctx.setLineDash([24,22]);ctx.beginPath();ctx.moveTo(0,458);ctx.lineTo(WIDTH,458);ctx.moveTo(815,0);ctx.lineTo(815,HEIGHT);ctx.stroke();ctx.setLineDash([]);
 // sidewalk bands
 ctx.fillStyle=night?"#283044":"#aab3a9";ctx.fillRect(0,367,WIDTH,8);ctx.fillRect(0,543,WIDTH,8);
 const building=(x,y,bw,bh,label,roof)=>{ctx.fillStyle="#050c13a0";ctx.fillRect(x+8,y+9,bw,bh);ctx.fillStyle=night?"#2c293d":roof;ctx.fillRect(x,y,bw,bh);ctx.strokeStyle=night?"#82719b":"#c9c4b0";ctx.lineWidth=4;ctx.strokeRect(x+3,y+3,bw-6,bh-6);ctx.fillStyle=night?"#655778":"#475a65";for(let n=24;n<bw-8;n+=57){ctx.fillRect(x+n,y+17,26,31);}ctx.fillStyle=night?"#c2a4ee":"#f4efd9";ctx.font="700 17px sans-serif";ctx.textAlign="center";ctx.fillText(label,x+bw/2,y+bh/2);};
 building(370,95,455,249,night?"SHADOW SCHOOL":"HOMEWOOD HIGH","#7d6659");
 building(858,135,315,192,night?"BLACKSTAGE":"AUDITORIUM","#8e6d67");
 building(160,565,285,184,night?"DEAD QUARTER":"QUARTERLIGHT ARCADE","#375765");
 building(1042,557,289,181,night?"UNWRITTEN STACKS":"PUBLIC LIBRARY","#a49c81");
 // trees and small props 
 for(let i=0;i<25;i++){const x=35+(i*179)%1430,y=45+(i*127)%800;if(blocks.some(b=>x>b.x-20&&x<b.x+b.w+20&&y>b.y-20&&y<b.y+b.h+20))continue;if((y>365&&y<555)||(x>730&&x<905))continue;
 ctx.fillStyle=night?"#1b2639":"#426a4d";ctx.beginPath();ctx.arc(x,y,17+(i%3)*3,0,Math.PI*2);ctx.fill();ctx.fillStyle=night?"#384259":"#588f63";ctx.beginPath();ctx.arc(x-5,y-5,13,0,Math.PI*2);ctx.fill();}
 // realm-specific strange shadows
 if(night){for(let i=0;i<6;i++){const x=140+i*228,y=360+(i%2)*190;ctx.fillStyle="#7c6ca718";ctx.beginPath();ctx.ellipse(x,y,92+Math.sin(t*2+i)*22,21,0,0,Math.PI*2);ctx.fill();}}
 if(save.sword&&save.realm==="homewood"){ctx.fillStyle="#150d2e85";ctx.beginPath();ctx.ellipse(828+Math.sin(t)*14,417,70,13,Math.sin(t*.9)*.3,0,Math.PI*2);ctx.fill();ctx.strokeStyle="#9375b0";ctx.beginPath();ctx.moveTo(805,420);ctx.lineTo(870+Math.sin(t)*8,415);ctx.stroke();}
 for(const o of available()){const nearItem=dist(save.position,o)<110;
 ctx.fillStyle=night?"#bea9e9":o.type==="friend"?"#eedfbb":"#eaf4ed";ctx.strokeStyle=night?"#63537f":"#3a5b60";ctx.lineWidth=2;
 if(o.type==="friend"||o.type==="lena"){
  const color=C.PEERS[o.id]?C.PEERS[o.id].color:"#b5bdbc";
  ctx.fillStyle="#18283955";ctx.beginPath();ctx.ellipse(o.x,o.y+15,13,5,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle=color;ctx.fillRect(o.x-8,o.y-2,16,19);ctx.fillStyle="#f1d5bf";ctx.beginPath();ctx.arc(o.x,o.y-9,9,0,Math.PI*2);ctx.fill();
 }else {ctx.beginPath();ctx.arc(o.x,o.y,11,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.fillStyle=night?"#7b60b4":"#2b6576";ctx.beginPath();ctx.arc(o.x,o.y,4,0,Math.PI*2);ctx.fill();}
 if(nearItem||o.type==="arcade"||o.type==="library"||o.type==="auditorium"||o.type==="portal"||o.type==="exit"){
  ctx.textAlign="center";ctx.font="bold 11px sans-serif";const width=Math.min(160,ctx.measureText(o.label).width+18);ctx.fillStyle=night?"#151024e0":"#142a34df";ctx.fillRect(o.x-width/2,o.y-36,width,19);ctx.fillStyle="#edf5f9";ctx.fillText(o.label,o.x,o.y-22);
 }}
 // monsters
 for(const e of enemies)if(e.alive&&night){
 const cfg=C.MONSTERS[e.kind],x=e.x,y=e.y;
 ctx.fillStyle="#02020ca1";ctx.beginPath();ctx.ellipse(x+5,y+14,24,8,.2,0,Math.PI*2);ctx.fill();
 ctx.fillStyle=e.glow>0?"#d8faff":"#141421";
 ctx.strokeStyle=cfg.color;ctx.lineWidth=2;
 ctx.beginPath();
 if(e.kind==="nighthound"){ctx.ellipse(x,y,21,12,0,0,Math.PI*2);}
 else if(e.kind==="crawler"){for(let q=0;q<8;q++){const a=q*Math.PI/4;ctx.moveTo(x,y);ctx.lineTo(x+Math.cos(a)*25,y+Math.sin(a)*22);}ctx.arc(x,y,12,0,Math.PI*2);}
 else if(e.kind==="shadewalker"){ctx.ellipse(x,y-14,12,27,0,0,Math.PI*2);}
 else if(e.kind==="feeder"){ctx.ellipse(x,y-10,23,23,0,0,Math.PI*2);}
 else if(e.kind==="howler"){ctx.ellipse(x,y-7,19,18,0,0,Math.PI*2);}
 else ctx.ellipse(x,y,15,15,0,0,Math.PI*2);
 ctx.fill();ctx.stroke();
 ctx.fillStyle=cfg.color;ctx.beginPath();ctx.arc(x-5,y-8,3,0,Math.PI*2);ctx.arc(x+5,y-8,3,0,Math.PI*2);ctx.fill();
 if(e.warn>0){ctx.strokeStyle="#e3a5ca";ctx.beginPath();ctx.arc(x,y,34+Math.sin(t*10)*5,0,Math.PI*2);ctx.stroke();}
 if(e.kind==="shadewalker"){ctx.fillStyle="#4f39777b";ctx.beginPath();ctx.ellipse(x+31+Math.sin(t*2)*22,y+21,39,10,.6,0,Math.PI*2);ctx.fill();}
 if(dist(e,save.position)<270){ctx.fillStyle="#4b3545";ctx.fillRect(x-22,y-42,44,4);ctx.fillStyle="#b5d7e6";ctx.fillRect(x-22,y-42,44*C.clamp(e.hp/e.max,0,1),4);}
 }
 // player sprite
 const p=save.position;
 ctx.fillStyle="#0008";ctx.beginPath();ctx.ellipse(p.x,p.y+14,16,6,0,0,Math.PI*2);ctx.fill();
 if(iframe>0&&Math.sin(t*40)>0){ctx.globalAlpha=.5;}
 ctx.fillStyle="#28303b";ctx.fillRect(p.x-7,p.y+2,6,20);ctx.fillRect(p.x+2,p.y+2,6,20);
 ctx.fillStyle=save.shirt;ctx.fillRect(p.x-12,p.y-12,24,22);
 ctx.fillStyle=save.gender==="girl"?"#f0c9b8":"#e8c6af";ctx.beginPath();ctx.arc(p.x,p.y-20,12,0,Math.PI*2);ctx.fill();
 ctx.fillStyle=save.gender==="girl"?"#302433":"#3b3130";ctx.beginPath();ctx.arc(p.x,p.y-25,12,Math.PI*1.1,Math.PI*1.9);ctx.lineTo(p.x+10,p.y-20);ctx.fill();
 if(night&&save.sword){ctx.strokeStyle="#b8f0fa";ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(p.x+8,p.y-2);ctx.lineTo(p.x+9+facing.x*28,p.y-8+facing.y*28);ctx.stroke();}
 ctx.globalAlpha=1;
 if(slashTime>0){const a=Math.atan2(facing.y,facing.x);ctx.strokeStyle="#abedff";ctx.lineWidth=8;ctx.beginPath();ctx.arc(p.x,p.y,57,a-.6,a+.8);ctx.stroke();}
 if(hitTimer>0){ctx.strokeStyle="#f49bb1";ctx.lineWidth=4;ctx.beginPath();ctx.arc(p.x,p.y,27,0,Math.PI*2);ctx.stroke();}
 for(const f of fx){ctx.globalAlpha=C.clamp(f.life/(f.max||1),0,1);ctx.strokeStyle=f.color;ctx.fillStyle=f.color;
 if(f.kind==="ring"){ctx.lineWidth=2;ctx.beginPath();ctx.arc(f.x,f.y,(1-f.life/f.max)*105,0,Math.PI*2);ctx.stroke();}
 else{ctx.font="bold 14px sans-serif";ctx.textAlign="center";ctx.fillText(f.text,f.x,f.y);}}
 ctx.globalAlpha=1;for(const part of particles){ctx.fillStyle=part.color;ctx.fillRect(part.x,part.y,3,3);}
 ctx.restore();
 if(night){const grd=ctx.createRadialGradient(w/2,h/2,Math.min(w,h)*.15,w/2,h/2,Math.max(w,h)*.76);grd.addColorStop(0,"#06071008");grd.addColorStop(1,"#07051ec9");ctx.fillStyle=grd;ctx.fillRect(0,0,w,h);}
}
function update(dt){
 if(!save)return;
 if(!mode){
 movement(dt);updateMonsters(dt);
 if(save.realm==="homewood"){save.health=Math.min(100,save.health+7*dt);save.dread=Math.max(0,save.dread-12*dt);}
 save.focus=Math.min(100,save.focus+11*dt);
 attackCd=Math.max(0,attackCd-dt);slashTime=Math.max(0,slashTime-dt);dodgeCd=Math.max(0,dodgeCd-dt);dodgeTime=Math.max(0,dodgeTime-dt);iframe=Math.max(0,iframe-dt);hitTimer=Math.max(0,hitTimer-dt);
 near=nearby();$("prompt").textContent=near?"E / TAP — "+near.label:save.realm==="nightwood"?"SPACE sword · F Pulse · SHIFT dodge · Find Custodian seal":"WASD or click to move · E interact · Explore Homewood";
 // discover venues by approaching them
 for(const o of available())if((o.type==="arcade"||o.type==="library")&&dist(save.position,o)<115){const id=o.type==="arcade"?"arcade":"library";if(!save.discovered[id]){save.discovered[id]=true;toast("Quick Visit unlocked: "+o.label);saveGame();}}
 elapsedUI+=dt;saveTick+=dt;save.timePlayed+=dt;
 if(elapsedUI>.4){elapsedUI=0;renderUI();}
 if(saveTick>7){saveTick=0;saveGame();}
 }
 updateRunner(dt);
 for(const f of fx){f.life-=dt;if(f.kind==="text")f.y-=26*dt;}fx=fx.filter(f=>f.life>0);
 for(const part of particles){part.x+=part.vx*dt;part.y+=part.vy*dt;part.life-=dt;}particles=particles.filter(p=>p.life>0);
}
function loop(t){
 const dt=Math.min(.04,Math.max(0,(t-frameTime)/1000));frameTime=t;
 update(dt);paint();requestAnimationFrame(loop);
}
function exportSave(){
 if(!save)return;
 const data=new Blob([JSON.stringify(save,null,2)],{type:"application/json"});
 const url=URL.createObjectURL(data),a=document.createElement("a");a.href=url;a.download="nightwood-"+save.name.toLowerCase().replace(/[^a-z0-9]/g,"-")+".json";a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);
}
function bind(){
 document.querySelectorAll("[data-tab]").forEach(b=>b.onclick=()=>{tab=b.dataset.tab;document.querySelectorAll("[data-tab]").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderPanel();});
 $("helpBtn").onclick=()=>choiceScreen("Controls","Move with WASD or arrow keys; click/tap the ground to walk. Near an NPC or location press E or tap its marker. In Nightwood: Space swings the Night Splitter, F casts Pulse magic, Shift dodges. Quick Visit unlocks after you visit the arcade or library.",[{label:"BACK TO GAME",action:()=>{}}]);
 $("resetBtn").onclick=()=>choiceScreen("Start a new character?","This deletes the current local browser save, including skill XP and records. Export a backup first if you want to keep it.",[{label:"KEEP CURRENT CHARACTER",action:()=>{}},{label:"DELETE SAVE AND START NEW",action:()=>{try{localStorage.removeItem(STORAGE);}catch(e){}save=null;enemies=[];makeCharacter();}}]);
 $("exportBtn").onclick=exportSave;
 $("quickArcade").onclick=()=>{if(save.discovered.arcade)openArcade();else toast("Find Quarterlight Arcade first.");};
 $("quickLibrary").onclick=()=>{if(save.discovered.library)openStacks();else toast("Find the library first.");};
 $("homeBtn").onclick=()=>{if(save.realm==="nightwood")cross("homewood");else{relocate(610,430);renderUI();toast("Back near Homewood High");}};
 $("touchAttack").onclick=attack;$("touchPulse").onclick=pulse;$("touchDodge").onclick=dodge;$("touchInteract").onclick=interact;
 for(const b of document.querySelectorAll("[data-move]")){
  const k={up:"w",left:"a",down:"s",right:"d"}[b.dataset.move];
  b.addEventListener("pointerdown",e=>{e.preventDefault();keys.add(k);});
  for(const ev of ["pointerup","pointercancel","pointerleave"])b.addEventListener(ev,()=>keys.delete(k));
 }
 window.addEventListener("keydown",e=>{
  const tag=document.activeElement&&document.activeElement.tagName;
  if(["INPUT","TEXTAREA","SELECT"].includes(tag))return;
  const k=e.key.toLowerCase();
  if([" ","arrowup","arrowdown","arrowleft","arrowright"].includes(k))e.preventDefault();
  if(runner&&runner.running){if(k==="arrowleft"||k==="a")runnerMove(-1);else if(k==="arrowright"||k==="d")runnerMove(1);return;}
  if(mode){if(k==="escape"&&mode!=="create"&&mode!=="arcade")close();return;}
  keys.add(k);
  if(k==="e")interact();
  if(k===" ")attack();
  if(k==="f")pulse();
  if(k==="shift")dodge();
 });
 window.addEventListener("keyup",e=>keys.delete(e.key.toLowerCase()));
 window.addEventListener("blur",()=>keys.clear());
 document.addEventListener("visibilitychange",()=>{frameTime=performance.now();keys.clear();});
 canvas.addEventListener("pointerdown",e=>{
  if(!save||mode)return;
  const r=canvas.getBoundingClientRect(),wx=(e.clientX-r.left)+cam.x,wy=(e.clientY-r.top)+cam.y;
  const o=available().find(a=>Math.hypot(a.x-wx,a.y-wy)<37);
  const enemy=save.realm==="nightwood"?enemies.find(a=>a.alive&&Math.hypot(a.x-wx,a.y-wy)<36):null;
  if(enemy){facing={x:(enemy.x-save.position.x)/Math.max(1,dist(enemy,save.position)),y:(enemy.y-save.position.y)/Math.max(1,dist(enemy,save.position))};if(dist(enemy,save.position)<95)attack();else chooseTarget({x:enemy.x,y:enemy.y});}
  else if(o)chooseTarget({x:o.x,y:o.y},o);
  else chooseTarget({x:wx,y:wy});
 });
 window.addEventListener("resize",resize);
}
function boot(){
 bind();resize();save=loadGame();if(save){renderUI();if(save.realm==="nightwood")spawnNightwood();toast("Welcome back to Homewood, "+save.name+".");}
 else makeCharacter();
 requestAnimationFrame(loop);
}
boot();
})();