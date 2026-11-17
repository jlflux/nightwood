# NIGHTWOOD — Story & World Bible

**Version 2.0 — revised canon. Spoilers for the full story.**  
**Story authority:** This document defines narrative canon. The [Game Design Document](GAME_DESIGN_DOCUMENT.md) defines mechanics and release scope.  
**Setting:** A fictionalized, present-day Homewood, Alabama, and its supernatural shadow realm, **Nightwood**.

> **The city is Homewood. The shadow world is Nightwood.** The two share streets, buildings, and landmarks, but they are not the same place.

## 1. The premise

A high school student in Homewood discovers that familiar places — a corridor after practice, the field house, the library steps, an ordinary neighborhood street — have counterparts in another realm. **Nightwood** is a twisted, inhabited shadow of Homewood. Monsters have existed there for generations, and some can touch the ordinary world.

The student finds an ancient sword known as **The Night Splitter**, the only weapon they know that can cut a safe path through Nightwood. They must learn to wield the sword, survive its creatures, and find out why the boundaries are failing while still keeping up with school, friendships, crushes, family, hobbies, and normal life.

**Theme:** What does protecting your home mean when the home you know has a hidden second face?

**Tone:** Cozy, funny, recognizable student life contrasted against eerie supernatural spaces. The player should want to hang out at the arcade even while a monster mystery is unfolding. The horror is atmospheric and unsettling rather than gory.

**Genre touchstones, not templates:** Modern-life RuneScape-style skill freedom, accessible action swordplay, a mystery-driven RPG, and replayable miniature games inside a traversable town. Avoid imitating any one game's copyrighted world, dialogue, or assets.

## 2. The protagonist — always the player's character

The protagonist has **no canonical first or last name**. During character creation the player enters a chosen name and chooses **boy or girl** as the character's identity. The game should use the chosen name consistently and use the corresponding pronouns where applicable. Do not hardcode a former default character name in any mission, narration, phone message, save profile, or NPC dialogue.

The character is a student of about 17 at the fictionalized high school in Homewood. The player chooses hair, skin tone, outfit colors, and a small starting personal interest (e.g. Athletics, Gaming, Research, or Electronics). These choices don't restrict access to storylines.

**Narrative voice:** Use second-person quest text or the variable **{playerName}** in structured dialogue. Use neutral sentence construction where practical. For pronoun-bearing lines, use the profile choice (he/him or she/her) via a single localization function, never free-form string substitution scattered across scripts.

**Personality:** Dialogue choices can express humor, confidence, caution, empathy, or skepticism. No character choice makes the protagonist a predetermined chosen-one personality. The player is a fairly normal student who is pushed into impossible circumstances.

**Family premise:** A busy parent or guardian expects them to come home, attend school, and help around the house. Family specifics can be established through early dialogue without locking the character into a name or gender.

**Love-interest rule:** Romance is optional, age-appropriate, and open to either a boy or girl player character. Romantic choices are based on expressed interest, mutual trust, and character-specific stories — never on a hidden gender restriction. There are no sexual scenes; relationships focus on school experiences, dates, affection, boundaries, and decisions about secrecy.

## 3. Homewood: daylight and belonging

**Homewood** is cozy, homey, and recognizably modern: quiet streets, family restaurants, brick storefronts, a school with busy hallways and sports fields, wooded paths, sidewalks, a library, a small arcade, neighborhood houses, a park, a convenience store, and places to hang out after school. Daylight is warm and lived-in. This normal life is not a disposable prologue; it is half of the game.

For the game, use a **fictionalized version of Homewood**. The characters, institutions, campus map, threats, events, students, and conversations are invented. The setting is not a claim about real residents or real students, and no identifiable real minors should be depicted.

### Landmark pairs

