# NIGHTWOOD — Development & Technical Handoff

**Version:** 1.0 (planning)  
**Status:** Architecture proposal and implementation checklist. The repository currently contains design documents, not a playable build.  
**Primary authority:** [Full Game Design Document](GAME_DESIGN_DOCUMENT.md)  
**Narrative authority:** [Story & World Bible](STORY_AND_WORLD_BIBLE.md)

This file is meant for a developer or AI coding agent taking over the project. Its job is to turn the GDD into actionable work **without** turning a small browser RPG into a needlessly complex MMO.

---

## 1. Primary objective

Build a **polished, playable vertical slice** before adding the rest of the world. The player must be able to walk through a recognizable modern school, find Bellwether, fight Strays, visit an arcade, play a real card mini-game at the library, gain skills, see a normal-school consequence, and come back later with all progress intact.

**Never fake interactive systems with button-only XP rewards.** If the player chooses Ghost Circuit, they should actually dodge obstacles and score points. If the player chooses Stacks 21, they should actually choose where to place cards and win or lose according to clear rules.

**Scope rule:** No multiplayer accounts, chat, trading, large server infrastructure, procedural city generator, or giant asset sourcing task in the first vertical slice.

---

## 2. Proposed technology stack

| Layer | Recommended implementation | Why |
|---|---|---|
| Build / language | TypeScript + Vite | Fast iteration, type safety, static deploy |
| Game world | Phaser (current stable compatible major version when implementation starts) | 2D camera, input, sprites, overlap/collision, scenes |
| Overlay UI | Lightweight React or DOM components | Phone panels, quests, inventory, mini-game menus |
| State model | Framework-independent game state, typed reducer/services | Keeps rules testable independently of rendering |
| Mini-games | Dedicated Phaser scenes or focused Canvas/DOM modules | Avoids shipping separate apps for every venue |
| Content | JSON or typed data: dialogue, quests, items, NPCs, skills | Writer-editable and deterministic |
| Local save | IndexedDB with a localStorage fallback | Persistent saves without needing server accounts |
| Tests | Vitest (rules/state) + Playwright (browser journeys) | Verifiable action loops and save reliability |
| Deployment | Static site on Vercel or equivalent | Browser access on PC and mobile |

**Important:** This is a recommended starting stack, not a requirement to install five frameworks before testing movement. Use the minimum UI technology that stays maintainable. Avoid a backend until the vertical slice actually needs one.

### 2.1 Architecture separation

Divide code into:
1. **Rules:** Pure functions for XP, levels, combat damage, items, quests, choice consequences, and mini-game scoring.
2. **State:** Saveable character/world/session data; clear action/event dispatch; migration handling.
3. **Scenes:** World movement, colliders, interactions, combat, arcade runner, library card table.
4. **Presentation:** HUD, Phone, inventory, skill progress, dialogue, results, settings.
5. **Content:** Authored maps, NPCs, dialogue, quests, enemy types, skill milestone definitions.

Do not bury XP logic or story flags in click handlers where the next developer can't audit them.

---

## 3. Suggested repository layout

```text
nightwood/
├── README.md
├── docs/
│   ├── GAME_DESIGN_DOCUMENT.md
│   ├── STORY_AND_WORLD_BIBLE.md
│   └── DEVELOPMENT_HANDOFF.md
├── public/
│   └── assets/
│       ├── audio/
│       ├── characters/
│       ├── enemies/
│       ├── tiles/
│       └── ui/
├── src/
│   ├── main.ts
│   ├── game/
│   │   ├── boot.ts
│   │   ├── scenes/
│   │   │   ├── SchoolScene.ts
│   │   │   ├── OutdoorScene.ts
│   │   │   ├── ArcadeScene.ts
│   │   │   ├── LibraryScene.ts
│   │   │   └── CombatScene.ts
│   │   ├── entities/
│   │   │   ├── Player.ts
│   │   │   ├── Enemy.ts
│   │   │   └── Interactable.ts
│   │   └── systems/
│   │       ├── MovementSystem.ts
│   │       ├── CombatSystem.ts
│   │       ├── InteractionSystem.ts
│   │       └── CameraSystem.ts
│   ├── minigames/
│   │   ├── ghostCircuit/
│   │   │   ├── rules.ts
│   │   │   └── scene.ts
│   │   └── stacks21/
│   │       ├── rules.ts
│   │       └── view.ts
│   ├── state/
│   │   ├── model.ts
│   │   ├── reducer.ts
│   │   ├── selectors.ts
│   │   └── save.ts
│   ├── content/
│   │   ├── quests/
│   │   ├── dialogue/
│   │   ├── items.json
│   │   ├── skills.json
│   │   └── areas.json
│   ├── ui/
│   │   ├── Hud.tsx
│   │   ├── Phone.tsx
│   │   ├── Dialogue.tsx
│   │   ├── Skills.tsx
│   │   ├── Inventory.tsx
│   │   └── ActivityResults.tsx
│   └── styles/
├── tests/
│   ├── rules/
│   └── e2e/
├── package.json
└── vite.config.ts
```

