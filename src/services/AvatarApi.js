export const getCharacters = async() => {
    const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
    const data = await res.json();

    return data.map(character => ({
        id: character._id,
        name: character.name,
        image: character.photoUrl,
        affiliation: character.affiliation,
        enemies: character.enemies
    }))
}

export const getCharacterById= async(id) => {
    const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
    const character = await res.json();

    return {
        id: character._id,
        name: character.name,
        image: character.photoUrl,
        affiliation: character.affiliation,
        enemies: character.enemies
    };
}
