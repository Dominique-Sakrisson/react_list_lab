import React from 'react'
import PropTypes from 'prop-types'
import Character from './Character.jsx'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const CharacterList = ({characters}) => (
    <ul aria-label='characters'>
        {characters.map((character) => (
            <li key={`${character.id}${character.image}`}>
                <Link to={`/${character.id}`}>
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
            enemies: PropTypes.array.isRequired
        })
    ).isRequired
};

export default CharacterList;