Paths are aspirational; simplify rather than over-engineer a tiny prototype.

---

## 4. Game state and event model

### 4.1 Suggested save envelope

The following is a **conceptual TypeScript data model**. Final field naming can differ if migration is documented, but all persistent categories must be represented.

```ts
type SkillId =
  | "athletics" | "research" | "electronics"
  | "firstAid" | "scavenging" | "gaming" | "cardSense"
  | "bladecraft" | "channeling";

type WorldPhase = "school" | "afterSchool" | "night";
type ActivityId = "ghostCircuit" | "stacks21";

interface LevelProgress {
  level: number;       // start at 1
  xp: number;          // lifetime or within-level; choose one and document
}

interface CharacterSave {
  displayName: string;
  appearance: { hair: string; skin: string; top: string; accessory?: string };
  characterLevel: LevelProgress;
  skills: Record<SkillId, LevelProgress>;
  health: number;
  focus: number;
  stamina: number;
  currency: { cash: number; arcadeTickets: number };
  inventory: { itemId: string; quantity: number }[];
  equipped: Record<string, string | null>;
  sword: {
    unlocked: boolean;
    stage: number;
    techniques: string[];
    activeTechniques: string[];
    sigils: string[];
  };
}

interface QuestSave {
  active: Record<string, { stage: string; flags: Record<string, boolean> }>;
  completedIds: string[];
  storyFlags: Record<string, boolean | number | string>;
}

interface RelationshipSave {
  trust: Record<string, number>;
  exposure: number;       // 0..100
  schoolStanding: number; // 0..100
}

interface ActivitySave {
  bestScores: Record<ActivityId, number>;
  gamesPlayed: Record<ActivityId, number>;
  achievements: string[];
  challengeHistory: Record<string, string>;
}

interface WorldSave {
  areaId: string;
  safePosition: { x: number; y: number };
  phase: WorldPhase;
  discoveredAreas: string[];
  interactableFlags: Record<string, boolean>;
}

interface NightwoodSave {
  schemaVersion: number;
  createdAt: string; // ISO 8601
  updatedAt: string;
  character: CharacterSave;
  quests: QuestSave;
  relationships: RelationshipSave;
  activities: ActivitySave;
  world: WorldSave;
  settings: {
    masterVolume: number;
    sfxVolume: number;
    reducedMotion: boolean;
    controlMode: "keyboardMouse" | "touch";
  };
}
```

**Note:** Skills beyond the first seven can be stored as dormant entries or added by save migration, but do not clutter first-run UI with unfinished skill tabs.

### 4.2 Action/event approach

Use typed events for major changes:
- PLAYER_MOVED_SAFE
- NPC_DIALOGUE_CHOSEN
- STORY_FLAG_SET
- QUEST_STAGE_COMPLETED
- MONSTER_DEFEATED
- BREACH_SEALED
- XP_AWARDED
- ITEM_ADDED / ITEM_EQUIPPED
- RELATIONSHIP_CHANGED
- ACTIVITY_STARTED
- ACTIVITY_COMPLETED
- NEW_PERSONAL_BEST
- AREA_DISCOVERED
- REST_OR_PHASE_ADVANCED

A **single completed action** should produce **one atomic state update** so refresh/reload cannot duplicate rewards. Store unique completion IDs for quests and milestone bonuses. Don't emit XP repeatedly from UI rerenders.

### 4.3 Save behavior and portability

