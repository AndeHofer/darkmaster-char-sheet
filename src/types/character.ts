export interface Attributes {
  agility: number
  intellect: number
  constitution: number
  presence: number
  strength: number
  wisdom: number
}

export type AttributeKey = keyof Attributes

export interface Character {
  id: string
  name: string
  playerName: string
  level: number
  attributes: Attributes
  ancestryId: string | null
  cultureId: string | null
  vocationId: string | null
  notes: string
}
