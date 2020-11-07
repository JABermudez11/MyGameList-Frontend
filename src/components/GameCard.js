import React from 'react'

const GameCard = (props) => {
    
    return (
        <div>
            {console.log(props)}
            <h1>{props.game.title}</h1>
            <p>{props.game.description}</p>
        </div>
    )    
}

export default GameCard