- Auto-save after an interaction reward, completed combat, mini-game, equipment change, quest choice, area transition, and safe rest.
- In-world position can be throttled to avoid excessive storage writes; keep a nearby safe fallback.
- Load the newest valid save and validate it against a schema.
- Include version migrations; never silently wipe saves when fields change.
- Provide **Export Save** and **Import Save** as user-controlled JSON backup in MVP.
- Backup an old save before applying a migration.
- When storage is disabled, clearly tell the player progress may not persist.
- No private user data is required to play; cloud accounts are optional future work.

### 4.4 Save corruption and abuse resilience

Invalid inventory quantities, NaN scores, negative XP, unknown item IDs, and inconsistent quest stages must not crash the game. The client should recover to safe defaults or a prior backup. On a public leaderboard in a later phase, a client save is **not** trustworthy evidence of a legitimate score.

---

## 5. Content IDs and data contracts

### 5.1 Stable identifiers

Use snake-case or kebab-case stable IDs (pick one convention and use it consistently). Example canonical names:

| Category | Stable ID example |
|---|---|
| Area | nightwood_high_courtyard |
| Area | nightwood_high_auditorium |
| Area | quarterlight_arcade |
| Area | nightwood_public_library |
| Enemy | strayling |
| Enemy | watcher |
| Enemy | hollow |
| Quest | ch01_after_second_bell |
| Activity | ghostCircuit |
| Activity | stacks21 |
| Item | basic_first_aid_kit |
| Item | electronics_parts |
| Item | veil_shard |
| Sword technique | pulse |
| NPC | mara_ortiz |
| NPC | theo_brooks |
| NPC | lena_park |

Do not identify characters with visible display names in save data; names may change through localization or editing.

### 5.2 NPC / dialogue contract

Every dialogue node should have: stable ID, speaking character, localized text key or inline draft, optional response choices, visible conditions, side effects, and next node ID. **Conditions and consequences must be explicit in data** rather than hidden UI logic.

For example, when Eli tells Theo a partial truth, the next node increments his trust and sets a story flag. That side effect is recorded once.

### 5.3 Quest contract

Each quest specifies:
- ID, display name, description, quest category.
- Start condition and world phases allowed.
- Ordered stages with objectives and completion events.
- Optional alternate routes / skill checks.
- Dialogue and environment changes per stage.
- Rewards, failure/recovery branches, and save flags.
- A replay-safe completion key preventing double rewards.

A quest may direct players to a mini-game, but should listen to ACTIVITY_COMPLETED and not require an arbitrary high score unless explicitly stated.

---

## 6. Scene and location architecture

### 6.1 First area set

| Scene | Required interactables | NPC/content |
|---|---|---|
| School Courtyard + Hallway | Door, message board, locker, media terminal | Eli start, Mara, Theo, school task |
| Auditorium / Basement | Prop cabinet, key, breach, locked passage | Bellwether scene, first Strayling |
| School Exterior / Athletics Edge | Exit gate, training patch, clue, enemies | Combat loop, school event setup |
| Quarterlight Arcade | Ghost Circuit cabinet, owner stand, exit | Theo and first mini-game |
| Nightwood Public Library | Card table, archive shelf, terminal, exit | Ms. Park, Stacks 21, research |

Each scene should have clearly displayed boundaries, collision volumes, interaction ranges, spawn points, audio/lighting states, and hooks for quest flags. Start with static map instances; avoid procedural map generation in the first release.

### 6.2 Tile scale and layering

Starting target: **32x32 world units per tile**, scaled to show a readable overhead footprint. A character collision footprint should be smaller than the visible sprite. Draw order uses y-sorting for characters and nearby props. Walls, doors, furniture, and trees need deliberate collider shapes. Test entrances on both desktop and touch.

The player needs room to approach arcade cabinets, library tables, and NPCs without click targets fighting overlap geometry.

### 6.3 Fast access to mini-games

After discovering a venue, mark a persistent discoveredAreas flag. In safe locations, Phone → Places → Quick Visit lists unlocked venues; clicking one triggers a brief transition and loads the real venue scene. A Quick Play shortcut from the title screen opens the selected activity with the associated venue context.

**This shortcut is required**, not “maybe later.” It reconciles a traversable city with the user's 30-second play goal.

---

## 7. Player movement and combat implementation targets

### 7.1 Movement behavior

