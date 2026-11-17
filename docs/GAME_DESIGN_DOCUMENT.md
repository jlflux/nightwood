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

**Elevator pitch:** Nightwood follows Eli Ward, a 17-year-old student at Nightwood High in a fictional present-day American city. When a student vanishes during a strange school blackout, Eli discovers Bellwether, an ancient sword disguised among forgotten theater props. It lets him see and fight monsters slipping through a hidden layer of reality called the Veil. Eli must protect his friends and uncover why his school is the epicenter of a growing breach while still attending class, maintaining relationships, working, playing games around town, and trying to have a normal teenage life.

**Player fantasy:** You are not a knight in a medieval kingdom. You are a high school student who carries an impossible sword while worrying about a group project, a best friend's unanswered message, a part-time job, and whether anyone noticed the claw marks outside the gym.

**Structural reference:** The progression freedom of an MMO, the direct movement and readable fights of a light action RPG, the social rhythms of a school-life adventure, and the instant fun of an arcade collection. **Nightwood is not planned as a massively multiplayer online game for the first release.**

**The most important differentiator:** The city isn't a loading screen between battles. A player may be a champion of the arcade, a skilled electronics fixer, an obsessive investigator, or a strong swordfighter, all within one persistent character. Mini-games are genuine games inside the town, not decorative XP buttons.

### 1.1 Non-negotiable design pillars

1. **Two lives, one character.** Mundane school commitments and secret supernatural danger meaningfully affect quests, dialogue, access, and relationships, without turning the game into a homework simulator.
2. **Player-directed time.** A 30-second play session is complete and satisfying. A 30-minute session supports meaningful exploration, combat, and story progress.
3. **Hands-on gameplay.** The hero moves in a navigable overhead world and fights with a sword; the game must not devolve into a static menu-driven idle RPG.
4. **Modern skill mastery.** Independent skills reflect recognizable present-day activities: research, electronics, fitness, gaming, cards, media, first aid, and so on.
5. **The sword is the identity.** Bellwether stays with Eli. It grows in techniques, appearance, and story significance instead of being replaced every few levels by disposable loot.
6. **Small but convincing world.** Concentrated locations, clever reuse, distinctive lighting, memorable NPCs, and visual feedback beat enormous maps filled with assets we can't afford.
7. **A reason to return, not an obligation.** Progress saves constantly. There are no login streak penalties, real-time energy gates, forced daily activities, or expiring rewards required to advance.
8. **Clarity before complexity.** The main goals, available actions, rewards, and risks must be understandable within seconds. Hidden mechanics must not decide basic outcomes.

### 1.2 Desired emotional experience

A familiar school corridor feels different after the player discovers a monster standing at its far end. At the library, the same table can hold an ordinary card game in the afternoon and a research clue at night. A friend may be furious about being stood up for a school event because Eli was saving a stranger. Progression should make the player feel **more capable**, while story choices make the world feel **more personal**.

### 1.3 What this is not

Not an MMO launch, not an endless survival crafting game, not a deck battler, not an idle clicker, not a hard daily-schedule simulator, not a roguelike that wipes the character each run, and not a giant photorealistic open world. It should have depth without requiring enormous art or server infrastructure.

---

## 2. Setting and fiction

### 2.1 Place and time

**Nightwood** is a fictional, present-day mid-sized American city with suburban neighborhoods, an aging downtown, a public high school, community businesses, creek trails, and utility tunnels. Phones, social apps, school sports, traffic lights, public libraries, convenience stores, and old arcade cabinets are all normal parts of the world.

**Nightwood High** is the narrative center. It has a front courtyard, academic wing, cafeteria, library/media center, gym, auditorium, athletics complex, maintenance corridor, and tunnels that should not appear on any student map.

The secret supernatural layer is called **the Veil**. Most people unconsciously rationalize its disturbances — a shadow becomes a faulty light, a scream becomes a bad speaker, a lost hour becomes an ordinary distraction. People who are sensitive to the Veil can see what's really happening. Occasionally a **breach** opens, allowing monsters called **Strays** into the ordinary world.

