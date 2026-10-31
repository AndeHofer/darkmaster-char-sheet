import {useEffect, useState} from 'react'
import {createCharacter} from './characters/createCharacter'
import {loadCharacters, saveCharacters} from './storage/characterStorage'
import {loadLanguage, saveLanguage} from './storage/languageStorage'
import type {Character} from './types/character'
import {translate, type Language, type TranslationKey} from './i18n/translations'
import './App.css'

function App() {
    const [characters, setCharacters] = useState<Character[]>(loadCharacters)
    const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(() => characters[0]?.id ?? null,)
    const [language, setLanguage] = useState<Language>(loadLanguage)
    const t = (key: TranslationKey, values?: Record<string, string>) => translate(language, key, values)

    useEffect(() => {saveCharacters(characters)}, [characters])

    useEffect(() => {saveLanguage(language)}, [language])

    const selectedCharacter =
        characters.find((character) => character.id === selectedCharacterId) ?? null

    function handleCreateCharacter() {
        const newCharacter = createCharacter()

        setCharacters((currentCharacters) => [...currentCharacters, newCharacter])
        setSelectedCharacterId(newCharacter.id)
    }

    function handleDeleteSelectedCharacter() {
        if (selectedCharacter === null) {
            return
        }
        const characterName = selectedCharacter.name || t('confirm.fallbackName')
        const shouldDelete = window.confirm(t('confirm.deleteCharacter', {name: characterName}))

        if (!shouldDelete) {
            return
        }
        const remainingCharacters = characters.filter(
            (character) => character.id !== selectedCharacter.id
        )

        setCharacters(remainingCharacters)
        setSelectedCharacterId(remainingCharacters[0]?.id ?? null)
    }

    function updateSelectedCharacter(changes: Partial<Character>) {
        if (selectedCharacter === null) {
            return
        }

        setCharacters((currentCharacters) =>
            currentCharacters.map((character) =>
                character.id === selectedCharacter.id
                    ? {...character, ...changes}
                    : character
            )
        )
    }

    function handleSelectedCharacterLevelChange(level: number) {
        if (!Number.isInteger(level) || level < 1) {
            return
        }

        updateSelectedCharacter({level})
    }

    return (
        <main className="app">
            <header className="app__header">
                <h1>{t('app.title')}</h1>
                <p>{t('app.subtitle')}</p>
                <div className="language-switch" role="group" aria-label={t('app.language')}>
                    <button
                        className="language-switch__button"
                        type="button"
                        aria-pressed={language === 'en'}
                        onClick={() => setLanguage('en')}
                    >
                        English
                    </button>
                    <button
                        className="language-switch__button"
                        type="button"
                        aria-pressed={language === 'de'}
                        onClick={() => setLanguage('de')}
                    >
                        Deutsch
                    </button>
                </div>
            </header>

            <button className="primary-button" type="button" onClick={handleCreateCharacter}>
                {t('app.createCharacter')}
            </button>

            {characters.length === 0 ? (
                <p>{t('app.noCharacters')}</p>
            ) : (
                <div className="character-workspace">
                    <section aria-labelledby="character-list-heading">
                        <h2 id="character-list-heading">{t('characterList.heading')}</h2>
                        <ul className="character-list">
                            {characters.map((character, index) => (
                                <li key={character.id}>
                                    <button
                                        className="character-list__button"
                                        type="button"
                                        aria-pressed={character.id === selectedCharacterId}
                                        onClick={() => setSelectedCharacterId(character.id)}
                                    >
                                        {character.name || `${t('characterList.fallbackName')} ${index + 1}`}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {selectedCharacter !== null && (
                        <section className="character-card" aria-labelledby="character-heading">
                            <h2 id="character-heading">{t('characterCard.heading')}</h2>
                            <dl>
                                <dt>{t('field.id')}</dt>
                                <dd>{selectedCharacter.id}</dd>
                                <dt>
                                    <label htmlFor="character-level">{t('field.level')}</label>
                                </dt>
                                <dd>
                                    <input
                                        id="character-level"
                                        className="character-name-input"
                                        type="number"
                                        min="1"
                                        step="1"
                                        value={selectedCharacter.level}
                                        onChange={(event) => handleSelectedCharacterLevelChange(Number(event.target.value))}
                                    />
                                </dd>
                                <dt>{t('field.name')}</dt>
                                <dd>
                                    <input
                                        className="character-name-input"
                                        type="text"
                                        value={selectedCharacter.name}
                                        onChange={(event) => updateSelectedCharacter({name: event.target.value})}
                                    />
                                </dd>
                                <dt>{t('field.playerName')}</dt>
                                <dd>
                                    <input
                                        className="character-name-input"
                                        type="text"
                                        value={selectedCharacter.playerName}
                                        onChange={(event) => updateSelectedCharacter({playerName: event.target.value})}
                                    />
                                </dd>
                                <dt>
                                    <label htmlFor="character-notes">{t('field.notes')}</label>
                                </dt>
                                <dd>
                                    <textarea
                                        id="character-notes"
                                        className="character-notes-input"
                                        value={selectedCharacter.notes}
                                        onChange={(event) => updateSelectedCharacter({notes: event.target.value})}
                                    />
                                </dd>
                            </dl>
                            <button className="delete-button" type="button" onClick={handleDeleteSelectedCharacter}>
                                {t('action.deleteCharacter')}
                            </button>
                        </section>
                    )}
                </div>
            )}
        </main>
    )
}

export default App
