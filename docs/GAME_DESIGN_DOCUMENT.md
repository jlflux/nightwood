# NIGHTWOOD — Full Game Design Document

**Document version:** 1.0 (preproduction)  
**Project status:** Concept approved for prototyping; no production build yet  
**Genre:** Top-down, modern supernatural action RPG / life-skill RPG / playable-town sandbox  
**Primary platform:** Desktop and mobile web browser  
**Primary audience:** Players who enjoy RuneScape-like progression, action RPGs, life simulators, and quick mini-games  
**Core promise:** You can save Nightwood in a 30-minute adventure or spend 30 seconds at the arcade. Either way, your character grows.

> **Design authority:** This is the canonical statement of the intended product and MVP. Numbers are first-pass balancing targets to validate in playtests, not guarantees that systems have already been implemented.

---

## 1. Executive vision

**Elevator pitch:** **Nightwood** is a modern-day, top-down, supernatural RPG set in **Homewood**, a warm and familiar Alabama city. The player creates a high school student with their own **name, boy/girl identity, and appearance**. After discovering **The Night Splitter**, a magical sword concealed beneath the school auditorium, they cross into **Nightwood**, a dangerous shadow realm that mirrors Homewood. They must master sword and magic combat, unravel a mystery, and protect their hometown while still being a normal student.

**Player fantasy:** One persistent customizable character, one familiar town with two very different faces, modern-day RuneScape-like skills, optional school friendships and romance, genuine playable arcade and library mini-games, and action combat that feels good without requiring a massive art library.

**Core promise:** Save Homewood in a 30-minute adventure, or spend 30 seconds playing Ghost Circuit at the arcade. Both are valid ways to enjoy and grow the same character.

### 1.1 Non-negotiable design pillars

1. **Homewood is home; Nightwood is the shadow realm.** Homewood is cozy, sociable, and bright; Nightwood shares its geography but changes it into something disturbing and hostile.
2. **No predefined protagonist identity.** The player chooses their own name and boy/girl character. The story and dialogue use that choice consistently.
3. **Ordinary life and secret life have equal value.** School, friends, family, hobbies and optional age-appropriate romance matter, but are not tedious mandatory chores.
4. **True playable short sessions.** The arcade and library house real repeatable games, not idle rewards. Once discovered, venues have Quick Visit access.
5. **Modern independent skills.** Athletics, Research, Electronics, Gaming, Card Sense, First Aid and more grow separately from Bladecraft and Channeling.
6. **The Night Splitter is iconic.** This permanent sword gains sword and magic abilities and visible modifications, rather than being replaced by random loot.
7. **Readable action.** Top-down movement, responsive sword hits, magic, dodge, telegraphed monsters and fair bosses are more important than fancy animation.
8. **Asset-light, visually coherent.** Use modular overhead environments and code-generated silhouettes/particles. Nightwood can reuse Homewood layouts with transformed lighting, props and hazards.
9. **Progress without punishment.** No daily login pressure, real-time school deadlines, energy gates, real-money gambling, or pay-to-win.
10. **Build a focused slice first.** The full six-monster ecology and seven early bosses are canon, but not all need to be coded before the movement, sword, mini-games and saves are fun.

### 1.2 Emotional experience

It should feel wonderful to walk back into warm, ordinary Homewood sunlight after narrowly escaping Nightwood's version of the same school hallway. A friend's invitation to play an arcade game or spend time together should feel just as real as gaining a powerful sword technique.

### 1.3 What the first release is not

Not a live MMO, not a forced school attendance simulator, not a giant photorealistic city, not an automatic idle game, not an asset-heavy animation production, and not a mandatory dating simulator. The early playable slice is an actual small overhead RPG with persistent skill growth and replayable leisure activities.

**Terminology:** Game title/monster realm **Nightwood**; ordinary city **Homewood**; sword **The Night Splitter**; boundary-monitoring faction **The Custodians**. There is no original fixed-name protagonist. See the Story & World Bible v2 for precise canon.

## 2. Setting and fiction — canonical revised design

**Homewood** is the comfortable, homey present-day city in Alabama. **Nightwood** is a disturbing **shadow realm** that overlaps the city, with warped doubles of ordinary locations. The barrier between them is called **the boundary**, *not* “the Veil.” The school, town map, students and incidents are fictionalized; no actual local student or incident is represented.

**Protagonist:** A high school student around age 17. There is **no canonical character name**. At first launch, choose name, **boy or girl**, hair, skin tone and outfit colors. Dialogue must use the player name and appropriate pronouns. The character's gender never restricts core skills, magic, or romance options.

**The Night Splitter:** The permanent named magic sword found concealed beneath the school's auditorium stage. It can cut Nightwood creatures, channel sword techniques and magic, reveal hidden trails, sever anchors and create controlled crossings at marked seams. It folds into a harmless-looking keepsake when the character returns to school. It evolves visibly and is not replaced by random loot swords.

**The Custodians:** An informal network monitoring Nightwood, maintaining failing seals and concealing the shadow realm's existence. Their disagreements and mistakes matter to the story. Ms. Lena Park, librarian and archivist, is an early contact.

### Starting Nightwood monsters