The Veil is not exclusively nocturnal. Night is more dangerous, but events can erupt at lunch, after practice, during a pep rally, or at the arcade.

### 2.2 Protagonist

**Eli Ward** is the default/canonical narrative name, 17, a junior at Nightwood High. He is ordinary enough to be believable: capable but not exceptional, worried about friendships and his future, with a parent who works long emergency-care shifts and a younger sibling he sometimes looks after. He isn't prophesied to be a hero. He reaches for the sword because someone needs help.

**Customization policy:** The player may change Eli's display name, hairstyle, skin tone, shirt/jacket color, and casual outfit. Narrative dialogue uses player-name variables. Core backstory, age band, school enrollment, family stakes, and his male protagonist identity remain fixed for authored scenes. His attitude is shaped by dialogue choices rather than a heavy morality meter.

### 2.3 Bellwether — the magical sword

Bellwether is a long, visually distinct blade with a narrow metallic edge, a guard shaped like a tuning fork, and a luminous seam running its length. It was hidden behind a false panel beneath the high school auditorium stage, mislabeled as a theater prop.

- **Disguise:** In ordinary public spaces, it can collapse into an old brass key on Eli's school lanyard. This avoids implausibly carrying an exposed sword to class.
- **Awakening:** When a breach opens or Eli deliberately calls it, the key unfolds into the full blade; the animation is short and readable.
- **Purpose:** Bellwether cuts the anchors holding Strays to reality and can seal smaller breaches. It is not a weapon designed to attack human NPCs.
- **Growth:** The blade unlocks stances, sigils, defensive counters, and visible markings through story progress and sword mastery. It is always recognizable as *your* sword.
- **Narrative tension:** The blade seems to remember fragments of previous wielders. Whether those memories are trustworthy is part of the mystery.
- **Gameplay distinction:** Most ordinary equipment is supporting gear — jackets, shoes, wristbands, phone accessories, talismans, and crafted modifications. Players do not swap out Bellwether for a random better sword.

### 2.4 Major characters and factions

| Character / group | Place in story | Gameplay function |
|---|---|---|
| **Eli Ward** | Student protagonist | Customizable main character and player viewpoint |
| **Mara Ortiz** | School newspaper editor, skeptical and sharp | Research, media, investigations, trust decisions |
| **Theo Brooks** | Eli's closest friend and arcade regular | Mini-games, humor, social stakes, tech help |
| **Ms. Lena Park** | Nightwood Public Library archivist | Lore mentor, card-table host, archive unlocks |
| **Nina Ward** | Eli's mother, works long emergency-care shifts | Home life, responsibility, grounded emotional stakes |
| **Dr. Cora Hayes** | Nightwood High principal | School obligations, institutional suspicion |
| **Calder Reese** | Contractor leading a city infrastructure modernization program | Ambiguous antagonist and key to the breaches |
| **The Custodians** | Local informal network that quietly maintains weak spots in the Veil | Hidden quests, upgrades, moral disagreements |
| **The Chorus** | Human group that wants to permanently open the Veil | Primary antagonistic faction |
| **Strays** | Creatures passing through breaches | Combat enemies with varied behaviors |

Narrative specifics, secrets, and plot turns live in the companion **Story & World Bible**.

---

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

Initially, the player physically discovers the arcade or library by walking there. Once visited, the location becomes accessible from the in-game **Phone → Places → Quick Visit** menu when the player is not in combat or mid-quest. A short transit fade places Eli just inside the venue. This is a convenience shortcut, not literal teleportation in the fiction. It preserves the navigable world without spending most of a 30-second session walking.

Players can resume at the last safe position or open **Quick Play** on the title screen to enter a previously discovered activity. The mini-game returns them to its venue and then their last safe place if they choose.

### 3.4 Player motivation at three horizons

- **This session:** Beat a score, find one clue, upgrade a technique, help an NPC, beat one monster.
- **This week:** Unlock a new district, raise a skill to a milestone, complete a school storyline, advance the Bellwether tree.
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

