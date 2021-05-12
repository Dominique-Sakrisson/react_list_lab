import React, {Component} from 'react';
import {getCharacters} from '../../services/AvatarApi.js'
import CharacterList from '../../components/app/Characters/CharacterList.jsx'

export default class AvatarContainer extends Component {
    state ={
        loading: true,
        characters: []
    }
    
    async componentDidMount(){
        const characters = await getCharacters();
        this.setState({
            characters,
            loading: false,
        });
    }
    
    render(){
        const {loading, characters} = this.state;
        if(loading) return <h1>Loading...</h1>
        return <CharacterList characters={characters}/>
        //  (loading ? <h1>Loading...</h1> : <CharacterList characters={characters}/>) 
    }
}