| Monster | Canon role | Combat implementation |
|---|---|---|
| **Strays** | Weakest, most numerous | Swarming small melee attackers |
| **Shadewalkers** | Most dangerous to Homewood because **their shadows cast into Homewood** while their bodies stay in Nightwood | Offset shadow projections, repositioning/stealth and home-realm hazard |
| **Howlers** | Loud and deceptive; fool players with noises | Fake audio directions with true accessible visual telegraph |
| **Feeders** | Feed on fear | Counterable visible Dread status, Focus drain |
| **Nighthounds** | Pets of Feeders | Fast packs and master-linked behaviors |
| **Crawlers** | Can climb walls and ceilings | Ceiling traversal and clearly marked drop attacks |

**Early-saga bosses (planned):** **Mistress Shade** at the school's Nightwood counterpart; **The Warden**; **The Unseen King**; **Nyxara**; **The Maw**; **Astrix**; and **The Crown Council**, a **three-boss encounter**. The first prototype only needs a Mistress Shade teaser and an initial monster encounter; do not present all seven as implemented content.

### Friends and optional romance

Four peer love interests: **Mara Ortiz (girl), Jessa Navarro (girl), Theo Brooks (boy), Adrian Bell (boy)**. Boy or girl player characters can pursue any option. Relationships are opt-in, teen-appropriate authored stories about attraction, trust, school life and secrecy; romance is not required and has no sexual content. NPCs remain friends if romance is declined.

**Story spine:** Normal school day in Homewood → shadow anomaly and missing student → Night Splitter discovery → first crossing into Nightwood → Stray swarm/Crawler ambush/Shadewalker projection → Mistress Shade at the mirrored school → return to friends with a choice about secrecy. Longer arc moves through the Warden, Unseen King, Nyxara, Maw, Astrix and Crown Council.

Detailed world rules, monster ecology, bosses, cast and four-act plot are canonical in the **Story & World Bible v2**.

## 3. Core player loop and session design

### 3.1 The complete loop

**Choose how to spend time → play an activity in a real location → receive skill XP, money, items, clues, or relationship progress → upgrade character → discover new options.**

The player is not forced to fight to progress. Combat drives the central story, but noncombat specialties provide worthwhile progression and rewards.

### 3.2 Three valid session lengths

| Session | Example action | Target experience |
|---|---|---|
| **20–60 seconds** | Play one arcade run, play a quick card round at the library, practice free throws, scan a clue, complete a simple electronics puzzle | A genuine beginning, middle, end, result, and saved reward |
| **2–8 minutes** | Run a short side quest, clear a mini-breach, investigate one location, chain several mini-games, upgrade a few skills | Satisfying micro-adventure and visible progression |
| **15–30+ minutes** | Walk around town, follow story leads, handle school responsibilities, fight through a dangerous zone, defeat a mini-boss | Immersive RPG session with narrative payoff |

**Critical distinction:** “30 seconds” is not shorthand for claiming a daily reward, watching a progress bar, or waiting for something to complete. There must be playable input and a score/outcome. A player who loves the library card game should be free to play it repeatedly.

### 3.3 Getting to a short activity

Initially, the player physically discovers the arcade or library by walking there. Once visited, the location becomes accessible from the in-game **Phone → Places → Quick Visit** menu when the player is not in combat or mid-quest. A short transit fade places the player just inside the venue. This is a convenience shortcut, not literal teleportation in the fiction. It preserves the navigable world without spending most of a 30-second session walking.

Players can resume at the last safe position or open **Quick Play** on the title screen to enter a previously discovered activity. The mini-game returns them to its venue and then their last safe place if they choose.

### 3.4 Player motivation at three horizons

- **This session:** Beat a score, find one clue, upgrade a technique, help an NPC, beat one monster.
- **This week:** Unlock a new district, raise a skill to a milestone, complete a school storyline, advance the Night Splitter tree.
- **Long term:** Finish chapters, master professions, collect cosmetic artifacts, discover rare variants, grow relationships, beat personal records, complete challenge runs, and compare optional asynchronous rankings.

### 3.5 No passive punishment

Real-world time passing does not cause the player to miss school, lose friendships, weaken skills, or forfeit events. “Days” are controlled by story progression and explicit rest/end-day actions. Casual mini-game repetition can be played without constantly moving the plot clock. Story events may have in-fiction deadlines, but they only advance when the player takes a clearly labeled step. Saving is automatic.

---

## 4. Player controls, traversal, and camera

**Perspective:** True overhead/top-down 2D, not isometric and not side-scrolling. The player must be able to move up, down, left, and right in a visibly navigable environment.

- **Desktop:** WASD / arrow keys for movement; mouse click-to-move as an alternative; left click to attack or interact depending on context; right click or an ability key for magic; Space for dodge; E for nearest interaction; keyboard shortcuts for abilities and panels.
- **Mobile:** Touch-to-move or optional virtual joystick; large action, dodge, and 2–3 ability buttons; tap targets and interactive objects; reachable UI above the mobile fold where possible.
- **Controller:** Nice-to-have after the first playable slice, not launch-critical.
- **Camera:** Smooth follow with collision bounds, strong occlusion handling, sensible zoom controls, and readable character/monster silhouettes.
- **Exploration:** Small linked maps: school courtyard, halls, library, arcade, neighborhood, creek trail, auditorium basement. NPCs have schedules tied to story phase, not a clock that runs while the player is absent.
- **World objects:** Obvious highlight or interact icon when near a door, NPC, clue, game cabinet, vending machine, broken terminal, resource cache, or enemy.

**Feel targets for prototype:** Precise responsive movement, no invisible walls or unreadable depth, fast interactions, crisp attack feedback, short loading transitions, and no need to scroll down the page to see combat or skill upgrades.

---

## 5. Combat design: the sword and magic

### 5.1 Combat fantasy and target complexity