- WASD/arrow and click-to-move must not fight each other; most recent input style takes control.
- Character movement uses acceleration/friction or direct movement tuned for responsiveness, not floaty inertia.
- Diagonal motion normalized (avoid moving faster diagonally).
- Interactive objects expose a short readable prompt when in range; clicking a distant object may walk up and interact.
- Mobile touch support requires input regions big enough for thumbs, no browser scrolling triggered by gameplay swipes.

### 7.2 Combat state machine

Suggested states: IDLE, MOVE, ATTACK_1, ATTACK_2, ATTACK_3, DODGE, CAST, HIT_REACT, DEFEATED. Avoid dozens of bespoke animations. Combat logic should run independently of visual frame rates.

**Core events:** sword collision accepted, damage dealt, enemy telegraph, dodge i-frame, Focus spent, enemy defeated, reward committed, player defeat recovered.

**Critical feel test:** Player can execute sword attack, see an unmistakable hit, react to a visible enemy wind-up, and avoid damage with a deliberate dodge. If this isn't fun with three enemy silhouettes and a simple slash effect, do not commission more art to hide it.

### 7.3 Combat balance and safety

Store combat parameters in data tables. Establish unit tests for cooldowns, duplicate hit detection, i-frame windows, spell resource consumption, and defeat reward de-duplication. Human NPCs have no damageable combat component.

---

## 8. Mini-game implementation specifications

### 8.1 Shared game interface

Each mini-game should expose a consistent start/pause/finish/result lifecycle. Results flow to the same game-state award logic.

```ts
interface MiniGameResult {
  activityId: "ghostCircuit" | "stacks21";
  runId: string;                // unique per attempt
  durationMs: number;
  score: number;
  completed: boolean;
  rewardXp: number;
  skillId: "gaming" | "cardSense";
  metadata: Record<string, string | number | boolean>;
}
```

No “collect XP” pseudo-mini-game component. Results are computed from actual actions and persisted once by run ID.

### 8.2 Ghost Circuit — arcade runner

**State:** elapsed time, lane (0/1/2), lives (3), score, combo, spawn sequence, speed, input history, seed.

**Timer:** 35–55 seconds in normal mode. Timer pauses when browser tab is hidden or the player explicitly pauses; it does **not** continue and punish the player while backgrounded.

**Core logic:**
1. Begin after a short one-screen instruction: “Switch lanes to dodge blocks. Collect nodes. Survive the timer.”
2. Auto-scroll obstacles/nodes downward/upward toward the runner (implementation choice). Players choose lane.
3. Colliding with obstacle consumes a life and resets combo with a brief invulnerability flash.
4. Collecting node adds points and increments combo.
5. Show remaining time, lives, score, and best score without obscuring obstacles.
6. At zero time or zero lives, show transparent result breakdown and Play Again.

**Initial tuning example:** Node +10, clean gate +5, combo bonus +2 per successive clean section to a cap. Tune later after instrumented playtests. Performance matters more than grinding.

**Test requirements:** Deterministic seeded spawn, no impossible sequence forcing unavoidable hits, no score accumulation while paused, a round cannot reward twice, keyboard and touch achieve equivalent score potential.

### 8.3 Stacks 21 — library card table

**State:** deterministic shuffled 12-card numeric sequence, current index, three pile sums, three busted/locked flags, final score, count of exact-21 piles.

**Card values:** integers 1–10, drawn from a simple reproducible seeded sequence. This is a compact number-card game, not a full standard poker deck.

**Core algorithm:**
1. Reveal one current card (never hide its number).
2. Player chooses one of three nonlocked piles.
3. Add card value. If sum exceeds 21, mark pile busted, lock it, and make its final contribution zero.
4. If sum is exactly 21, count it as an exact pile; it may remain open or lock automatically — **choose one at implementation and ensure every UI instruction and test matches**. Recommended: automatically lock on 21 to avoid accidental busting a perfect pile.
5. Advance card. If all three piles are locked, end early.
6. At end of deck/early end, score = sum of nonbusted piles + 10 per exact-21 pile.
7. Show card count, current card, pile totals, which piles are locked, and final breakdown.

**Important consistency rule:** A completed exact-21 pile contributes 21 points **plus** the +10 bonus. Locked due to exact 21 is not the same as busted; store separate status values such as OPEN / EXACT / BUSTED.

**User-facing rule text:** “Place each number on one of three stacks. Get as close to 21 as you can without going over. Exactly 21 earns a bonus.”

