# Nightwood — Implementation Instructions

Read **docs/GAME_DESIGN_DOCUMENT.md**, **docs/STORY_AND_WORLD_BIBLE.md**, and **docs/DEVELOPMENT_HANDOFF.md** before creating new systems.

**Critical current canon:**
- Game name **Nightwood**; cozy real-world **Homewood** (fictionalized portrayal) is the city, and **Nightwood** is its shadow parallel realm. The separation is the **boundary**.
- No predefined protagonist name. Player picks **name** and **boy or girl**; consistently use chosen name and appropriate pronouns in UI, dialogue, and save.
- Signature permanent sword is **The Night Splitter**, discovered beneath the school auditorium.
- **The Custodians** monitor Nightwood.
- Regular monsters: **Strays** (weak, numerous), **Shadewalkers** (project shadows into Homewood), **Howlers** (sound tricks), **Feeders** (fear), **Nighthounds** (Feeder companions), **Crawlers** (wall climbers).
- Bosses planned: **Mistress Shade** (shadow school), **The Warden**, **The Unseen King**, **Nyxara**, **The Maw**, **Astrix**, **The Crown Council** (three bosses together).
- Optional school-age, nonsexual romance: **Mara** and **Jessa** (girls); **Theo** and **Adrian** (boys). Available to either boy/girl player; none are mandatory. No real minor portraits or real student identities.
- Gameplay target: contemporary RuneScape-style independent modern skills + **responsive top-down action sword/magic combat** + real repeatable arcade/library mini-games.
- Homewood feels bright, friendly, ordinary. Its Nightwood reflection should feel eerie using **reuse, lighting, shadows, sound and simple code FX** — not an enormous asset library.
- **30 seconds** is a standalone playable activity, not a chore button. Ghost Circuit and Stacks 21 must have real input, scoring, replay and saved rewards.
- First vertical slice: create character, walk at school, meet a peer, play a mini-game, discover Night Splitter, cross the boundary, fight Strays plus specialist, choose a response to a friend, save and resume. No compulsory daily login tasks.
- No MMO server, live trading/chat, enormous world, all-seven-boss requirement, or elaborate animation pipelines for MVP.

**Implementation discipline:** Maintain a working playable browser build at each checkpoint. Keep combat, XP, mini-games and saves in testable code. Keep the page above the fold; show movement and progression clearly. Accept touch for minigames and desktop for combat. State exactly what is implemented and what remains planned; never misrepresent design docs as a finished product.