the player fights Strays with Night Splitter and a handful of magic techniques. Combat is direct and readable, not a spreadsheet or full Diablo clone. A normal overworld fight should last approximately **10–35 seconds** at equal gear; a meaningful boss may take **2–4 minutes** once the player understands patterns.

### 5.2 Launch combat verbs

| Action | Behavior | Purpose |
|---|---|---|
| **Sword Strike** | Fast three-hit sequence with short committed swings | Reliable zero-resource damage |
| **Dodge** | Brief directional burst with a limited invulnerability window | Avoid telegraphed hits |
| **Pulse** | Short ranged crescent of magical force | Hit enemies at distance and interrupt weak charges |
| **Ward** | Quick magical guard consuming Focus | Defensive choice instead of nonstop attacking |
| **Rend** | Heavier slash, unlocked through early sword story | Breaks armored monster posture |
| **Interact / Seal** | Closes an exposed breach after enemies are cleared | Connects combat to the world |

Additional advanced abilities come later: tether/bind, area sweep, counter, veil reveal, chain pulse, and temporary blade resonance.

### 5.3 Resources and stats

- **Health:** Determines survivability; restored by safe rest, first-aid supplies, and some techniques.
- **Focus:** Magic resource spent on Pulse and Ward, regenerates slowly outside combat and partly from skilled swordplay.
- **Stamina:** Short-use sprint and dodge resource, refills quickly; never a real-time energy gate.
- **Attack / Guard / Mobility:** Derived from sword technique rank and supporting equipment.
- **Bladecraft mastery:** Improves sword moves, cancels, counters, and damage consistency.
- **Channeling mastery:** Improves magic range, Focus efficiency, sigils, and sealing.
- **Modern skills:** Athletics, First Aid, Research, Electronics, etc., have tangible secondary effects, never replacing active player skill.

### 5.4 Combat rules for initial prototype

- Enemies telegraph significant attacks with a wind-up and clear ground indicator.
- Sword hits have slight hit-stop and knockback, small particles, and sound; no elaborate art rig is required.
- Dodge takes precedence over buffered regular attacks when allowed; avoid input-eating.
- A monster in reach can be target-selected with click/tap; sword hitbox remains positional.
- Monsters cannot silently spawn on top of the player.
- Defeat returns the player to a safe place, retains character XP and permanent items, and costs only minor consumables or a small temporary injury. No full inventory drop or permadeath.
- Human NPCs cannot be attacked. Fantasy violence is stylized, with no gore.

### 5.5 Nightwood monster and boss roster

Combat opponents are **Strays, Shadewalkers, Howlers, Feeders, Nighthounds, and Crawlers**, with distinct gameplay functions and minimal-art silhouettes.

- **Strays:** Most numerous and individually weakest. Simple dark shapes with glowing eyes; attack in groups.
- **Shadewalkers:** Tall roaming shadows; a separate cast-shadow entity can create detectable hazards in Homewood even if their body remains in Nightwood. This is central to the story and mechanics.
- **Howlers:** Manipulate sound to draw players the wrong way; use visible honest combat telegraphs for accessibility.
- **Feeders:** Build a visible, counterable Dread effect by feeding on fear; defensive magic can mitigate it.
- **Nighthounds:** Fast quadruped enemies serving/protecting nearby Feeders.
- **Crawlers:** Many-limbed enemies that travel along walls and ceilings before a warned drop.

**First combat slice:** Strays, a Crawler ambush and a simple Shadewalker shadow projection, all in a small Nightwood reflection of Homewood High. Add other full behaviors once movement and sword combat feel good.

**Bosses:** Mistress Shade (school); The Warden (Lockworks); The Unseen King (Shadewalker ruler); Nyxara (reflection); The Maw (deep shadow-water); Astrix (signal tower); The Crown Council (three independent bosses simultaneously). These are planned early-saga content, not all MVP requirements.

### 5.6 Sword progression

The player doesn't farm hundreds of nearly identical blades. Night Splitter has:
- **Technique slots** for the active moveset (initially two techniques; expand later).
- **Sigil slots** for crafted combat modifiers.
- **Visual stages** for story milestones (new glowing line/guard detailing).
- **Mastery branches:** **Edge** (melee precision), **Guard** (defense/counters), **Resonance** (magic/special effects).

Players may respec these branches at a safe location for a modest in-game cost, freely in early prototype tests. No permanent build trap.

### 5.7 Gear and loot

Equip two everyday clothing pieces, one accessory, one tool, and one Night Splitter sigil in the MVP; expansion may add more. Item examples: running shoes (dodge recovery), insulated jacket (resistance), repaired fitness tracker (mobility), notebook charm (research), compact first-aid pouch (healing), grounded-wire sigil (Pulse modifier).

Item quality tiers should be clear (Common, Unusual, Rare, Singular) with low random-stat variance. Rare drops should change tactical options or appearance, not only inflate a number.

---

## 6. MMO-style modern skill system

### 6.1 Why skills matter

Each modern skill has independent experience, levels, visible progress, milestone unlocks, and multiple ways to train. Skills unlock practical everyday advantages and help in supernatural situations. A player who spends most of a week in the arcade or library is genuinely making progress.

### 6.2 Skills — launch roadmap

**MVP playable skills** are starred. All others are expansion targets, not promises for the first build.

