import React from 'react'

const GamesForm = () => {
    return(
        <form >
            <div>
                <div>
                    <label>Game Title:</label>
                    <input type="text" name="title" />
                </div>

                <div>
                    <label>Game Genre:</label>
                    <input type="text" name="genre" />
                </div>

                <div>
                    <label>Game Rating:</label>
                    <input type="Number" name="rating" />
                </div>
                
                <input type="submit" value="submit" />
            </div>
        </form>
    )
}

export default GamesForm