Eli fights Strays with Bellwether and a handful of magic techniques. Combat is direct and readable, not a spreadsheet or full Diablo clone. A normal overworld fight should last approximately **10–35 seconds** at equal gear; a meaningful boss may take **2–4 minutes** once the player understands patterns.

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
- Defeat returns Eli to a safe place, retains character XP and permanent items, and costs only minor consumables or a small temporary injury. No full inventory drop or permadeath.
- Human NPCs cannot be attacked. Fantasy violence is stylized, with no gore.

### 5.5 Enemy roster and roles

| Enemy | Combat behavior | Production-friendly visuals |
|---|---|---|
| **Strayling** | Fragile skittering melee enemy; teaches attack timing | Dark small silhouette with two glowing eyes |
| **Watcher** | Hovering scout that fires a slow projectile | Single-eye geometric sprite with particles |
| **Hollow** | Slow heavy enemy, clearly telegraphed slam | Oversized angular shadow body |
| **Flicker** | Briefly disappears and reappears near player | Shared base sprite with distortion effect |
| **Latch** | Clings to fixtures and creates small hazards | Wall-mounted dark node with tendrils |
| **The Bellless** | First named miniboss, tied to school auditorium | Unique silhouette assembled from reused materials |

Three enemy types are enough for MVP: Strayling, Watcher, Hollow. More types only after combat is fun.

### 5.6 Sword progression

The player doesn't farm hundreds of nearly identical blades. Bellwether has:
- **Technique slots** for the active moveset (initially two techniques; expand later).
- **Sigil slots** for crafted combat modifiers.
- **Visual stages** for story milestones (new glowing line/guard detailing).
- **Mastery branches:** **Edge** (melee precision), **Guard** (defense/counters), **Resonance** (magic/special effects).

Players may respec these branches at a safe location for a modest in-game cost, freely in early prototype tests. No permanent build trap.

### 5.7 Gear and loot

Equip two everyday clothing pieces, one accessory, one tool, and one Bellwether sigil in the MVP; expansion may add more. Item examples: running shoes (dodge recovery), insulated jacket (resistance), repaired fitness tracker (mobility), notebook charm (research), compact first-aid pouch (healing), grounded-wire sigil (Pulse modifier).

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

1. **School Hours:** Classes, hallway dialogue, lunch, gym, media center, rumors, short tasks, and occasional daytime Veil incidents.
2. **After School:** Arcade, library, club activities, part-time jobs, neighborhood exploration, preparation.
3. **Night / Dangerous Window:** Breaches are more active, tougher zones become available, major story scenes happen.

The player advances major time states intentionally through quests, resting, or a clearly labeled decision; a timer never ticks forward while the user is offline. Free-play mini-games do not automatically cause the player to miss a class.

### 7.2 The normalcy dilemma

Nightwood should create pressure through **decisions and consequences**, not tedious chores.

- **Trust (per relationship):** Friends respond to help, honesty, keeping promises, and how frequently Eli disappears without explaining himself.
- **Exposure (0–100):** How suspicious the school/community is of weird occurrences involving Eli. High Exposure adds rumors, extra surveillance, or alternative routes but does not permanently fail the game.
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

**Fantasy:** Eli walks into a small retro-futurist arcade where his friend Theo hangs out. He steps up to the Ghost Circuit cabinet.

**Type:** Short three-lane reflex runner; one button/gesture for left and right, usable with mouse, keyboard, or touch.

**Round length:** **35–55 seconds** including a short countdown and score display. There is no required long level select.

**Rules:**
- Your runner advances automatically through glowing gates.
- Move between three lanes to avoid blocks and collect safe signal nodes.
- A near miss grants a small style bonus; collisions remove a life or combo.
- A run ends at the timer or after three hits.
- Score = nodes collected + clean gate bonus + combo, with legible breakdown.

**Replay hooks:** Personal best, weekly optional score challenges (only when online service exists), cosmetic cabinet themes, harder speed variants. Rewards: Gaming XP, minor cash or prize tickets, occasional cosmetic stickers. Failure also grants modest XP. **No real-world money or loot-box prizes.**

**Asset cost:** Three lanes, abstract obstacles, runner icon, particles, text — almost entirely code-rendered.