| Skill | Modern training activities | Useful unlocks |
|---|---|---|
| **Athletics ★** | Running, gym drills, dodging, outdoor challenges | Faster movement, more reliable dodges, gym challenge access |
| **Research ★** | Library clues, journals, archives, evidence boards | Reveal monster weaknesses, quest options, secret locations |
| **Electronics ★** | Repair handheld devices, solve circuit puzzles, tinker with scanners | Better gadgets, detectors, device shortcuts |
| **First Aid ★** | Treat minor injuries, prepare kits, help NPCs | More effective consumables and recovery |
| **Scavenging ★** | Search legal/public caches, salvage abandoned gear, explore | Find craft parts, hidden clues, rare materials |
| **Gaming ★** | Arcade challenges, score attacks, cabinet tournaments | New arcade modes, cosmetics, local rankings |
| **Card Sense ★** | Library card-table mini-games and challenges | Advanced card variants, card table reputation, cosmetics |
| Fitness | Training circuits, calisthenics | Max health, endurance, recovery |
| Coding | Programming puzzles and fictional terminals | Fictional device logic, investigative tools |
| Social | Conversations, helping classmates, group activities | Additional dialogue routes and favors |
| Media | Photos, reporting, school-paper work | Evidence verification, story branches, clue documentation |
| Cooking | Make snacks/meals, kitchen mini-games | Temporary buffs, useful consumables |
| Mechanics | Bikes, tools, repair tasks | Shortcuts, repairs, custom gear |
| Awareness | Observation challenges and environmental puzzles | Highlight hidden threats and clues |
| Driving | Licensed travel, route tasks, vehicle challenges | City navigation and vehicle upgrades (later chapters) |

**Supernatural combat mastery** is tracked separately as **Bladecraft** and **Channeling**. These are the deliberate exceptions to the modern-life skill theme: the player is a modern kid with extraordinary abilities.

### 6.3 Level rules and pacing targets

- Skills start at Level 1 and progress independently. First-release target cap: **25** for MVP skills; planned later cap: **50**.
- Character Level tracks overall adventure and major quests separately, preventing arcade repetition from trivializing main-story combat.
- Training is granted for completing an actual interaction, puzzle, mini-game, or encounter — not simply hovering or pressing a fake “work” button.
- Target: first skill level-up within **5–10 minutes** of mixed play; several visible skill improvements in the first hour.
- Milestone unlocks occur at **Levels 5, 10, 15, 20, 25**. Extra levels should not be empty stat bumps.
- Initial tunable XP curve: XP needed to advance from level L to L+1 = **round(20 + 15L + 5L²)**. XP awards are tuned per activity tier. This is a design starting point, not locked balancing.
- Every activity gives base XP plus a measured performance component. Losing a mini-game still gives some progress; better play receives better rewards.
- Repeated mini-games must remain playable with no time cap. No arbitrary daily XP lockouts. Economy rewards are modest enough to discourage exploiting them as the only source of money.

### 6.4 Meaningful specialization

A high Research level may identify the boss's weakness before the fight. High Electronics can create a scanner that reveals a concealed route. High Athletics helps evade. High Card Sense unlocks tougher library opponents. These routes should be **alternatives**, not mandatory checks requiring players to grind 10 unrelated skills for one quest.

Every main-story gate must be reachable by either a low-skill default route or two or more optional specialist routes. Failure should redirect, not softlock.

### 6.5 An example specialist

A player focused on card games, Research, and Electronics could spend much of their session in the library, advance a clue using a rare book, and use an upgraded scanner before confronting an enemy. A combat-focused player could reach the same secret by defeating the monster guarding an alternate path. Both are valid ways to play.

---

## 7. School life and secret identity

### 7.1 Day structure

Story progression uses **three broad states** instead of a real-time attendance simulator:

1. **School Hours:** Classes, hallway dialogue, lunch, gym, media center, rumors, short tasks, and occasional daytime Nightwood incidents.
2. **After School:** Arcade, library, club activities, part-time jobs, neighborhood exploration, preparation.
3. **Night / Dangerous Window:** Breaches are more active, tougher zones become available, major story scenes happen.

The player advances major time states intentionally through quests, resting, or a clearly labeled decision; a timer never ticks forward while the user is offline. Free-play mini-games do not automatically cause the player to miss a class.

### 7.2 The normalcy dilemma

Nightwood should create pressure through **decisions and consequences**, not tedious chores.

- **Trust (per relationship):** Friends respond to help, honesty, keeping promises, and how frequently the player disappears without explaining himself.
- **Exposure (0–100):** How suspicious the school/community is of weird occurrences involving the player character. High Exposure adds rumors, extra surveillance, or alternative routes but does not permanently fail the game.
- **School Standing (0–100):** A lightweight proxy for responsibilities, not individual math/biology grades. Earned through limited authored school tasks; affects teacher dialogue and access.
- **Wellbeing:** A story-oriented condition with clear recovery options, not a constant hunger/sleep/mood timer.

All three scores must be visible with plain descriptions and clearly conveyed consequences. They do not decay in real time.

### 7.3 Responsibilities and events

Plausible everyday decisions:
- Help Mara finish an article or investigate a suspicious campus power outage.
- Attend Theo's arcade challenge or follow a monster sighting immediately.
- Fix a broken classroom projector with Electronics skill.
- Cover a short shift at a part-time job or follow a research lead.
- Turn in a school assignment through a short puzzle or dialogue scene, not a tedious simulated school day.
- Decide whether to reveal part of the truth to a friend.

**No unwinnable urgency:** When a choice temporarily closes a quest route, it should open a valid consequence scene. Friend relationships can recover.

### 7.4 School as the emotional hub