| Homewood | Its Nightwood counterpart | Gameplay contrast |
|---|---|---|
| High school academic hall | Corridor of repeating lockers and doors | Main hub / entry to initial nightmare |
| School auditorium | Blackstage, with a stage facing an endless dark room | The Night Splitter discovery and Mistress Shade |
| Football stadium / athletics complex | The Hollow Stands, where the crowd is made of silhouettes | Athletics tasks / noise and shadow encounters |
| Public library | The Unwritten Stacks, books without titles, reversed whispers | Research and card games / lore puzzles |
| Quarterlight Arcade | The Dead Quarter, frozen cabinets illuminating empty walls | Gaming / short challenges and anomalous signals |
| Neighborhood street | The Long Block, endlessly repeating front doors | Daily life / navigation and rescue routes |
| Creek trail | Blackwater Cut, a waterway with no reflection | Scavenging / Crawlers and Nighthounds |
| Old municipal service works | The Lockworks, iron gates and shadow machinery | The Warden and later bosses |

The player should recognize layout and landmarks across realms, but Nightwood changes sightlines, lighting, scale impressions, and encounter routes. This makes a small reusable map set compelling rather than requiring an entire second handcrafted city.

## 4. Nightwood: the shadow realm

### 4.1 What Nightwood is

**Nightwood is a realm**, not merely a force field or abstract magical effect. It physically overlaps Homewood. Every ordinary building may have a strange counterpart, but some locations are more warped than others.

Nightwood is always dim; not necessarily pitch-black. Edges distort, distant things seem to breathe, and some alleys extend farther than geography allows. There are places built by monsters, and a few remnants of those who came before them.

Its residents are not universally mindless. Some creatures have territories, habits, fear, and hierarchies. Several bosses rule corners of the realm. One overarching mystery is whether Nightwood is naturally predatory or has been reshaped into something worse.

### 4.2 The boundary

The invisible separation between Homewood and Nightwood is called **the boundary**. Do **not** call it "the Veil." An **opening** is a breach, doorway, or seam, depending on context. These can appear in dark corners, reflected light, deep shade, service doors, tunnels, and places where a strong emotion has imprinted itself.

Rules:
1. Most people in Homewood don't know Nightwood exists. They may see the fallout of a breach and assume a mundane cause.
2. Homewood and Nightwood share geographic anchors, but a door open in one realm can be blocked in the other.
3. Only certain monsters can significantly influence Homewood directly. **Shadewalkers** are the most dangerous infiltrators because their shadows can cast into Homewood even while the bodies stay in Nightwood.
4. Opening a doorway always has an anchor or cost; sealing one requires confronting its anchor, using a Custodian seal, or cutting it with the Night Splitter.
5. Time spent in a realm is gameplay time only. The player is never penalized for closing the browser or enjoying mini-games.
6. Ordinary humans cannot safely remain in Nightwood indefinitely without protection, but the game does not have an oppressive hunger/oxygen timer.
7. Nightwood does not make every imaginable spell possible. Powers obey learnable rules and have resource costs.
8. Not every monster must be slain, though combat is the major action loop. Some encounters can be avoided, contained, or understood.

### 4.3 Crossing over

The first crossing happens in the school auditorium during a strange power failure. As the main character reaches for an old sword hidden behind the stage, the environment folds: Homewood's walls remain, but the darkness behind them becomes Nightwood.

After that, marked doorways, the Night Splitter, and Custodian waypoints allow controlled transitions. The player can return to familiar Homewood locations to rest, study, enjoy mini-games, and maintain normal relationships.

**Visual implementation:** A low-cost realm transition can recolor the same tiles, change lighting, distort distant background layers, swap props and collision blockers, and spawn shadow creatures. It should be unmistakable which realm the player is in from the HUD and environment, without an expensive second map.

## 5. The Night Splitter — weapon, key, and mystery

**The Night Splitter** is the game's permanent signature sword. It is not random loot and will never be traded away for a generic higher-stat blade.

**Look:** A slim modern-fantasy silhouette, almost black metal with a narrow silver edge; a pale cyan/white seam down the blade. The guard has two asymmetrical prongs like a split crescent. At higher mastery the light fractures across the blade like a crack through nighttime glass.

**Discovery:** Hidden in a sealed compartment under the school auditorium stage. The protagonist finds it because they investigate a disappearance or a disturbing sound, not because they are told they have royal ancestry.

