import React from 'react'
import PropTypes from 'prop-types';

const Character = ({name, image, affiliation, enemies}) => (
    <>
        <img src={image} alt={name}/>
        <p>character name is: {name}</p>
        <p>Affiliations are: {affiliation}</p>
        <p>Enemies are: {enemies}</p>
    </>
);

Character.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    enemies: PropTypes.array.isRequired
};

export default Character;
