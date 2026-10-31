# MVP Specification

## Purpose

Build an unofficial, static, client-side character builder for *Against the
Darkmaster*. It must run without a custom backend and be deployable to GitHub
Pages.

Character data remains in the player's browser. The application supports a
German and English user interface. Source code, internal identifiers, and tests
use English.

## MVP Goals

The first usable version allows a player to:

- manage multiple characters locally in one browser;
- create, select, rename, and delete a character;
- enter a character name, player name, level, and notes;
- select ancestry, culture, and vocation from predefined options;
- enter stats;
- view the first automatically calculated derived values;
- switch the user interface between German and English.
- GitHub Pages deployment with a GitHub Actions workflow.

## Data and Rule Design

- Store player-entered values separately from calculated values.
- Keep game rules in pure TypeScript functions outside React components.
- Reuse one calculated character representation for the user interface and a
  future print or PDF export.
- Keep ancestry, culture, vocation, and other selectable game data separate
  from UI components.
- Add unit tests for every new or changed calculation rule.

## Local Storage

- Characters are automatically stored locally in the browser.
- The MVP supports multiple local characters.
- Characters can be exported to and imported from a JSON file for backup and transfer.

## Out of Scope

The following features are intentionally not part of the MVP:

- PDF generation, fillable PDF forms, and print-specific layouts;
- spells, talents, detailed skills, equipment, and inventory management;
- campaign management;
- accounts, authentication, databases, cloud synchronization, or other
  backend services;
- content from expansion books.

## Rulebook and Licensing

- A local, untracked rulebook copy may be used to verify terminology, rules,
  and calculation logic.
- Do not add substantial rulebook text, artwork, scans, or proprietary tables
  to the repository or published application.
- The published application must be clearly labelled as unofficial.

## Planned Implementation Order

1. Review the generated Vite project structure.
2. Define the initial character domain model without game-rule calculations.
3. Implement local management of multiple characters.
4. Add the language-switching foundation.
5. Identify the rulebook sections for attributes and derived values.
6. Implement one calculation rule at a time with tests.
7. Display calculated values in the character sheet UI.
8. Implement JSON export and import for character data.
9. Add GitHub Pages deployment with a GitHub Actions workflow.