**Everyday concealment:** The sword can fold into a small ordinary-looking keepsake on the student's keychain when in Homewood. It is not a visible full-sized blade carried openly through the school. In Nightwood it unfolds instantly when the protagonist calls it.

**What it can do:**
- Cut and disperse Nightwood monsters.
- Split seams between the realms in specific marked places.
- Reveal hidden shadow trails.
- Channel learned magic into blade attacks, Pulse waves, wards, and binding techniques.
- Sever anchors that let dangerous monsters extend influence into Homewood.

**What it cannot do:**
- Harm ordinary human NPCs, coerce friendships, or solve schoolwork.
- Open any door at will.
- Keep the player permanently safe from fear or injury.
- Erase relationship consequences or grant automatic victory over bosses.

**Mythology:** The blade was forged by a former Custodian from a broken piece of the boundary itself. It is called the Night Splitter because it can part the dark space between realities. Its shape and strength respond to mastery, courage, and the character's willingness to face what scares them — not a bloodline prophecy.

**Progression:** Edge (sword combos and precision), Ward (defensive stance, counter), Rift (magic Pulse, shadow reveal, breach cutting). Earn visual changes through story and upgrades. Jewelry, clothes, shoes, electronics, crafted charms and sigils provide normal equipment slots.

## 6. Creature field guide — initial monster roster

Every monster has a **distinct combat behavior** and at least one readable weakness. These are the six initial families, with variations allowed but not required for MVP.

| Species | Threat profile | Behavior in combat | Homewood/Nightwood role | Low-art silhouette |
|---|---|---|---|---|
| **Strays** | Weakest, by far the most numerous | Rush in groups, quick swipes, low health, become dangerous by surrounding the player | Swarm the edges of breaches; tutorial opponents | Small ragged shadows, two bright eyes |
| **Shadewalkers** | Not strongest, but **most dangerous to Homewood** | Fade, reposition, strike from an offset shadow; can send projected shadow hazards across the boundary | Their shadows cast into Homewood while their bodies remain in Nightwood; stealth/infiltration threat | Tall thin form with a separate creeping shadow |
| **Howlers** | Sensory/disorientation threat | Emit deceptive directional cries, fake attack cues, or call duplicates; true attack telegraphs remain fair and readable | Lure people through doors, manipulate sounds in tunnels and school halls | Wide maw shape with animated sound rings |
| **Feeders** | High psychological threat | Feed on fear; apply a visible Dread meter that weakens focus and can briefly blur safe paths; defeated by courage/ward timing rather than helplessness | Draw strength from people frightened by breaches | Hooded/floatlike hunched silhouette with pale interior glow |
| **Nighthounds** | Fast pack hunter / **pets of Feeders** | Circle, leap, and protect their Feeder; lose coordination when master is disrupted | Track prey along shadows, guard Feeder nests | Low four-legged sharp-eared silhouette |
| **Crawlers** | Ambush / vertical mobility | Climb walls and ceilings, cross barriers, drop from above after a clear cue | Nest in service halls, gym rafters and creek tunnels | Flat many-limbed spiderlike shadow |

### Encounter rules

- Strays appear in the greatest numbers, but their base attacks must remain avoidable.
- A Shadewalker's **shadow projection** is the only early regular-monster mechanism that can directly cast a hazard into Homewood. Make it a visible gameplay system, not an arbitrary lore statement.
- Howler audio deception must always have a visible equivalent; hearing-impaired players must be able to identify the real danger.
- Feeder fear/drain is a visible short-duration status mechanic with counters; do not simulate severe panic or hopelessness as an unescapable control loss.
- Nighthounds have visible tethers or behavior that shows their bond to a Feeder.
- Crawlers need a readable drop shadow and warning before they fall.
- Larger enemies have strong silhouettes, not more elaborate anatomy or expensive animations.

### Development roster versus launch roster

The **design** begins with all six species. The very first combat prototype can implement **Strays, Crawlers, and one Shadewalker shadow mechanic** with simplified art; the other three receive full behaviors as the vertical slice expands. The six become the first-chapter ecosystem, not six fully polished enemy types required on day one.

