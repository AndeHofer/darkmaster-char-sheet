import type {Character, Stats} from '../types/character'

export function normalizeCharacter(value: unknown): Character | null {
    if(typeof value !== 'object' || value === null){
        return null
    }

    const record = value as Record<string, unknown>

    return  {
        id: typeof record.id === 'string' ? record.id : crypto.randomUUID(),
        name: typeof record.name === 'string' ? record.name : '',
        playerName: typeof record.playerName === 'string' ? record.playerName : '',
        level: isLevel(record.level) ? record.level : 1,
        stats: normalizeStats(record.stats),
        ancestryId: typeof record.ancestryId === 'string' ? record.ancestryId : null,
        cultureId: typeof record.cultureId === 'string' ? record.cultureId : null,
        vocationId: typeof record.vocationId === 'string' ? record.vocationId : null,
        notes: typeof record.notes === 'string' ? record.notes : '',
    }
}

function isLevel(value: unknown): value is number {
    return typeof value === 'number' && Number.isInteger(value) && value >= 1
}

function normalizeStats(value: unknown): Stats {
    const record = typeof value === 'object' && value !== null
        ? value as Record<string, unknown>
        : {}

    return {
        brawn: normalizeStatValue(record.brawn),
        swiftness: normalizeStatValue(record.swiftness),
        fortitude: normalizeStatValue(record.fortitude),
        wits: normalizeStatValue(record.wits),
        wisdom: normalizeStatValue(record.wisdom),
        bearing: normalizeStatValue(record.bearing),
    }
}

function normalizeStatValue(value: unknown): number {
    return typeof value === 'number' && Number.isInteger(value) ? value : 0
}