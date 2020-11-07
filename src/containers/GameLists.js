import React, { Component } from 'react'
import GameCard from '../components/GameCard'

export default class GameLists extends Component {    
    
    
    render() {
        // const { games } = this.props

        // console.log(games)

        return (
            <div>
                <h1>List of Games</h1>
                {this.props.games.map(game => <GameCard key={game._id} game={game} deleteGame={this.props.deleteGame} />)}
            </div>
        )
    }
}