### 8.2 Nightwood Public Library — Stacks 21 (MVP)

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

## 9. World layout and locations

### 9.1 World principles

Nightwood is a compact navigable city, presented as connected scenes and districts rather than a gigantic seamless open world. Every important location should serve **at least two purposes**: story plus gameplay, or socializing plus mini-games, or traversal plus resources.

### 9.2 Proposed map

```text
             [CREEK TRAIL / OLD PUMP HOUSE]
                         |
 [RESIDENTIAL BLOCK] -- [NIGHTWOOD HIGH] -- [ATHLETICS COMPLEX]
         |                |         |
         |           [AUDITORIUM]  [GYM]
         |                |
 [QUARTERLIGHT ARCADE] -- [DOWNTOWN / BUS STOP] -- [PUBLIC LIBRARY]
                             |
                        [SERVICE TUNNELS]
```

This is a connectivity concept; a production map should show gates, camera constraints, and interaction points.

### 9.3 Locations and functions

| Place | Mundane identity | Gameplay / Veil identity |
|---|---|---|
| Nightwood High courtyard | Friends, student errands, conversations | Tutorial hub and early rumors |
| School academic wing | Classes and school duties | First clues, locked storage, daytime events |
| Auditorium / basement | Theater props, after-school cleanup | Bellwether discovery, first boss, breach doorway |
| Athletics complex | Field, bleachers, gym, student sport | Fitness games, outdoor encounters, service access |
| Quarterlight Arcade | Cabinets, leaderboard, Theo's hangout | Ghost Circuit and eventual secrets in cabinet circuitry |
| Nightwood Public Library | Archive, study tables, librarian | Stacks 21, Research, old city records |
| Residential block | Home, neighbors, small errands | Emotional grounding and evening threats |
| Downtown strip | Shops, bus stop, part-time work | Fast travel hub, gear, electronics tasks |
| Creek trail | Walking path, woods, old pump building | Scavenging, early field enemies, nature route |
| Service tunnels | Old city infrastructure | Dungeons, mystery, plot escalations |

### 9.4 First playable map scope

**Vertical slice requires only:** one compact Nightwood High campus zone (with a hallway and sealed auditorium transition), one outdoor combat segment, Quarterlight Arcade interior, and library interior. The other districts can be displayed on the map as locked/future locations without misleading “click to enter” promises.

### 9.5 Exploration incentives

A player should regularly find something through movement: a note, a rumor, a hidden route, an upgrade part, a phone recording, a new NPC, a small lore item. Exploration should not consist of long walks through empty streets. New traversal routes unlock through story and occasionally modern skills.

---

## 10. Missions, narrative pacing, and choices

### 10.1 Quest types

- **Main story:** Fully authored chapters surrounding the sword, school, the Veil, and missing people. Crucial scenes have bespoke dialogue.
- **Student life:** Friendships, clubs, school-paper stories, family, small commitments.
- **Town jobs:** Repair devices, deliver something, research information, help a shop or community member.
- **Investigations:** Gather clues, compare evidence, choose search route.
- **Breaches:** Fight small enemy groups and seal a localized supernatural incursion.
- **Activity challenges:** Beat a score, finish a library match, complete a gym trial.

### 10.2 The first hour

1. **Ordinary morning:** Player creates Eli, enters Nightwood High, gets to know Mara and Theo, moves and interacts.
2. **Small choice:** Help a teacher with an electronics problem or follow a rumor; both train real skills.
3. **After-school freedom:** Introduce arcade and library as two immediate playable options, no long tutorial walls.
4. **The disruption:** Power outage; a student disappears near the auditorium; an impossible second school bell rings.
5. **Bellwether:** Eli finds the concealed sword while trying to help; an enemy enters and the first combat tutorial begins.
6. **The secret:** A trusted adult appears to know more than they admit; one friend notices Eli's disappearance.
7. **Choice and save:** Player may return to school/town activities or follow the first breach investigation. Show saved progression and a clear next objective.

The game should not demand that the first hour be linear. It guides the plot while allowing side activities early.

### 10.3 First chapter objective