## 7. Bosses — planned early saga

These are the seven named boss encounters / boss groups in Nightwood's **early larger story**, though only the first is necessary for the playable prototype. They are not all mandatory for the first vertical slice.

| Boss | Territory and identity | Encounter signature | Story meaning |
|---|---|---|---|
| **Mistress Shade** | The mirrored school, particularly the Blackstage | Summons Strays and folds the auditorium into multiple shadow lanes; switches places with projected silhouettes | First major enemy; proves Nightwood can rule familiar school spaces |
| **The Warden** | The Lockworks beneath the older city blocks | Heavy chain arcs, sealed gates, moving barriers; player uses precise Night Splitter cuts to break anchors | Guardian of a sealed passage and keeper of a Custodian failure |
| **The Unseen King** | A district of dark streets that refuse to appear on the map | Unseen position telegraphed by environmental reactions and moving light; demands awareness, not blind swings | Controls a network of Shadewalkers and influences Homewood at distance |
| **Nyxara** | A reflection court beneath the library / water tunnels | Creates reflective doubles; player must identify real attacks from a consistent visual tell | Offers secrets about the sword's creation and the first breach |
| **The Maw** | The deep flooded Blackwater Cut | Huge stationary presence with sweeping limbs and arena transformations; cut vulnerable anchors | Embodies Nightwood's hunger and the consequences of unmanaged fear |
| **Astrix** | An abandoned signal tower / the realm's high static canopy | Projectile patterns and rhythm-based pulse windows; mixes false signals with a readable true cycle | Connects modern infrastructure to the realm's ancient geometry |
| **The Crown Council** | Ruined civic chamber at a three-way junction | **Three simultaneous bosses in one encounter**: Crown of Ash (aggression), Crown of Glass (illusion), Crown of Iron (defense). Their patterns interact | Tests every mastery branch and exposes a larger governing intelligence |

**Difficulty order is provisional.** Narrative pacing may swap The Unseen King / Nyxara / The Maw / Astrix as needed. The Crown Council is a group encounter, not a single three-phase creature. Defeating a council member should change the patterns of the remaining two.

**Boss fairness rules:** Mechanics telegraphed visually; checkpoints before encounter; no rare consumables required; on defeat, save progress but permit retry at a safe entrance. Bosses are designed around positioning, sword timing, and learned abilities, not giant health bars.

### Mistress Shade — first boss notes

Mistress Shade is a Nightwood entity that has occupied the school's dark reflection for decades. She doesn't run the real school or control real students. Her arena is the auditorium whose seats seem to stretch into an impossible distance; the player's ordinary surroundings become threatening through lighting and spatial reuse.

Her first appearance is a **short near-loss** tutorial scene: the player escapes while she laughs at the sword's return. A later chapter-one fight is the proper boss encounter. She uses small Strays, reflected shadows, and two clearly marked attack patterns. Winning reveals that someone in Homewood has been helping keep her passage open.

## 8. The Custodians

**The Custodians** monitor Nightwood, maintain old boundary seals, track creatures that threaten Homewood, and conceal dangerous knowledge. They are not a large heroic army. They are a dwindling local network of librarians, repair workers, archivists, former hunters, and people who inherited duties they never asked for.

Their public front is ordinary life: municipal records, infrastructure maintenance, historical preservation. Their members disagree about whether concealment still protects Homewood or merely leaves it vulnerable.

**Three essential rules:**
1. They know about Nightwood but do **not** control it or all its creatures.
2. Some of their seals have failed because they prioritized keeping Homewood comfortable instead of fixing the deeper problem.
3. They see the Night Splitter as a key artifact, but the wielder is not obligated to obey them.

**Primary contacts:** Ms. Lena Park (library archivist) and a retired city electrician introduced later. A high school employee may have quiet knowledge, but do not turn every teacher into a covert magician.

## 9. Main recurring cast

The following are **fictional** students, staff and adults. All optional romance partners are age-matched teenage peers, with independent ambitions and story roles.

