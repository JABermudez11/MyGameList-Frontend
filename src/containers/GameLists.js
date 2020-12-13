import React, { Component } from 'react'
import GameCard from '../components/GameCard'
import { Container } from '../css/GameListsStyles'

export default class GameLists extends Component {    
    
    render() {
        
        return (
            <Container>
                {this.props.games.map(game => <GameCard key={game._id} game={game} deleteGame={this.props.deleteGame} />)}
            </Container>
        )
    }
}
