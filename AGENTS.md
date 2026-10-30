# Instructions

## Project

- This is a static, client-side character builder for *Against the Darkmaster*.
- It must work without a custom backend and be deployable to GitHub Pages.
- Keep user character data local to the browser unless a feature explicitly requires otherwise.
- Do not add authentication, a database, server-side code, or paid cloud services without explicit approval.
- The language for the user should be choosable between English and German.
- The language used in code is strictly English.

## Technology

- Use React, TypeScript, and Vite.
- Prefer simple, well-maintained browser-compatible libraries.
- Keep dependencies minimal. Ask before adding a large UI framework or a dependency that introduces a backend.
- Do not edit generated files or dependency folders such as `node_modules/` or `dist/`.

## Architecture

- Keep game rules and character calculations independent of React components.
- Put pure calculation logic in `src/rules/`.
- Put game data such as ancestries, cultures, vocations, and equipment in `src/data/`.
- Keep React components focused on presentation and user interaction.
- Reuse the same calculated character data for the UI, print view, and PDF export.
- Prefer explicit TypeScript types for all character data and game-rule inputs.

## Learning and collaboration

- The user is learning the project's technologies while building this application.
- Break implementation work into small, independently reviewable steps.
- Before making a non-trivial implementation change, briefly explain:
  - what will be changed,
  - which technology or concept is involved,
  - why this approach was chosen.
- After each completed step, explain what changed and how the relevant code works.
- Prefer clear, idiomatic, and readable code over clever or overly condensed solutions.
- Introduce new libraries, React concepts, TypeScript features, build configuration, or testing tools gradually.
- When adding a dependency, explain its purpose, alternatives considered, and how it is used.
- Do not make several unrelated architectural changes in one step unless the user explicitly asks for it.
- Invite the user to review each step and ask questions before continuing with the next significant step.

## Collaborative editing workflow

- The user applies all application-code, configuration, style, and documentation changes personally.
- Do not modify project files directly, except for maintaining `progress.md`.
- For each implementation step, provide only:
  - the target file path,
  - the exact code to add, replace, or remove,
  - a short explanation of the change,
  - relevant validation commands.
- Keep each proposed change small and independently reviewable.
- Wait for the user to confirm that a change was applied before proposing the next implementation step.
- Unless explicitly asked otherwise, do not install dependencies, run commands that modify files, or reformat code.
- The user runs validation commands and reports the results. Update `progress.md` after verifying the current project state.

## Quality

- Add unit tests for new or changed game-rule calculations.
- Keep calculation functions deterministic and free of browser or React dependencies.
- Run the relevant checks before stating that work is complete:
    - tests,
    - TypeScript type check,
    - production build.
- Remove unused imports and dead code.
- Do not suppress TypeScript or lint errors without explaining why.

## Git and safety

- Do not commit, push, create branches, reset, rebase, or discard existing user changes.
- Git commands are for inspection only unless the user explicitly requests a Git operation.
- Do not overwrite or delete user-authored files without explicit approval.

## Content and licensing

- A local, untracked copy of the *Against the Darkmaster* rulebook may be available in `reference/`.
- Use it as the primary source for verifying game rules, terminology, and calculation logic.
- Do not copy substantial rulebook text, artwork, scans, or proprietary tables into the repository or published application.
- Keep the project clearly labelled as unofficial if it references *Against the Darkmaster*.
- Prefer original text, user-entered values, or data structures that do not reproduce protected material.
- 
## Documentation

- Document your progress and decisions in `progress.md`. If this file becomes longer than 100 lines, move older finished
  entries to `progress_archive.md`.