The campus changes as the story advances: a hallway's fluorescent lights begin flickering, a custodial door becomes locked, locker rumors spread, the auditorium stage hides an entrance, and previously ordinary classmates react differently. Reusing maps with changed lighting, NPC placement, and interactable objects is a deliberate cost-saving tool and a narrative strength.

---

## 8. Playable activities and mini-games

**Core requirement:** Arcade and library games must be worth playing **for fun**, even if the player has no quest involving them. Each has its own clear rules, skill-based input, scoring, replay loop, and independent personal best. The first release includes **two fully implemented mini-games**, not ten placeholder icons.

### 8.1 Quarterlight Arcade — Ghost Circuit (MVP)

**Fantasy:** the player walks into a small retro-futurist arcade where his friend Theo hangs out. He steps up to the Ghost Circuit cabinet.

**Type:** Short three-lane reflex runner; one button/gesture for left and right, usable with mouse, keyboard, or touch.

**Round length:** **25 seconds in Quick Run; optional longer 45-second challenge later** including a short countdown and score display. There is no required long level select.

**Rules:**
- Your runner advances automatically through glowing gates.
- Move between three lanes to avoid blocks and collect safe signal nodes.
- A near miss grants a small style bonus; collisions remove a life or combo.
- A run ends at the timer or after three hits.
- Score = nodes collected + clean gate bonus + combo, with legible breakdown.

**Replay hooks:** Personal best, weekly optional score challenges (only when online service exists), cosmetic cabinet themes, harder speed variants. Rewards: Gaming XP, minor cash or prize tickets, occasional cosmetic stickers. Failure also grants modest XP. **No real-world money or loot-box prizes.**

**Asset cost:** Three lanes, abstract obstacles, runner icon, particles, text — almost entirely code-rendered.

### 8.2 Homewood Public Library — Stacks 21 (MVP)

**Fantasy:** At a table near the library windows, a small student group has a simple number-card challenge. The game has nothing to do with the main magical sword.

**Type:** One-screen decision card game using ordinary numbered cards. Fast to learn, playable with the mouse.

**Round length:** **30–90 seconds** (player-paced, not enforced).

**Rules:**
- There are **three stacks**, each starting at zero, and **12 numbered cards** to place one by one.
- Each card has a value from **1 to 10** shown clearly. Tap one stack to place it.
- The goal is to bring each stack as close as possible to **21 without exceeding it**.
- If a stack exceeds 21, that stack is **busted and locked** at zero points.
- After all cards are used, score = total of unbusted stack values plus **10 bonus points for each exact 21**.
- If all stacks bust before 12 cards are placed, the round ends early.
- Cards should be generated from a deterministic seeded draw for fair challenges and testability, with a visible current card and short remaining-card count.

**Replay hooks:** Beat your personal best, try the same daily seed as friends later, unlock faster expert variant, collect table achievements. Rewards: Card Sense XP and tiny school-club reputation gains, not gambling money. No betting or wagering.

**Asset cost:** Plain CSS/SVG cards with number/suit decorations; no elaborate card art.

### 8.3 Later activity roster

| Venue | Activity | Mechanics | Target length | Skill |
|---|---|---|---|---|
| School gym | **Free Throw** | Release timing and moving aim meter | 20–45 sec | Athletics |
| School computer lab | **Code Break** | Fictional wiring/logic path puzzle | 45–120 sec | Coding/Electronics |
| Music room / arcade | **Beatline** | Four-button rhythm snippets with original sound | 30–90 sec | Gaming / Music (later) |
| Convenience store | **Rush Hour** | Quick shelf-sorting shift | 45–90 sec | Social / Work |
| City park | **Snapshot Hunt** | Find and photograph matching landmarks | 1–5 min | Media |
| Neighborhood court | **One-on-One** | Simple shoot/guard timing challenge | 1–3 min | Athletics |
| Library | **Club Cards** | Longer opponent-based card variant | 3–8 min | Card Sense |

**Important:** The first two mini-games should have enough replay depth for a player to spend a full 30-minute session in them if desired.

### 8.4 Mini-game reward contract

Each mini-game returns: activity ID, duration, outcome, score, personal-best flag, skill XP, any fixed first-time milestone, and optional cosmetic unlock. Results are persisted immediately. Story quest credit can listen to an activity-completed event, but **must not require a high score unless the mission explicitly says so**.

### 8.5 Mini-game accessibility and session fit

Every game supports keyboard and touch; uses readable high-contrast feedback; offers pause/restart where relevant; runs without a download or external service; does not demand a separate full-screen webpage; and returns smoothly to the world.

A short session is a design success if a returning player can **launch the game, enter one unlocked mini-game, finish it, see a result, and save within roughly 60 seconds** on a normal connection. This includes the practical startup overhead and thus requires no long startup sequence.

---

## 9. World layout — Homewood / Nightwood

Build **one compact modern Homewood world**, then its **distorted Nightwood reflection** by reusing tile geometry and selectively altering lighting, props, collision gates and inhabitants. The city and the realm must always be visibly distinguished.

    HOMEWOOD HIGH -- ATHLETICS COMPLEX -- CREEK TRAIL
         |                 |                  |
     AUDITORIUM        NEIGHBORHOOD       LOCKWORKS
         |                 |
      QUARTERLIGHT ARCADE -- DOWNTOWN -- PUBLIC LIBRARY

