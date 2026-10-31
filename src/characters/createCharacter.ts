import type { Character } from '../types/character'

export function createCharacter(): Character {
  return {
    id: crypto.randomUUID(),
    name: '',
    playerName: '',
    level: 1,
    attributes: {
      agility: 0,
      intellect: 0,
      constitution: 0,
      presence: 0,
      strength: 0,
      wisdom: 0,
    },
    ancestryId: null,
    cultureId: null,
    vocationId: null,
    notes: '',
  }
}
