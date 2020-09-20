import React from 'react'

const GamesForm = (props) => {
    const { handleSudmit, handleChange } = props;

    state = {
        title: "",
        genre: "",
        rating: "",
        description: ""
    }

    return(
        <form >
            <div>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value="title" />
                </div>

                <div>
                    <label>Genre:</label>
                    <input type="text" name="genre" value="genre" />
                </div>

                <div>
                    <label>Rating:</label>
                    <input type="Number" name="rating" value="rating" />
                </div>

                <div>
                    <label>Description:</label>
                    <textarea name="desc" value="desc" />
                </div>

                <input type="submit" value="submit" />
            </div>
        </form>
    )
}

export default GamesForm