| Homewood location | Ordinary activity | Nightwood reflection |
|---|---|---|
| Homewood High | Classes, friends, training | Repeating locker corridors, Strays, projected shadows |
| Auditorium | Rehearsal/stage | Blackstage, Night Splitter discovery, Mistress Shade |
| Athletics complex | Fitness mini-games, school life | Hollow Stands, Howlers |
| Quarterlight Arcade | Ghost Circuit, Gaming and Theo | Dead Quarter with anomalous cabinets |
| Public Library | Stacks 21, Research, Ms. Park and Adrian | Unwritten Stacks and Nyxara's clues |
| Neighborhood streets | Errands and relationships | Endless dark Long Block and Shadewalker hazards |
| Creek and old works | Exploration, scavenging | Blackwater Cut, Crawlers, Nighthounds, the Warden |

**First slice:** Campus, auditorium, one Nightwood school combat scene, arcade and library. Other districts can be locked/foreshadowed.

**Short session rule:** Once a venue is visited, Phone → Places → Quick Visit (or menu Quick Play) lets the player immediately play a genuine mini-game without walking across the whole map.

## 10. Story structure, quests, and choices

**Act I — The Other Side of Home:** The player chooses a name and boy/girl identity, meets Homewood classmates, discovers the Night Splitter at the school, first fights Strays and specialized shadow monsters, confronts the threat of Mistress Shade, and learns of the Custodians.

**Act II — Streets That Remember:** Investigate mirrored neighborhoods, Howlers, Feeders/Nighthounds, and the Warden; understand how the Unseen King's Shadewalkers reach Homewood.

**Act III — The City With Two Faces:** Nyxara reveals lost sword history; The Maw threatens the boundary; friendships and optional romance complicate keeping the secret.

**Act IV — The Longest Night:** Astrix twists communications; three members of the Crown Council fight as a combined boss encounter; player protects Homewood and decides how much truth to share.

**Quest categories:** Main story, ordinary school-life events, peer/family relationships and optional dates, modern-day tasks/jobs, investigative research, realm expeditions and repeatable arcade/library score challenges. Main quest gates must offer alternatives to avoid forcing unrelated skill grinding.

**Player choices:** Friendship/Trust, School Standing and Exposure are visible. Optional romance with the two male or two female peers works with either gender player and is never mandatory. Real-world clock or logout time cannot damage school standing or relationships.

**Opening target:** Create character → explore cozy Homewood High → train one modern skill → visit arcade or library → impossible school shadow → discover Night Splitter → enter Nightwood and fight → see a Shadewalker cast into Homewood → Mistress Shade teaser → return to ordinary life and face one relationship decision. Detailed scene/dialogue beats live in Story & World Bible.

## 11. Progression, inventory, economy, and collection

### 11.1 Persistent account

The player's primary persistent identity consists of:
- Character profile and appearance.
- Character level and XP.
- All skill levels, XP, milestones, and unlocked activities.
- Night Splitter techniques, sigils, mastery choices, and appearance stage.
- Equipment, inventory, crafting materials, currency, and collectibles.
- Completed and active quests, meaningful choices, unlocked locations.
- Relationships and school standing/exposure.
- Arcade/card personal bests, achievements, and scores.
- Accessible map discoveries and safe respawn position.

### 11.2 Growth should be visible

Level-ups give feedback beyond “+1”: an animation or sound, one clear improvement, newly available interactions, and a character-sheet entry. Night Splitter appearance changes at story milestones. Modern clothes and accessories visibly alter the simple character sprite where feasible, with palette variants before expensive per-item art.

### 11.3 Resources

- **Cash:** Fictional ordinary town money used for snacks, basic gear, small transport services, and clothing. Earned through quests, jobs, some activities.
- **Parts:** Electronics/Scavenging components for devices and support tools.
- **Night Shards:** Supernatural crafting material from Strays and breaches; used for sigils and high-tier sword upgrades.
- **Arcade Tickets:** Earned from arcade skill performances; used for cosmetic cabinets/themes, posters, and optional avatar accessories. No paid conversion.

Avoid many overlapping currencies. There is **no real-money wagering or cash-out system**.

### 11.4 Loot and crafting

Enemies occasionally drop Night Shards and unusual accessories, while everyday exploration yields Parts and consumables. Research can reveal recipes; Electronics can make detectors and upgraded equipment; First Aid prepares recovery kits. MVP crafting should contain **5–8 meaningful recipes**, not hundreds.

### 11.5 Money and power balance

Story combat upgrades should not be purchasable instantly from spamming one mini-game. Arcade rewards are primarily skill XP, scores, collectibles, and small spending money. The strongest Night Splitter upgrades require a story discovery or boss ingredient; secondary build choices can be earned through other activities.

### 11.6 Death and recovery

Losing in battle returns the player to a safe location and may consume an equipped emergency healing charge. Progress, earned skill XP, and rare items remain safe. The intended cost is a small setback, not a rage-quit moment.

---

## 12. Interface and player experience

### 12.1 Primary screen

The world/camera occupies most of the screen. Overlay:
- Top-left: concise health, Focus, and current objective.
- Top-right: compact minimap / Phone access.
- Bottom area: sword attack/dodge and up to three active abilities (repositions for mobile).
- Near relevant objects: context interaction prompts.
- XP and loot feedback: brief unobtrusive popups; no full-screen modal for every minor action.

### 12.2 Player Phone

A fictional phone menu handles **Map / Places, Messages, Quests, Skills, Inventory, Friends, Records** (with Quick Play in Places). It provides a modern thematic UI without consuming the whole game screen. Panels appear as contained overlays, not below the fold; desktop requires no page scrolling to switch between skill upgrades, gear, and the map.

