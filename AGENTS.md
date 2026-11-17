# NIGHTWOOD — Agent / Developer Instructions

This repository currently contains **design documentation only**. Do **not** claim a browser game exists or invent a deployed demo URL.

## Before writing production code

1. Read **docs/GAME_DESIGN_DOCUMENT.md** completely. It defines the player fantasy, feature priority, mini-game rules, MVP scope, and acceptance criteria.
2. Read **docs/STORY_AND_WORLD_BIBLE.md**. It defines Eli Ward, Nightwood High, Bellwether, the Veil, Strays, supporting characters, story beats, and continuity constraints.
3. Read **docs/DEVELOPMENT_HANDOFF.md**. It defines proposed code organization, state model, game events, mini-game contracts, and milestone gates.

When documents conflict, prefer GDD for game rules, Story Bible for story canon, and Development Handoff for suggested implementation. Record any deliberate change in a design-decision note.

## Project priorities

- First prove enjoyable **top-down movement**, **Bellwether sword combat**, and **real playable mini-games**.
- The **30-second activity** requirement is critical. Ghost Circuit (arcade) and Stacks 21 (library) are complete games within the RPG, not simulated XP buttons.
- Keep a real traversable world. Unlock **Phone → Places → Quick Visit** for venues already discovered, so a short play session isn't mostly travel.
- Respect the **normal student / secret protector** tension. Eli has school, friendship, and family responsibilities, but no mandatory real-world daily login or attendance timer.
- The developer experience must support iteration. Use clear rules/state/content boundaries, schema-versioned saves, deterministic tests, and a static build that deploys to Vercel.
- Keep the art budget low. Use **true top-down 2D**, coherent silhouettes, reusable tiles, code-generated effects; never mix isometric graphics into a side-view mockup.
- Don't use proprietary art, unverified asset licenses, pay-to-win mechanics, real-money gambling, or public teen chat as shortcuts.

## Build order

1. Scaffolding with a playable map and movement.
2. Sword strike, dodge, enemy telegraphs, damage and retry.
3. Ghost Circuit and Stacks 21, each with complete input, rules, feedback, scoring, and replay.
4. Save system, skill progression, rewards, inventory and Quick Visit.
5. Opening narrative: school day, friends, second bell, Bellwether discovery, first consequence.
6. Responsive, accessible UI, sound, QA, deployment.

**Do not** jump into full MMO infrastructure, a massive city map, dozens of skills, elaborate animation pipelines, accounts, or multiplayer before the initial slice passes playtesting.

## Implementation standards

- Keep game rules testable without a browser renderer.
- Write automated tests for both mini-game score systems and single-award save behavior.
- Make in-game action prompts obvious; show why XP, score, and combat damage happened.
- Implement usable desktop and touch mini-game controls from the start.
- Maintain a playable build at each major milestone.
- Never replace an enjoyable core loop with additional menus to disguise weak gameplay.
- If scope exceeds the MVP, record the request in a follow-up backlog instead of silently implementing it.

## Canonical names

Nightwood (city), Nightwood High (school), Eli Ward (protagonist), Bellwether (sword/key), the Veil (hidden layer), Strays (monsters), Mara Ortiz, Theo Brooks, Ms. Lena Park, Quarterlight Arcade, Ghost Circuit, Nightwood Public Library, Stacks 21.

## Current status

The design package is complete as a **preproduction handoff**. The actual RPG and mini-games are not implemented yet. The next deliverable is the vertical-slice build described in the three documents.