**Tests:** All cards resolve once, bust scoring zero, exact 21 scores 31, no placements into locked piles, deterministic sequence, seed replay, finite number of moves, no duplicate rewards, complete with mouse and touch.

### 8.4 Reward guidelines

Example initial non-economic awards:
- Finish Ghost Circuit: +8 Gaming XP; extra up to +12 XP based on score band.
- Finish Stacks 21: +8 Card Sense XP; extra up to +12 XP based on score band.
- First-time personal-best milestone may award a small fixed bonus; track claimed milestone IDs.
- Both games may grant modest cosmetic venue rewards at scores or skill milestones.

**Don't build a monetized gambling economy around the library game.** It is a school club score challenge, not real-money blackjack.

### 8.5 Shared score architecture

Store personal best and recent run metadata. When online challenges are added later, use server-issued challenge seeds and server validation or replay verification. Local-only scores are fine for MVP but cannot be considered cheat-proof.

---

## 9. Skills, item effects, and progression implementation

### 9.1 Initial skills

First-release seven modern skills: Athletics, Research, Electronics, First Aid, Scavenging, Gaming, Card Sense. Add Bladecraft and Channeling as supernatural combat masteries.

**Vertical slice requirement:** Five of the modern skills must have real sources of XP, readable level-up behavior, and at least one noticeable gameplay benefit. Others may exist in the character sheet only once their actual activities work. Avoid impressive-looking progress bars for skills that cannot be used.

### 9.2 XP formula

Initial level-up requirement (tune after playtests): **round(20 + 15L + 5L²)** XP for advancement from level L to L+1. Choose and document whether the save stores lifetime or current-level XP; the UI must correctly reflect it.

**Advancement event:** one XP award → level function consumes thresholds as many times as required → milestone awards once → persist. Test multi-level XP awards.

### 9.3 Milestone effects: examples

| Skill | Level 5 benefit | Level 10 benefit |
|---|---|---|
| Athletics | Slightly faster dodge recovery | Extra sprint route near athletics complex |
| Research | Extra details on Strayling clues | Optional route to find old network schematics |
| Electronics | Basic scanner recipe | Better detection radius for breach devices |
| First Aid | Stronger recovery kit | Prepare efficient two-use kit |
| Scavenging | Reveal nearby ordinary caches | Higher chance of uncommon part |
| Gaming | New cabinet speed variant | Unlock arcade display frame |
| Card Sense | New Stacks 21 challenge seed | Access to library club opponent |
| Bladecraft | Three-hit combo finisher | Guard counter |
| Channeling | Improved Pulse range | Improved Ward efficiency |

Do not allow unbounded percentage multipliers that trivialize combat or require high-level grinding to finish the story.

### 9.4 Derived stats

Derived stats must be computed from level, equipment, and active effects with documented stacking rules. Avoid directly editing Health maximum in a dozen unrelated UI handlers.

---

## 10. UI, readability, and responsive behavior

### 10.1 Desktop baseline

Reference viewport: **1280 × 720** browser content area. The world occupies the majority of the space. HUD fits without the page body scrolling. Skills, inventory, quests, and phone panels use contained overlays and understandable tabs. Panel scrolling inside an overlay is acceptable when items exceed available height; **don't force the entire game page below the fold** just to upgrade one item.

### 10.2 Mobile baseline

Reference viewport: **390 × 844**. World scales while retaining interactable targets, ability controls move to reachable bottom corners, and mini-game inputs are tap-friendly. Desktop action controls should never occupy most of the mobile world. Support portrait for mini-games; combat can recommend landscape if tested, but blocking portrait entirely requires a deliberate product decision.

### 10.3 In-world interaction

Use prompts like “E — Play Ghost Circuit,” “E — Join Card Table,” and “E — Talk to Mara.” Context prompts must reflect quest conditions and never advertise features that aren't implemented.

### 10.4 Design-language clarity

- **Current goal:** One plain-language objective visible on HUD.
- **Completed action:** Clear feedback for rewards and consequences.
- **Combat:** Show why damage landed through position/telegraph, not hidden formulas.
- **Mini-game:** Show rules in three sentences or less before first play; enable immediate replay.
- **Skills:** Display how to train, current benefit, and next unlock, not just a progress bar.
- **Progress:** Put saved indicator and next steps in the Phone.

---

## 11. Performance, accessibility, and browser requirements

