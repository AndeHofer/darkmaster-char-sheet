# Progress

## Done

- Created the React, TypeScript, and Vite project.
- Defined the initial MVP scope.
- Added the versioned MVP specification in `docs/mvp-spec.md`.
- Reviewed the generated Vite, React, TypeScript, and ESLint project structure.
- Attempted the initial build and lint checks; both are blocked because project dependencies are not installed yet.
- Attempted to install dependencies; npm reported a TypeScript and typescript-eslint peer-dependency conflict.
- Updated the TypeScript development dependency from 7.0.2 to 6.0.3 because the configured typescript-eslint version supports TypeScript below 6.1.
- Installed project dependencies successfully; npm reported no known vulnerabilities.
- Confirmed that the generated project builds successfully and passes ESLint.
- Added the initial `Character` TypeScript interface for player-entered character data.
- Confirmed that the character model passes the TypeScript build and ESLint checks.
- Added the `createCharacter` factory for new characters with safe initial values and browser-generated unique IDs.
- Confirmed that the character factory passes the TypeScript build and ESLint checks.
- Replaced the Vite demo with a minimal React screen that creates and displays one character in memory.
- Confirmed that the minimal React character screen passes the TypeScript build and ESLint checks.
- Added in-memory creation, listing, and selection of multiple characters.
- Confirmed that the multi-character screen passes the TypeScript build and ESLint checks.
- Added browser-local character storage and automatic saving after character-list changes; validation is still pending.
- Configured the application to select the first stored character when it loads; validation is still pending.
- Added deletion of the selected character with a browser confirmation and fallback selection; validation is still pending.
- Added editable selected-character names; validation is still pending.
- Removed the obsolete Vite `#root` layout rule, which fixed layout shifting when selecting a character.
- Added editable player names for the selected character; validation is still pending.
- Added editable multi-line notes for the selected character; validation is still pending.
- Added editable level with integer validation for the selected character; validation is still pending.
- Extracted the repeated single-character update logic into one `updateSelectedCharacter` helper.
- Added English and German translation tables plus a `translate` helper with placeholder support.
- Wired the language switch into the interface and persisted the chosen language in `localStorage`; validation is still pending.
- Added normalization of stored characters on load, which removes unknown legacy keys.
- Added browser-language detection as the initial default when no language is stored.
- Verified the attribute and derived-value rules in the local rulebook (chapter 2, PDF pages 13-14; chapter 8, PDF pages 93-94).
- Confirmed the six attributes: agility (GE), intellect (IN), constitution (KO), presence (PR), strength (ST), wisdom (WE).
- Confirmed the point-buy method: 50 points in steps of 5, each attribute between 0 and 25.
- Confirmed derived values: defense = max(agility, 0); toughness save = constitution + 5; willpower save = wisdom + 5; movement 15 with an optional agility-based variant.

## Next

- Verify the local storage integration with lint, build, and a browser refresh.
- Add the six attributes to the character model, factory, and normalization.
- Add attribute editing to the character sheet UI.
- Add unit tests for the first derived-value calculations.
- Split the growing `App.tsx` into focused components.
- Add ancestry, culture, and vocation selection from predefined data.
- Add ancestry, culture, and vocation selection from predefined data.

## Blockers

- The rulebook PDF is available locally, but the relevant pages for attributes and derived values still need to be identified.
