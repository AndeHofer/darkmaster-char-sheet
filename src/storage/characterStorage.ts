import type { Character } from '../types/character'
import {normalizeCharacter} from '../characters/normalizeCharacter'

const CHARACTERS_STORAGE_KEY = 'darkmaster-character-sheet.characters'

export function loadCharacters(): Character[] {
    const storedCharacters = localStorage.getItem(CHARACTERS_STORAGE_KEY)
    if(storedCharacters === null){
        return [];
    }
    try {
        const parsed: unknown = JSON.parse(storedCharacters)

        if (!Array.isArray(parsed)) {
            return []
        }

        return parsed
            .map(normalizeCharacter)
            .filter((character): character is Character => character !== null)
    } catch (error) {
        console.error('Error parsing characters from local storage:', error)
        return []
    }
}

export function saveCharacters(characters: Character[]): void {
    localStorage.setItem(CHARACTERS_STORAGE_KEY, JSON.stringify(characters))
}