### 11.1 Performance budgets (initial targets)

- Aim for 60 FPS desktop in a simple encounter and stable 30 FPS on a representative mid-range phone.
- Keep startup download lean; a working graybox should not require multi-megabyte art bundles or external APIs.
- Favor pooling for particles/projectiles; avoid creating large DOM trees each animation frame.
- Device pixel ratio and camera zoom should scale deliberately; no blurry unreadable tiny text.
- Load larger scene assets lazily after the first interactive screen, if necessary.
- Avoid off-screen simulation for inactive mini-games.

### 11.2 Accessibility

Keyboard navigable menus, color-independent combat indicators, reduced-motion option, adjustable audio, pause/resume support, and text sizes that work on mobile. In Stacks 21, each pile must have a distinct visible status label. In Ghost Circuit, lane position and hazards must be distinguishable without relying solely on hue.

### 11.3 Target browsers

Current stable Chrome, Safari, Edge, and Firefox on desktop; Chrome Android and Safari iOS for touch mini-games. Explicitly test browser reload and tab background/foreground behavior. Maintain graceful handling of unavailable Web Audio and denied storage.

---

## 12. Testing strategy

### 12.1 Unit and deterministic tests

- XP threshold advancement, multi-level changes, duplicate award prevention.
- Inventory add/remove/equip, invalid item handling, save schema migration.
- Quest stage transitions, choice branches, reopening a completed quest.
- Relationship bounds (0–100) and transparent story-flag effects.
- Combat damage, cooldowns, i-frames, hit detection, no human NPC damage, duplicate enemy rewards.
- Ghost Circuit obstacle spawn reachability and score on pausing/finishing.
- Stacks 21 exact/busted scoring, card consumption, seed determinism, early ending.
- Activity rewards granted once per run ID and not again on browser refresh.

### 12.2 Browser end-to-end paths

**Journey A — the ordinary player:** New game → move → talk to Theo → enter arcade → finish Ghost Circuit → see Gaming XP and personal best → close and reopen → progress remains.

**Journey B — library specialist:** Continue same save → open Places → Quick Visit library → play Stacks 21 → hit exact 21 on a test seed → see accurate score → Research interaction → return to campus.

**Journey C — swordfighter:** Take story objective → reach auditorium → unlock Bellwether → fight enemy and dodge → loot → open skill panel → level up Bladecraft → save and reload.

**Journey D — school choice:** Choose partial disclosure to Theo → read visible Trust change → progress to later authored dialogue → see branch acknowledgment.

**Journey E — small screen:** Open a fresh save at mobile resolution → interact → play one arcade run and one card run → return to location → verify no off-screen critical controls.

### 12.3 Manual acceptance test questions

Give the prototype to people unfamiliar with the project:
1. “Can you move around and find a person to talk to?”
2. “What is your current objective?”
3. “Can you play a game at the arcade?”
4. “Can you explain why you earned points or XP?”
5. “Can you find your character's skills and upgrades?”
6. “Can you return tomorrow and resume exactly where you left off?”

If a tester cannot answer without being coached, fix onboarding and UI before adding content.

---

## 13. Implementation milestones (scope-gated, not calendar promises)

### Milestone A — World movement

**Deliver:** A recognizable school courtyard/hallway, player sprite or placeholder silhouette, collision, doors, camera, NPC interaction prompt, HUD, and local save of safe position.

**Exit condition:** Movement feels like a top-down game and interaction works across desktop and touch. No content production spree.

### Milestone B — Bellwether combat

**Deliver:** Sword summon, 3-hit basic attack, dodge, Pulse, Health/Focus, Strayling, Watcher/Hollow behavior, defeat and reward flow, basic audio/particles.

**Exit condition:** A five-minute series of fights is satisfying without new artwork. If not, tune impact/timing/enemies.

### Milestone C — Playable town activities

**Deliver:** Quarterlight Arcade location, Ghost Circuit full rules/result; Nightwood Public Library, Stacks 21 full rules/result; Phone Quick Visit for discovered locations; repeatable scores and XP.

**Exit condition:** New player can complete both mini-games and understand the result; veteran can finish one with tiny session overhead.

### Milestone D — Character growth

**Deliver:** Skill XP, five functional modern skills, Bladecraft/Channeling, milestone effects, equipment slots, three upgrade items, inventory, save backup/import/export.

