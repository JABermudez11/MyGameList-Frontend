import React from 'react'

const GamesForm = () => {
    return(
        <form >
            <div>
                <label>Game Title:</label>
                <input type="text" name="title" />
                <input type="submit" value="submit" />
            </div>
        </form>
    )
}

export default GamesForm