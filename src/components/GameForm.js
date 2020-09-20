import React from 'react'

const GamesForm = (props) => {
    const { handleSudmit, handleChange } = props;

    return(
        <form >
            <div>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" />
                </div>

                <div>
                    <label>Genre:</label>
                    <input type="text" name="genre" />
                </div>

                <div>
                    <label>Rating:</label>
                    <input type="Number" name="rating" />
                </div>

                <div>
                    <label>Description:</label>
                    <textarea name="desc" />
                </div>

                <input type="submit" value="submit" />
            </div>
        </form>
    )
}

export default GamesForm