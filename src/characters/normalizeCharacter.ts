import type {Attributes, Character} from '../types/character'

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
        attributes: normalizeAttributes(record.attributes),
        ancestryId: typeof record.ancestryId === 'string' ? record.ancestryId : null,
        cultureId: typeof record.cultureId === 'string' ? record.cultureId : null,
        vocationId: typeof record.vocationId === 'string' ? record.vocationId : null,
        notes: typeof record.notes === 'string' ? record.notes : '',
    }
}

function isLevel(value: unknown): value is number {
    return typeof value === 'number' && Number.isInteger(value) && value >= 1
}

function normalizeAttributes(value: unknown): Attributes {
    const record = typeof value === 'object' && value !== null
        ? value as Record<string, unknown>
        : {}

    return {
        agility: normalizeAttributeValue(record.agility),
        intellect: normalizeAttributeValue(record.intellect),
        constitution: normalizeAttributeValue(record.constitution),
        presence: normalizeAttributeValue(record.presence),
        strength: normalizeAttributeValue(record.strength),
        wisdom: normalizeAttributeValue(record.wisdom),
    }
}

function normalizeAttributeValue(value: unknown): number {
    return typeof value === 'number' && Number.isInteger(value) ? value : 0
}