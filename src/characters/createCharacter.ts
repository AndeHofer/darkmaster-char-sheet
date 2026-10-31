import type {Character} from '../types/character'

export function createCharacter(): Character {
  return {
    id: crypto.randomUUID(),
    name: '',
    playerName: '',
    level: 1,
    stats: {
      brawn: 0,
      swiftness: 0,
      fortitude: 0,
      wits: 0,
      wisdom: 0,
      bearing: 0,
    },
    ancestryId: null,
    cultureId: null,
    vocationId: null,
    notes: '',
  }
}
