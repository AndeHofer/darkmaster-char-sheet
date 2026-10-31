export interface Stats {
  brawn: number
  swiftness: number
  fortitude: number
  wits: number
  wisdom: number
  bearing: number
}

export type StatKey = keyof Stats

export interface Character {
  id: string
  name: string
  playerName: string
  level: number
  stats: Stats
  ancestryId: string | null
  cultureId: string | null
  vocationId: string | null
  notes: string
}
