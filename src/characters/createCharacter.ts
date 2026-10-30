import type { Character } from '../types/character'

export function createCharacter(): Character {
  return {
    id: crypto.randomUUID(),
    name: '',
    playerName: '',
    level: 1,
    ancestryId: null,
    cultureId: null,
    vocationId: null,
    notes: '',
  }
}
