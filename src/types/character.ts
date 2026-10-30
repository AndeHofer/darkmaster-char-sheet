export interface Character {
  id: string
  name: string
  playerName: string
  level: number
  ancestryId: string | null
  cultureId: string | null
  vocationId: string | null
  notes: string
}
