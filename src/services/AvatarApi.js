export const getCharacters = async() => {
    const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
    const data = await res.json();

    return data.map(character => ({
        id: character.id,
        name: character.name,
        image: character.photoUrl,
        affiliation: character.affiliation,
        enemies: character.enemies
    }))
}