| Character | Life in Homewood | Story and gameplay role | Romance? |
|---|---|---|---|
| **Mara Ortiz** | Student newspaper editor; direct and observant | Investigates disappearances; Research/Media quests; challenges secrecy | **Optional girl interest** |
| **Theo Brooks** | Arcade regular; electronics hobbyist; longtime friend | Introduces Ghost Circuit, repairs devices, helps protagonist keep ordinary fun | **Optional boy interest** |
| **Jessa Navarro** | School athletics standout; works shifts at a neighborhood café | Athletics training, rival-friendly banter, brave but not reckless | **Optional girl interest** |
| **Adrian Bell** | Quiet music student who volunteers at the library | Music, archival lore, empathy and observation; connections to odd sounds in Nightwood | **Optional boy interest** |
| **Ms. Lena Park** | Public librarian/archivist | Custodian contact, research, Stacks 21 venue, truth about old seals | No |
| **Dr. Cora Hayes** | School principal | School Standing, suspicion, protecting students | No |
| **Calder Reese** | Contractor for infrastructure modernization | Human catalyst with plausible motives; involved in failing boundary seals | No |
| **Vera Kell** | Former Custodian, now radical reformer | Believes Nightwood should be opened; human foil to the protagonist | No |
| **Nora Kim** | Younger student connected to a disappearance | Early rescue objective, later evidence witness | No |

**Former canon replacement:** There is no named Eli Ward, Nina Ward, or Sam Ward in current canon. The player is not defined by that family's backstory. Any parent/guardian/sibling scenes use configurable or newly authored family roles after player creation.

### 9.1 Relationship system

Each peer tracks Friendship/Trust and optional Romance Interest separately. The player can befriend all four, romance **one mutually interested partner at a time** in the first implementation, and change direction through explicit respectful dialogue, not hidden penalties. No romance is mandatory, and no romance choice changes the player's combat class or locks the main story.

Romance develops through **authored quests**, not spammed gifts or grinding a heart bar:
- **Mara:** Helping solve a school story, deciding when to share the supernatural truth, a quiet conversation after a difficult news tip.
- **Theo:** Arcade rivalry and jokes gradually becoming honest conversations about worrying for each other.
- **Jessa:** Practice after school, a shared neighborhood walk, discussing the pressure of appearing fearless.
- **Adrian:** Library listening session, deciphering distorted recordings, choosing whether a private song belongs in an investigation.

The player opts in with clearly phrased dialogue. If declined, the NPC remains a meaningful friend. There are no gender-specific blocks.

### 9.2 Dialogue tone samples

**THEO:** “You just spent an hour staring at an empty locker. You good?”

**PLAYER choice A:** “I was making sure it stayed empty.”  
**PLAYER choice B:** “No. But I'm not ready to explain.”  
**PLAYER choice C:** “Are you still mad I beat your score?”

**THEO:** “For the record, I was going to say that fourth thing.”

Romantic scenes should sound like teenagers who know each other, not adult melodrama.

## 10. Four-act story structure

### Act I — The Other Side of Home

- **Normal life:** Introduce player name/identity, Homewood High, classmates, arcade, library, small school tasks. The player can play Ghost Circuit or Stacks 21 almost immediately.
- **Disruption:** A school power failure or second impossible bell coincides with Nora's disappearance. Shadows in the auditorium don't match the people casting them.
- **Discovery:** Under the stage the player finds the Night Splitter and steps into Nightwood, a dark copy of the school. First Strays and a Crawler teach sword and dodge controls.
- **Pursuit:** A Shadewalker projects its shadow into Homewood; the player must cut the anchor on the Nightwood side.
- **Mistress Shade:** The player first escapes her, then confronts her in the chapter finale. Her defeat shows the school is connected to older Custodian seals.
- **Personal cost:** The player is late to something normal — a friend's arcade challenge, student paper assignment, or family errand — and must respond honestly or evasively. No irreversible punishment.

### Act II — Streets That Remember

