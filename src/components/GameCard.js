import React from 'react'

const GameCard = (props) => {
    
    return (
        <div>
            {console.log(props)}
            <h1>{props.game.title}</h1>
            <p>{props.game.description}</p>
            <button onClick={() => props.deleteGame(props.game._id)}>DELETE GAME</button>
        </div>
    )    
}

export default GameCard