**Chapter 1: After the Second Bell** — Find out why a second bell sounds at night and who disappeared. This chapter introduces the town, Bellwether, basic combat, two friends, Research, and at least one optional student activity. Concludes with a small confrontation near the school service corridor and a decision about what to tell Mara.

### 10.4 Choices without exploding narrative budget

Choices adjust Trust, Exposure, small dialogue branches, and optional clue routes. Most branches converge at major set pieces while preserving acknowledgments of what the player did. No binary “good/evil” gauge, no invisible permanent ending penalty for spending time at the arcade.

### 10.5 Main-story arc

- **Act I — After the Second Bell:** Discovery, first monster, sword, disappearance.
- **Act II — The Town That Doesn't Notice:** City disturbances spread; ordinary venues hide connections.
- **Act III — The Price of Normal:** Trust is strained; exposure and secrecy collide; discover who benefits from the breaches.
- **Act IV — The Last Period:** A major school event becomes the backdrop for a city-level incursion; protect classmates, confront the human catalyst, and decide how much truth Nightwood can bear.

Detailed twist and ending outline: companion Story & World Bible.

---

## 11. Progression, inventory, economy, and collection

### 11.1 Persistent account

The player's primary persistent identity consists of:
- Character profile and appearance.
- Character level and XP.
- All skill levels, XP, milestones, and unlocked activities.
- Bellwether techniques, sigils, mastery choices, and appearance stage.
- Equipment, inventory, crafting materials, currency, and collectibles.
- Completed and active quests, meaningful choices, unlocked locations.
- Relationships and school standing/exposure.
- Arcade/card personal bests, achievements, and scores.
- Accessible map discoveries and safe respawn position.

### 11.2 Growth should be visible

Level-ups give feedback beyond “+1”: an animation or sound, one clear improvement, newly available interactions, and a character-sheet entry. Bellwether appearance changes at story milestones. Modern clothes and accessories visibly alter the simple character sprite where feasible, with palette variants before expensive per-item art.

### 11.3 Resources

- **Cash:** Fictional ordinary town money used for snacks, basic gear, small transport services, and clothing. Earned through quests, jobs, some activities.
- **Parts:** Electronics/Scavenging components for devices and support tools.
- **Veil Shards:** Supernatural crafting material from Strays and breaches; used for sigils and high-tier sword upgrades.
- **Arcade Tickets:** Earned from arcade skill performances; used for cosmetic cabinets/themes, posters, and optional avatar accessories. No paid conversion.

Avoid many overlapping currencies. There is **no real-money wagering or cash-out system**.

### 11.4 Loot and crafting

Enemies occasionally drop Veil Shards and unusual accessories, while everyday exploration yields Parts and consumables. Research can reveal recipes; Electronics can make detectors and upgraded equipment; First Aid prepares recovery kits. MVP crafting should contain **5–8 meaningful recipes**, not hundreds.

### 11.5 Money and power balance

Story combat upgrades should not be purchasable instantly from spamming one mini-game. Arcade rewards are primarily skill XP, scores, collectibles, and small spending money. The strongest Bellwether upgrades require a story discovery or boss ingredient; secondary build choices can be earned through other activities.

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

**Modern suburban mystery, warm everyday life versus cold impossible light.** By day: slightly muted asphalt, brick, school blue-gray, soft gold afternoon light. During Veil events: deep violet, cyan/teal highlights, strong dark silhouettes, glitch-like refraction. The contrast creates atmosphere without photorealistic asset demands.

**Recommended:** Stylized 2D top-down art with compact reusable tiles and simple directional sprites. Do not use isometric art unless the entire rendering system is explicitly designed for it. Avoid mixing incompatible asset pack camera angles.

### 13.2 MVP asset budget target