- The Nightwood reflection extends past campus to the library, arcade, creek and downtown.
- The Custodians explain partial history and teach controlled crossings.
- The Warden holds a sealed path; breaking his control yields evidence about old failures.
- Feeder and Nighthound encounters introduce fear as a tactical pressure, not a supernatural “lose control” cutscene.
- Relationships deepen through optional date/friend scenes and ordinary work.
- The Unseen King's Shadewalkers begin creating visible incidents in Homewood.

### Act III — The City With Two Faces

- More people notice unusual shadows in ordinary streets; the player must decide whom to trust.
- Nyxara reveals how the Night Splitter was forged and why some boundaries were deliberately weakened.
- The Maw's territory threatens to swallow an entire corridor between realms; a decisive defeat closes a major breach.
- Calder Reese's infrastructure changes have destabilized old Custodian systems; Vera Kell believes the boundary should be dissolved.
- The protagonist learns it is impossible to maintain normalcy by lying to everyone forever.

### Act IV — The Longest Night

- Astrix twists the town's communication and signal infrastructure, creating false alerts and corrupted warnings.
- The Crown Council occupies a three-part throne chamber holding a foundational seam open. All three crowns must be confronted in one climactic boss battle.
- The protagonist fights across mirrored Homewood/Nightwood spaces while classmates and allies help protect civilians in Homewood.
- Finale is a choice between **repairing a safer boundary** and **sharing the truth with a trusted, responsible circle**. Both outcomes preserve Homewood, leave Nightwood real, and set up future exploration.
- Epilogue: an ordinary morning in Homewood feels genuinely safe again — but the player now knows how much work that safety requires.

**Note on boss scope:** These seven early-story bosses are **planned story content**. A first playable demo needs only Strays, one specialist monster, a taste of Mistress Shade, and a short encounter. Never advertise the entire roster as implemented before it is.

## 11. Opening playable vertical slice — concrete scene beats

1. **Character creation:** Enter display name; choose boy/girl; select basic look and starter interest. Never assign a canonical default name in story text.
2. **Homewood High:** Warm afternoon; speak to Theo and Mara. A teacher needs help with a projector or a student needs a source found in a school newsletter. Earn initial Electronics/Research XP.
3. **Free time:** Walk to Quarterlight Arcade or public library. Play Ghost Circuit (reflex runner) or Stacks 21 (number-card challenge). Both are independently replayable for personal best and skill XP.
4. **Strange sign:** A light casts a shadow in the wrong direction. Someone has seen Nora enter a restricted corridor.
5. **The Night Splitter:** Investigate the auditorium, take the sword, watch the scene shift to Nightwood. Give immediate control back to the player.
6. **First encounter:** Fight two Strays, dodge a Crawler's ceiling drop, use the sword to cut an anchor. No long mandatory combat tutorial text.
7. **First Shadewalker:** Its moving shadow appears briefly in Homewood while its body is visible across the boundary. Clearly show that this species can endanger ordinary life.
8. **Mistress Shade teaser:** She appears on the Blackstage, names the sword, and seals the route. The player escapes through a Custodian-marked exit; the proper boss battle is later.
9. **Consequence:** Theo or Mara asks where the player went. Player selects an honest, partial, or joking response, affecting Trust and Exposure modestly.
10. **Unlock:** Phone → Places → Quick Visit for previously discovered arcade and library; open-world loop resumes. Skills, high scores, and quests must remain saved after reload.

**First playable target:** A small, coherent, enjoyable experience — not a deceptive claim that the complete RPG already exists.

## 12. Quests and realm-linked activities

### 12.1 “Where the Shadow Lands”

A Shadewalker stalks an ordinary school hallway by projecting a shadow through the boundary. The player notices the shadow moving against the light. In Homewood, they can track where the shade falls; in Nightwood, they fight the actual Shadewalker and sever its anchor. Reward: first Night Splitter Rift technique and Awareness/Research XP.

### 12.2 “Game Over at Quarterlight”

Theo wants the player to beat his Ghost Circuit record. A cabinet has occasionally displayed a map of corridors that don't exist in Homewood. This starts as **a real playable arcade challenge**, with an optional clue for players who investigate the machine. Players uninterested in the mystery can keep playing for score.

