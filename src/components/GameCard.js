import React from 'react'

import { GameCardStyles, GameCardButton } from '../css/GameCardStyles';

const GameCard = (props) => {
    
    return (
        <GameCardStyles>
            {console.log(props)}
            <h1>{props.game.title}</h1>
            <h4>Genre: {props.game.genre}</h4>
            <p>{props.game.description}</p>
            <p>Game submitted by: N/a</p>            
            <GameCardButton onClick={() => props.deleteGame(props.game._id)}>DELETE GAME</GameCardButton>
        </GameCardStyles>
    )    
}

export default GameCard