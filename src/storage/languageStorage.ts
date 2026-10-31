import type {Language} from '../i18n/translations'

const LANGUAGE_STORAGE_KEY = 'darkmaster-character-sheet.language'

function detectLanguage(): Language {
    return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en'
}

export function loadLanguage(): Language {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)

    if (storedLanguage === 'en' || storedLanguage === 'de') {
        return storedLanguage
    }

    return detectLanguage()
}

export function saveLanguage(language: Language): void {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
}