### 12.3 Mini-game UI

A cabinet or card table transitions to a focused game screen with the venue visible in framing. Rules should fit in **three simple sentences** plus a playable hint. Score and personal best always visible. After finishing: **Play Again**, **Return to Venue**, and **See Records**.

### 12.4 Accessibility

Full keyboard support for non-precision interactions, remappable keys as a later milestone, adjustable SFX/music, reduced motion option, color-independent indicators, scalable text, pause-able mini-games, high contrast, tooltips that explain abilities in plain English, and no essential clue conveyed only by sound or color. Avoid flashing effects that are unsafe or overly intense.

### 12.5 Design lesson from earlier prototypes

Do not hide a character upgrade underneath an already long page; do not require the player to infer scoring formulas; do not cover important combat with large pop-ups. A player should always be able to answer **Where am I? What can I do? Why did that happen? What did I earn?**

---

## 13. Art direction and asset-light production

### 13.1 Visual identity

**Modern suburban mystery, warm everyday life versus cold impossible light.** By day: slightly muted asphalt, brick, school blue-gray, soft gold afternoon light. During Nightwood events: deep violet, cyan/teal highlights, strong dark silhouettes, glitch-like refraction. The contrast creates atmosphere without photorealistic asset demands.

**Recommended:** Stylized 2D top-down art with compact reusable tiles and simple directional sprites. Do not use isometric art unless the entire rendering system is explicitly designed for it. Avoid mixing incompatible asset pack camera angles.

### 13.2 MVP asset budget target

| Asset class | Initial scope | Production method |
|---|---|---|
| Player | 1 four-direction character, idle/walk/attack/dodge | Reusable small sprite sheet or code-assisted sprite animation |
| NPCs | 4–6 base silhouettes with palette/hair variants | Recolor shared parts; dialogue portraits optional |
| Monsters | 3 base silhouettes + 1 boss silhouette | Sprite transforms and particles, no advanced rigs |
| Tiles | School, asphalt, grass, interior floor, walls, water/creek | Modular tile set, roughly 40–70 reusable tiles |
| Props | Lockers, doors, desks, benches, trees, signs, cabinet, library table | Roughly 25–35 reusable objects |
| Sword/effects | Night Splitter, arc slash, pulse, ward, breach | SVG/shader/particle effects with code-generated motion |
| UI | Icons, bars, phone tabs, cards, cabinet runner | Vector/CSS/canvas components |
| Sound | Short original/correctly licensed loops and impacts | Small cue library, layered reuse |

These are **budgets**, not a demand to source every asset before coding. Graybox movement, collision, and combat before buying or choosing a final art pack. Verify licenses and keep a provenance manifest for third-party assets.

### 13.3 Art quality target

A coherent low-detail style is better than a beautiful lone player sprite on a blank map. Camera angle, proportions, collision footprints, animation speed, palettes, and lighting must be consistent. The first screenshot should unmistakably look like **a town/school adventure game** — not squares drifting across an empty grid.

---

## 14. Audio and atmosphere

Sound distinguishes normal and supernatural layers:
- Ordinary school ambience: footsteps, lockers, HVAC hum, distant gym sounds, murmuring.
- Nightwood intrusion: muted surrounding audio, pitched fluorescent buzz, unnatural second bell, layered reverse breath/noise.
- Night Splitter: clean ring/metallic resonance on summon and decisive sword hit.
- Arcade: crisp original short chiptune; library card game: subtle table/card sounds with music optional.
- Music: short looping ambient cues rather than a massive soundtrack at MVP.

Every important sound cue should have a visual equivalent. All audio must be original, public domain, or properly licensed; no copied commercial game music.

---

## 15. Difficulty and pacing

- Combat has **Story / Standard** options at launch if inexpensive to implement; default Standard. Both yield equal progression rewards.
- First enemy teaches movement and strikes, first Shadewalker teaches avoiding telegraphed attacks, first Crawler teaches patience and dodge.
- No instant character death due to hidden hitboxes.
- Mini-games have a clear baseline mode; harder variants are opt-in and score-driven.
- Clue and skill puzzles offer optional hints after repeated failures and never permanently lock the main plot.
- Early unlock pacing: first mini-game **within 5 minutes**, sword **within approximately 15–25 minutes** at a normal pace, first skill milestone **in the first gameplay hour**.
- No long mandatory exposition before player control.

All times are validation targets to test with real players.

---

## 16. Online features and social ambition

**MVP:** Single-player browser game, persistent local save, manual export/import backup, personal bests, no public multiplayer dependency. First deploy should be usable without creating an account.

**Phase after MVP:** Optional account/cloud sync, backed-up saves across devices, opt-in leaderboards by arcade score/skill level, shared challenge seeds, limited friend comparisons. Server must validate submitted scores before public ranking; do not trust unverified client-side high scores.

**Longer term:** Asynchronous ghost challenges and player-created cosmetic profile displays. Direct multiplayer, live chat, trading, shared economy, and guilds are **out of scope until the core game has a sustained audience and anti-cheat plan**.

Given the school-age protagonist, do not launch open chat or public user-submitted content without deliberate moderation and privacy requirements. No personal school names or locations are needed.

---

## 17. Business model and release approach

The initial product should be **free to play and playable in a browser**. No monetization is required to prove the concept. If a later commercial model is necessary, prefer one-time optional cosmetic packs, an expansion, or a nonpaying-supporter edition; **never charge for basic school life, mini-games, required story chapters, or power progression during testing**.