| Asset class | Initial scope | Production method |
|---|---|---|
| Player | 1 four-direction character, idle/walk/attack/dodge | Reusable small sprite sheet or code-assisted sprite animation |
| NPCs | 4–6 base silhouettes with palette/hair variants | Recolor shared parts; dialogue portraits optional |
| Monsters | 3 base silhouettes + 1 boss silhouette | Sprite transforms and particles, no advanced rigs |
| Tiles | School, asphalt, grass, interior floor, walls, water/creek | Modular tile set, roughly 40–70 reusable tiles |
| Props | Lockers, doors, desks, benches, trees, signs, cabinet, library table | Roughly 25–35 reusable objects |
| Sword/effects | Bellwether, arc slash, pulse, ward, breach | SVG/shader/particle effects with code-generated motion |
| UI | Icons, bars, phone tabs, cards, cabinet runner | Vector/CSS/canvas components |
| Sound | Short original/correctly licensed loops and impacts | Small cue library, layered reuse |

These are **budgets**, not a demand to source every asset before coding. Graybox movement, collision, and combat before buying or choosing a final art pack. Verify licenses and keep a provenance manifest for third-party assets.

### 13.3 Art quality target

A coherent low-detail style is better than a beautiful lone player sprite on a blank map. Camera angle, proportions, collision footprints, animation speed, palettes, and lighting must be consistent. The first screenshot should unmistakably look like **a town/school adventure game** — not squares drifting across an empty grid.

---

## 14. Audio and atmosphere

Sound distinguishes normal and supernatural layers:
- Ordinary school ambience: footsteps, lockers, HVAC hum, distant gym sounds, murmuring.
- Veil intrusion: muted surrounding audio, pitched fluorescent buzz, unnatural second bell, layered reverse breath/noise.
- Bellwether: clean ring/metallic resonance on summon and decisive sword hit.
- Arcade: crisp original short chiptune; library card game: subtle table/card sounds with music optional.
- Music: short looping ambient cues rather than a massive soundtrack at MVP.

Every important sound cue should have a visual equivalent. All audio must be original, public domain, or properly licensed; no copied commercial game music.

---

## 15. Difficulty and pacing

- Combat has **Story / Standard** options at launch if inexpensive to implement; default Standard. Both yield equal progression rewards.
- First enemy teaches movement and strikes, first Watcher teaches avoiding telegraphed attacks, first Hollow teaches patience and dodge.
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
- Bellwether equipped/summoned with satisfying sword swings.
- Three enemy behaviors, one short breach encounter, one miniboss if feasible after core feel passes.
- Basic health, Focus, dodge, damage, and defeat/retry.
- At least **five visibly functional modern skills** from the MVP list; architecture supports the remainder.
- A character sheet, inventory, **three meaningful item upgrades**, and saved XP.
- **Ghost Circuit arcade** and **Stacks 21 library** playable from real world locations.
- School Standing or Exposure choice affecting one later dialogue/reaction.
- A short coherent narrative arc: daily school life → anomaly → Bellwether → combat → first clue.
- Save/resume, keyboard/mouse controls, touch-friendly mini-game access, one-click Quick Play after discovery.
- Basic audio, clear interaction prompts, a usable Phone menu.
- Browser deploy with no backend requirement for first test.

### 18.2 Full first release (after vertical slice proves fun)

Expand to 8–10 core skills, chapter 1–2 story content, 6–8 explorable scenes, more gear/sigils, a repeatable monster zone, more secondary NPC tasks, improved visual polish, score challenges, robust save migration, and mobile combat optimization.

### 18.3 Explicitly excluded from MVP

Live MMO, online trading, user chat, procedural city generation, dozens of professions, full town simulation, multiplayer combat, massive story branching, voiced dialogue, animated cutscenes, large wardrobes with unique sprite art, hundreds of enemies, paid accounts, and elaborate 3D/isometric worlds.

### 18.4 Acceptance criteria — gameplay

A new player, with no external explanation, can:
1. Move Eli around a recognizable school space using keyboard or touch.
2. Identify a person/object to interact with and complete it.
3. Discover the arcade and finish a timed run with a comprehensible score.
4. Discover the library and complete an intelligible card game.
5. Find Bellwether during an authored story scene and defeat a telegraphed enemy.
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

If the initial build cannot make movement + Bellwether combat + one arcade run + one school choice fun, **do not add systems to hide the issue**. Fix that experience first.

**Document intent:** This document defines the concept for handoff and production planning. It does not claim a playable game or that production assets, servers, or a finished codebase already exist.
