import {useEffect, useState} from 'react'
import {createCharacter} from './characters/createCharacter'
import {loadCharacters, saveCharacters} from './storage/characterStorage'
import type {Character} from './types/character'
import './App.css'

function App() {
    const [characters, setCharacters] = useState<Character[]>(loadCharacters)
    const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(() => characters[0]?.id ?? null,)

    useEffect(() => {
        saveCharacters(characters)
    }, [characters])

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
        const characterName = selectedCharacter.name || 'this character'
        const shouldDelete = window.confirm(`Delete ${characterName}?`)

        if (!shouldDelete) {
            return
        }
        const remainingCharacters = characters.filter(
            (character) => character.id !== selectedCharacter.id
        )

        setCharacters(remainingCharacters)
        setSelectedCharacterId(remainingCharacters[0]?.id ?? null)
    }

    function handleSelectedCharacterNameChange(name: string) {
        if (selectedCharacter === null) {
            return
        }

        setCharacters((currentCharacters) =>
            currentCharacters.map((character) =>
                character.id === selectedCharacter.id
                    ? {...character, name}
                    : character))
    }

    return (
        <main className="app">
            <header className="app__header">
                <h1>Character Builder</h1>
                <p>Create a character to verify the first domain model.</p>
            </header>

            <button className="primary-button" type="button" onClick={handleCreateCharacter}>
                Create character
            </button>

            {characters.length === 0 ? (
                <p>No character has been created yet.</p>
            ) : (
                <div className="character-workspace">
                    <section aria-labelledby="character-list-heading">
                        <h2 id="character-list-heading">Characters</h2>
                        <ul className="character-list">
                            {characters.map((character, index) => (
                                <li key={character.id}>
                                    <button
                                        className="character-list__button"
                                        type="button"
                                        aria-pressed={character.id === selectedCharacterId}
                                        onClick={() => setSelectedCharacterId(character.id)}
                                    >
                                        {character.name || `Character ${index + 1}`}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {selectedCharacter !== null && (
                        <section className="character-card" aria-labelledby="character-heading">
                            <h2 id="character-heading">Selected character</h2>
                            <dl>
                                <dt>ID</dt>
                                <dd>{selectedCharacter.id}</dd>
                                <dt>Level</dt>
                                <dd>{selectedCharacter.level}</dd>
                                <dt>Name</dt>
                                <dd>
                                    <input
                                        className="characer-name-input"
                                        type="text"
                                        value={selectedCharacter.name}
                                        onChange={(event) => handleSelectedCharacterNameChange(event.target.value)}
                                    />
                                </dd>
                            </dl>
                            <button className="delete-button" type="button" onClick={handleDeleteSelectedCharacter}>
                                Delete character
                            </button>
                        </section>
                    )}
                </div>
            )}
        </main>
    )
}

export default App