**Exit condition:** Upgrade consequences are observable; a save survives reload and a migration test.

### Milestone E — School-life story slice

**Deliver:** Scene 1–5 from Story Bible, Mara/Theo/Ms. Park, Nora clue, first school-choice consequence, guided quest objective, mixed gameplay pacing.

**Exit condition:** A new player completes a coherent opening without being told how systems work outside the game.

### Milestone F — Quality pass and deploy

**Deliver:** Consistent art direction, sound, input/accessibility, mobile controls, error handling, instrumentation for local playtests, basic automation, and a public static deployment.

**Exit condition:** Playtesters can independently move, fight, play mini-games, progress, save, and resume in a browser. No embarrassing “the player is invisible” camera/art bugs.

**Ordering note:** A and B should be prototyped early; C proves the 30-second promise; D and E connect the game into one cohesive RPG. Parallelize where useful, but don't skip the gates.

---

## 14. Asset sourcing policy

No licensed asset or artwork should be integrated without confirming: license terms, commercial-use permission if needed, attribution requirement, original URL, file names and modification scope.

Create an **ASSET_CREDITS.md** once assets are acquired, with exact source links and licenses. Do not copy proprietary RuneScape/Diablo assets. Avoid art that mismatches top-down orthographic perspective.

**Fallback:** Code-drawn simple silhouettes, geometric sprites, gradients, shaders, and text labels. They should be made attractive through consistent composition and FX, not used as an excuse for invisible characters or empty maps.

---

## 15. Risk register

| Risk | Warning sign | Mitigation |
|---|---|---|
| Scope explosion | Developer starts building full city, multiplayer, and 20 skills before combat works | Enforce A–F gates and first-session slice |
| Bad movement feel | Character drifts, camera hides environment, colliders don't match | Tune movement/camera/collision with graybox |
| Art inconsistency | Mixed isometric and orthographic packs | Pick overhead style and limited asset budget |
| Mini-games aren't fun | Players only play once for XP | Iterate scoring/controls; require voluntary replay |
| Story blocks casual play | Long unskippable dialogue before entering arcade | Playable intro, early venue access, skip/replay scenes |
| School life becomes chores | Arbitrary time penalties and daily attendance gates | Player-directed story phases, relationship choices only |
| Progression feels fake | Levels with no perceptible unlock | Skill milestones have explicit utility |
| Save loss | Refresh erases progress or duplicates XP | Atomic events, migration, export backup, e2e tests |
| Mobile is unusable | Tiny buttons or camera zoom | Test at 390px from Milestone A |
| Premature server complexity | Account/chat built before game loop | Local-first MVP; backend only after product validation |
| Misleading release claims | Documentation confused with playable build | Clearly label status and demo URL only after deployment |

---

## 16. First development task packet

A developer picking this up should create these initial implementation tasks, in order:

1. **Bootstrap TypeScript/Vite game scaffold** with an empty top-down scene and a stable browser build.
2. **Implement player movement/camera/collision/interactions** with one school map and visible prompts.
3. **Create reusable NPC and enemy components** with placeholder silhouettes and y-sort draw order.
4. **Implement a sword hit test and dodge** before special spell effects.
5. **Build Ghost Circuit as a real standalone in-world mini-game** (input, timer, collisions, score).
6. **Build Stacks 21 with deterministic rules and unit tests.**
7. **Create a small saveable character state** and transactional skill XP for both mini-games.
8. **Add Phone menu and discovered-venue Quick Visit.**
9. **Connect Bellwether discovery and one school dialogue choice** to the world and saved flags.
10. **Test first-time onboarding, touch controls, combat readability, and save/load.**

Anything beyond this packet requires proof the initial slice is enjoyable, not merely functional.

---

## 17. Definition of done for handoff

A handoff recipient should know:
- **What to build:** Full GDD, Section 18 MVP definition.
- **Why to build it:** Two lives, one character; active RPG and short playable leisure.
- **What happens in the story:** Story & World Bible, Act I plus opening scenes.
- **What to avoid:** Over-building multiplayer, assets, meaningless XP buttons, mandatory attendance timers.
- **How it is structured:** This document's state, scene, content, and mini-game contracts.
- **How to verify it:** Milestone exit conditions, unit tests, browser journeys, and player playtests.

The intended first deploy is a **real but small game**, not a landing page pretending to be one.
