import React from 'react'

import { GameCardStyles } from '../css/GameCardStyles';

const GameCard = (props) => {
    
    return (
        <GameCardStyles>
            {console.log(props)}
            <h1>{props.game.title}</h1>
            <h4>Genre: {props.game.genre}</h4>
            <p>{props.game.description}</p>
            <p>Game submitted by: N/a</p>            
            <button onClick={() => props.deleteGame(props.game._id)}>DELETE GAME</button>
        </GameCardStyles>
    )    
}

export default GameCard