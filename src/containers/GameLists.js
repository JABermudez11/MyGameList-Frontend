import React, { Component } from 'react'
import GameCard from '../components/GameCard'
import gameLists from '../css/gameLists.css'

export default class GameLists extends Component {    
    
    
    render() {
        
        return (
            <div className="gameLists">                
                {this.props.games.map(game => <GameCard key={game._id} game={game} deleteGame={this.props.deleteGame} />)}
            </div>
        )
    }
}
