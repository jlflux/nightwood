# NIGHTWOOD

**A modern-day, top-down supernatural RPG set between cozy Homewood and its shadow realm, Nightwood.**

**Status:** First playable, **asset-free browser prototype** committed to the repository. The full RPG/story and bosses are **planned**, not implemented.

## Play the current prototype

Open **index.html** in a browser (or deploy the repository as a static site to Vercel, selecting **Other** framework and no build command). No server, account, art assets or dependencies are needed to play. The game saves locally in the same browser; use **Export save** for a manual backup. The repository also has automated rule tests: **npm test** (requires Node 18+).

**Controls:** WASD / arrow keys or click-to-move; **E** to interact; in Nightwood, **Space** swings the Night Splitter, **F** sends out a magic Pulse, **Shift** dodges. Touch movement/action buttons are present on smaller screens. Visit an arcade or library hotspot to play, then use the unlocked **Arcade** or **Library** shortcut for future quick sessions.

**Implemented in the prototype:** chosen name + boy/girl + jacket color; an overhead Homewood map and Nightwood palette reflection; school/arcade/library/peer hotspots; sword discovery and travel between realms; stylized sword/magic combat; basic behaviors and silhouettes for all six monster species; a short Mistress Shade story teaser (not a boss battle); independent skill XP and profile; Ghost Circuit reflex game; Stacks 21 number-card mini-game; local saves, score records and export. The other bosses, full story, real interiors, deep crafting, cloud accounts and full relationship quests are **not yet implemented**.

**Known prototype limitations:** No pathfinding around buildings for mouse movement, simplified enemy attacks, placeholder-like hand-drawn art, no online multiplayer or synced profiles. This is meant to test whether exploration + combat + short games is fun before producing a larger game.

## The story

You create your own high school student: **choose a name, choose boy or girl, and customize your look**. Your hometown **Homewood** is comfortable and familiar — school, arcade, library, neighborhood, friends. But overlapping it is **Nightwood**, an eerie realm inhabited by monsters. At school you discover **The Night Splitter**, an ancient sword that lets you fight in Nightwood and protect Homewood while trying to live a normal teenage life.

The Custodians track the shadow realm and its breaches. The initial monster families are **Strays, Shadewalkers, Howlers, Feeders, Nighthounds, Crawlers**. Planned early bosses are **Mistress Shade, The Warden, The Unseen King, Nyxara, The Maw, Astrix**, and **The Crown Council** (three bosses in one fight). The first prototype does **not** contain all of this content.

## Why it should be fun for 30 seconds or 30 minutes

**30 seconds:** Stop at Quarterlight Arcade for Ghost Circuit or play Stacks 21 at the Homewood Public Library. Both are real, repeatable mini-games, not XP buttons.

**5 minutes:** Practice the Night Splitter, level a modern skill, complete a short errand or fight a small monster encounter.

**30 minutes:** Explore Homewood and Nightwood, investigate a mystery, meet friends, choose optional romance routes, gather and craft supplies, and clear a Nightwood zone.

Your character gains independent RuneScape-style levels in modern skills — Athletics, Gaming, Card Sense, Electronics, Research, First Aid, Scavenging, and many later additions — plus Bladecraft and magical techniques. Progress is persistent. No punishing real-world daily deadlines.

## Canonical documents

- [Full Game Design Document](docs/GAME_DESIGN_DOCUMENT.md) — full gameplay/loop, mini-games, skill systems, combat, art budget, UI and MVP boundaries.
- [Story & World Bible](docs/STORY_AND_WORLD_BIBLE.md) — definitive names, Homewood/Nightwood geography, monsters, bosses, the sword, Custodians, story acts and relationships.
- [Development & Technical Handoff](docs/DEVELOPMENT_HANDOFF.md) — suggested architecture, save contracts, system requirements, build milestones and tests.
- [AGENTS.md](AGENTS.md) — implementation instructions for coding agents.

**Canon priority:** GDD for mechanics, Story Bible for story/world/character canon, Technical Handoff for engineering. If older text still refers to pre-revision names, Story Bible v2 supersedes it. All student characters and supernatural incidents in Homewood are fictional.

## Scope and production standard

Browser-first, single-player initially, top-down action combat with code-driven effects and a minimal, consistent sprite/tile budget. Focus on enjoyable movement, sword combat, two mini-games, and a school-life decision before expanding. Online accounts and social leaderboards come later, after core gameplay is proven.

No source assets from proprietary games, no real-world gambling, and no sexual content featuring student characters.