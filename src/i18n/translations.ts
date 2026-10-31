const en = {
    'app.title': 'Character Builder',
    'app.subtitle': 'Create a character to verify the first domain model.',
    'app.language': 'Language',
    'app.createCharacter': 'Create character',
    'app.noCharacters': 'No character has been created yet.',
    'characterList.heading': 'Characters',
    'characterList.fallbackName': 'Character',
    'characterCard.heading': 'Selected character',
    'field.id': 'ID',
    'field.level': 'Level',
    'field.name': 'Name',
    'field.playerName': 'Player name',
    'field.notes': 'Notes',
    'action.deleteCharacter': 'Delete character',
    'confirm.deleteCharacter': 'Delete {name}?',
    'confirm.fallbackName': 'this character',
} as const

export type Language = 'en' | 'de'

export type TranslationKey = keyof typeof en

const de: Record<TranslationKey, string> = {
    'app.title': 'Charakter Builder',
    'app.subtitle': 'Erstelle einen Charakter, um das erste Datenmodell zu prüfen.',
    'app.language': 'Sprache',
    'app.createCharacter': 'Charakter erstellen',
    'app.noCharacters': 'Es wurde noch kein Charakter erstellt.',
    'characterList.heading': 'Charaktere',
    'characterList.fallbackName': 'Charakter',
    'characterCard.heading': 'Ausgewählter Charakter',
    'field.id': 'ID',
    'field.level': 'Stufe',
    'field.name': 'Name',
    'field.playerName': 'Spielername',
    'field.notes': 'Notizen',
    'action.deleteCharacter': 'Charakter löschen',
    'confirm.deleteCharacter': '{name} löschen?',
    'confirm.fallbackName': 'diesen Charakter',
}

const tables: Record<Language, Record<TranslationKey, string>> = {en, de}

export function translate(
    language: Language,
    key: TranslationKey,
    values?: Record<string, string>,
): string {
    const template = tables[language][key]

    if (values === undefined) {
        return template
    }

    return Object.entries(values).reduce(
        (result, [name, value]) => result.replaceAll(`{${name}}`, value),
        template,
    )
}