No energy bars, paid random loot, gacha draws, real-money gambling, or pay-to-win boosters.

The city, characters, and school are wholly fictional and should not borrow trademarks, school branding, or identifiable student information from a real institution.

---

## 18. MVP definition, exclusions, and success measures

### 18.1 First playable vertical slice (must ship before expanding)

**One cohesive 20–40 minute experience, with quick-repeat side activities:**
- Responsive top-down player movement and collision in school/outdoor zones.
- Night Splitter equipped/summoned with satisfying sword swings.
- Stray swarms, one Crawler ambush and Shadewalker shadow-projection clue; Mistress Shade teaser before the full boss fight in later chapter.
- Basic health, Focus, dodge, damage, and defeat/retry.
- At least **five visibly functional modern skills** from the MVP list; architecture supports the remainder.
- A character sheet, inventory, **three meaningful item upgrades**, and saved XP.
- **Ghost Circuit arcade** and **Stacks 21 library** playable from real world locations.
- School Standing or Exposure choice affecting one later dialogue/reaction.
- A short narrative arc: player-selected name and boy/girl identity → ordinary Homewood school life → discover the Night Splitter → cross into Nightwood → combat → first clue and school-life consequence.
- Save/resume, keyboard/mouse controls, touch-friendly mini-game access, one-click Quick Play after discovery.
- Basic audio, clear interaction prompts, a usable Phone menu.
- Browser deploy with no backend requirement for first test.

### 18.2 Full first release (after vertical slice proves fun)

Expand to 8–10 core skills, chapter 1–2 story content, 6–8 explorable scenes, more gear/sigils, a repeatable monster zone, more secondary NPC tasks, improved visual polish, score challenges, robust save migration, and mobile combat optimization.

### 18.3 Explicitly excluded from MVP

Live MMO, online trading, user chat, procedural city generation, dozens of professions, full town simulation, multiplayer combat, massive story branching, voiced dialogue, animated cutscenes, large wardrobes with unique sprite art, hundreds of enemies, paid accounts, and elaborate 3D/isometric worlds.

### 18.4 Acceptance criteria — gameplay

A new player, with no external explanation, can:
0. Create a boy or girl character with a chosen name that appears in dialogue; never see an imposed protagonist name.
1. Move the player around a recognizable school space using keyboard or touch.
2. Identify a person/object to interact with and complete it.
3. Discover the arcade and finish a timed run with a comprehensible score.
4. Discover the library and complete an intelligible card game.
5. Find Night Splitter during an authored story scene and defeat a telegraphed enemy.
6. Open Skills and see XP gained from at least two distinct activities.
7. Equip or upgrade something and see the effect immediately.
8. Make one school-life decision and later observe the consequence.
9. Exit and reopen the browser without losing quest, skill, score, or location progress.
10. Enter an unlocked Quick Play mini-game and finish it in a short session without first traversing a large map.

### 18.5 Success measures from actual tests

- First successful movement/interact within **60 seconds** of loading.
- A new player understands what to do next without developer intervention.
- At least **70% of test players** finish the first combat tutorial without explanation (initial hypothesis, tune after testing).
- At least **70%** can correctly explain where to find and replay both mini-games after trying them.
- Typical fresh-user time to first mini-game **under five minutes**.
- Game state saves consistently after quests, fights, and mini-games.
- No consistent control dead zones, screen-obscuring modals, or broken collision during the first session.
- Playtesters voluntarily replay at least one mini-game for fun; if not, improve or replace the mini-game before adding new systems.

**A smaller polished slice wins over a sprawling unfinished tech demo.**

---

## 19. Open design questions (intentionally deferred)

These should be playtested rather than guessed at up front:
- Exact art palette and whether characters use 4-direction or 8-direction animation.
- Whether desktop basic sword attacks prioritize cursor targeting or facing direction.
- Final initial skill roster and ideal XP curve.
- Long-term secondary card game rules and arcade high-score challenges.
- Default name customization and optional voice/text presentation.
- Final school-calendar pacing and branching relationship scope.
- Cloud save provider, account strategy, and score-validation architecture.

**Do not treat undecided details as blockers for a prototype.** Choose the lowest-cost reversible option, ship it, and test it.

---

## 20. Definition of done and handoff directions

The next implementer should begin by reading this document, then **Story & World Bible**, then **Development & Technical Handoff**. Create tasks from the vertical-slice requirements in Section 18. Implement one scene end-to-end before broadening the city.

If the initial build cannot make movement + Night Splitter combat + one arcade run + one school choice fun, **do not add systems to hide the issue**. Fix that experience first.

**Document intent:** This document defines the concept for handoff and production planning. It does not claim a playable game or that production assets, servers, or a finished codebase already exist.

## 21. Updated naming and implementation invariants

- **Homewood** is the cozy city; **Nightwood** is its dark parallel realm (and the game title). Do not treat Nightwood as the city or refer to the realm as an obsolete barrier name.
- **The Night Splitter** is the only story-canon sword. The protagonist has no fixed name or gender. Allow boy/girl and name at first play.
- **Modern RuneScape-style progression** and genuinely replayable mini-games remain as important as the sword-and-magic action RPG.
- Monster behavior and boss list follow Section 2 and the Story & World Bible v2; retired generic enemy archetypes are not canon.
- School-age romance is optional, age-appropriate, nonsexual and inclusive across the two gender choices; none of it gates the main story.
- The setting fictionalizes Homewood and its students/campus; do not portray real students, real administrators, or real incidents.
