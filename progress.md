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

## Next

- Verify the local storage integration with lint, build, and a browser refresh.
- Add editing for the selected character's name.

## Blockers

- The rulebook PDF is available locally, but the relevant pages for attributes and derived values still need to be identified.
