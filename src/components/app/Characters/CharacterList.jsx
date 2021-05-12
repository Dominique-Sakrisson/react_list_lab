import React from 'react'
import PropTypes from 'prop-types'
import Character from './Character'

const CharacterList = ({characters}) => (
    <ul aria-label='characters'>
        {characters.map((character) => (
            <li key={`${character.id}${character.image}`}>
                <Character 
                    name={character.name}
                    image={character.image}
                    affiliation={character.affiliation}
                    enemies={character.enemies}   
                />
            </li>
        ))}
    </ul>
);

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            affiliation: PropTypes.string.isRequired,
            enemies: PropTypes.string.isRequired
        })
    ).isRequired
};

export default CharacterList;
