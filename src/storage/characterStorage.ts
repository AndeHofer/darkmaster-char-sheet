import type { Character } from '../types/character'

const CHARACTERS_STORAGE_KEY = 'darkmaster-character-sheet.characters'

export function loadCharacters(): Character[] {
    const storedCharacters = localStorage.getItem(CHARACTERS_STORAGE_KEY)
    if(storedCharacters === null){
        return [];
    }
    try {
        return JSON.parse(storedCharacters) as Character[]
    } catch (error) {
        console.error('Error parsing characters from local storage:', error)
        return []
    }
}

export function saveCharacters(characters: Character[]): void {
    localStorage.setItem(CHARACTERS_STORAGE_KEY, JSON.stringify(characters))
}