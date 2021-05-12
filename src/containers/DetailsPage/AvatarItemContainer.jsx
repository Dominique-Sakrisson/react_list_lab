import React, {Component} from 'react';
import {getCharacterById} from '../../services/AvatarApi.js'
import Character from '../../components/app/Characters/Character.jsx'

export default class AvatarItemContainer extends Component {
    state ={
        loading: true,
        characters: [],
        id: '',
        name: '',
        image: '',
        affiliation: '',
        enemies: '',
    }
    async componentDidMount(){
        const character = await getCharacterById(this.props.match.params.id)
        this.setState({
            id: character._id,
            name: character.name,
            image: character.photoUrl,
            affiliation: character.affiliation,
            enemies: character.enemies,
            loading: false,
        });
    }
    
    render(){
        const {loading, name, image, affiliation, enemies} = this.state;
        if(loading) return <h1>Loading...</h1>
        return <Character name={name} image={image} affiliation={affiliation} enemies={enemies}/> 
    }
}