### 12.3 “The Missing Page”

Ms. Park asks the player to inspect a record missing from the Homewood library archive. The same shelves in Nightwood's Unwritten Stacks contain a reversed copy. The player can use Research or Electronics, or find the answer by exploring, while Stacks 21 remains an ordinary optional game at the library table.

### 12.4 “The Sound Behind the Door”

A Howler creates convincing cries from a sealed classroom, then a false alarm in the athletic tunnel. The player can identify the correct direction by a visual pulse in the Night Splitter, so hearing impairment is not a barrier. Reward: basic ward technique and new monster field guide entry.

### 12.5 “No One Said You Had to Go Alone”

A relationship quest with any close friend or romance interest. The player chooses whether to share part of the secret. Different scenes reflect each character's perspective; the result affects support later without forcing disclosure or punishing players who remain single.

## 13. Visual and audio rules

- **Homewood:** warm, gentle colors, readable ordinary-day ambient details, clearly lit character silhouettes.
- **Nightwood:** the same geography made wrong through tint, fog, shadows, distorted props, entity silhouettes and eerie audio. Keep the camera truly top-down to avoid isometric/side-view confusion.
- **Night Splitter:** use a small reusable blade sprite plus short slash arc, hit flash, and magic particles. It must be visible and satisfying without dozens of animation frames.
- **Shadewalkers:** separate shadow element on a different layer so their Homewood projection can be simulated cheaply.
- **Howlers:** directional sound rings and a visual clue to the real source. No unfair audio-only puzzles.
- **Feeders:** Dread conveyed with a small meter, controlled FX and screen-edge tint; no uncontrollable flashing.
- **Crawlers:** wall travel via pathing and a visible ground warning circle on drop.
- **Bosses:** define readable arena geometry and 2–3 patterns first; expensive cutscene art is optional.
- All music, graphics, and sounds must be original, licensed, or public domain. Do not borrow an existing film's monster designs.

## 14. Writer and implementer continuity rules

1. **Homewood is the city; Nightwood is the shadow realm.** Never use Nightwood as the town name.
2. The old name “the Veil” is **retired**. Use **Nightwood** for the world and **the boundary** for the barrier.
3. The artifact is **The Night Splitter**. The old sword name is retired.
4. **No fixed protagonist name or gender.** Character creator chooses boy or girl and a name.
5. Romance is optional and includes two female peers (**Mara, Jessa**) and two male peers (**Theo, Adrian**), available to either protagonist option.
6. **The Custodians** remain the monitoring/protective faction, with internal disagreements and imperfect information.
7. Starting ordinary monsters are exactly: **Strays, Shadewalkers, Howlers, Feeders, Nighthounds, Crawlers**.
8. Planned early bosses are exactly: **Mistress Shade, The Warden, The Unseen King, Nyxara, The Maw, Astrix, The Crown Council**. The Council has three bosses in one fight.
9. **Strays** are the weakest but most common. **Shadewalkers** can project shadows into Homewood. **Howlers** deceive with noise. **Feeders** draw on fear. **Nighthounds** serve Feeders. **Crawlers** traverse walls.
10. No sexual content involving student characters, no real student likenesses, and no implication that the fictional supernatural events happened in actual Homewood.
11. Character freedom matters. Story urgency must never remove access to ordinary mini-games for extended stretches.
12. Update the GDD, technical implementation, and game UI whenever changing this canon.

## 15. Story delivery and milestones

**Prototype story:** Character creation; school and friend dialogue; realm switch; sword discovery; Strays and one specialty monster; Mistress Shade preview; a short consequence choice. Both initial mini-games playable and repeatable.

**Chapter 1:** Full school Nightwood map, Shadewalker mechanics, Howler encounter, Mistress Shade boss, Custodian reveal, choice about sharing the secret.

**Early saga expansion:** Warden, Unseen King, Nyxara, Maw, Astrix, Crown Council and their surrounding Homewood/Nightwood districts; more friend and romance quests; higher-tier modern skills.

This file is a **production-facing story bible**, not a statement that all narrative and enemy content has been implemented.