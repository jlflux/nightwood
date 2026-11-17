const test=require("node:test");
const assert=require("node:assert/strict");
const C=require("../core.js");
test("player chooses their own name and boy or girl",()=>{
 const a=C.freshSave("Alex","boy","#aaa"),b=C.freshSave("Morgan","girl","#bbb");
 assert.equal(a.name,"Alex");assert.equal(b.name,"Morgan");
 assert.equal(a.gender,"boy");assert.equal(b.gender,"girl");
 assert.equal(a.sword,false);assert.equal(b.realm,"homewood");
});
test("malicious HTML cannot enter character name",()=>{
 assert.equal(C.cleanName("<script>X</script>"),"scriptX/script");
 assert.equal(C.cleanName(""),"Student");
});
test("all 6 monster families have distinct specs",()=>{
 assert.deepEqual(Object.keys(C.MONSTERS).sort(),["crawler","feeder","howler","nighthound","shadewalker","stray"].sort());
 assert.ok(C.MONSTERS.stray.hp<C.MONSTERS.shadewalker.hp);
 assert.equal(C.MONSTERS.shadewalker.kind,"shadow");
 assert.equal(C.MONSTERS.crawler.kind,"climb");
 assert.equal(C.MONSTERS.nighthound.kind,"pounce");
});
test("7 named boss encounters include three-boss Crown Council",()=>{
 assert.equal(C.BOSSES.length,7);
 assert.ok(C.BOSSES.includes("Mistress Shade"));
 assert.ok(C.BOSSES.includes("The Crown Council"));
});
test("modern skills and sword progression are independent",()=>{
 const s=C.freshSave("Test","girl");
 assert.equal(C.awardSkill(s,"gaming",200).level>1,true);
 assert.equal(s.skills.bladecraft.level,1);
 assert.equal(s.skills.cardSense.level,1);
});
test("activity result grants XP once and saves a personal best",()=>{
 const s=C.freshSave("Test","boy");
 const first=C.activityReward(s,"ghostCircuit","round-1",200);
 const xp=s.skills.gaming.xp;const cash=s.inventory.cash;
 const duplicate=C.activityReward(s,"ghostCircuit","round-1",800);
 assert.equal(first.applied,true);assert.equal(duplicate.applied,false);
 assert.equal(s.skills.gaming.xp,xp);assert.equal(s.inventory.cash,cash);
 assert.equal(s.highScores.ghostCircuit,200);
});
test("Stacks 21 gives exactly 31 for completed stack 21",()=>{
 const s={cards:[10,10,1],index:0,piles:[0,0,0],states:["open","busted","busted"],finished:false,score:0};
 C.placeStack(s,0);C.placeStack(s,0);const result=C.placeStack(s,0);
 assert.equal(s.states[0],"exact");assert.equal(result.finished,true);assert.equal(result.score,31);
 assert.throws(()=>C.placeStack(s,0));
});
test("Stacks 21 bust and lock rules",()=>{
 const s={cards:[10,10,2],index:0,piles:[0,0,0],states:["open","open","open"],finished:false,score:0};
 C.placeStack(s,0);C.placeStack(s,0);C.placeStack(s,0);
 assert.equal(s.states[0],"busted");
 assert.equal(C.scoreStacks(s),0);
});
test("Stacks 21 same seed generates same cards",()=>{
 assert.deepEqual(C.newStacks(100).cards,C.newStacks(100).cards);
 assert.equal(C.newStacks(100).cards.length,10);
});
test("romance routes available to either boy or girl protagonist",()=>{
 for(const gender of ["boy","girl"]){for(const id of ["mara","jessa","theo","adrian"]){
 const s=C.freshSave("X",gender);assert.equal(C.choosePartner(s,id),true);assert.equal(s.romance.active,id);
 }}
});
test("save load preserves chosen name, realm, and scores",()=>{
 const s=C.freshSave("Jamie","girl");s.realm="nightwood";s.sword=true;s.highScores.ghostCircuit=410;
 const n=C.normalizeSave(JSON.parse(JSON.stringify(s)));
 assert.equal(n.name,"Jamie");assert.equal(n.gender,"girl");assert.equal(n.realm,"nightwood");assert.equal(n.sword,true);assert.equal(n.highScores.ghostCircuit,410);
 assert.equal(C.normalizeSave({version:1}),null);
});
