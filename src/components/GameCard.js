import React from 'react'

const GameCard = (props) => {
    
    return (
        <div>
            {console.log(props)}
            <h1>{props.game.title}</h1>
            
        </div>
    )    
}

export default GameCard