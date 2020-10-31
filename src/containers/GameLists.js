import React, { Component } from 'react'
import GameCard from '../components/GameCard'

export default class GameLists extends Component {    
    render() {
        const { games } = this.props

        return (
            <div>
                <h1>List of Games</h1>
                {games.map(game => <GameCard key={game._id} game={game} />)}                
            </div>
        )
    }
}
