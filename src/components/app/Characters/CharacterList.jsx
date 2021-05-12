import React from 'react'
import PropTypes from 'prop-types'
import Character from './Character.jsx'
import {Link} from 'react-router-dom';

const CharacterList = ({characters}) => (
    <ul aria-label='characters'>
        {characters.map((character) => (
            <li key={`${character.id}${character.image}`}>
                {/* insert a wrapper here thats a link to the deatils page for the character with {character.id} */}
{console.log(character.id)}
                <Link exact to={`/${character.id}`}>
                    <Character 
                        name={character.name}
                        image={character.image}
                        affiliation={character.affiliation}
                        enemies={character.enemies}   
                    />
                </Link>
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
