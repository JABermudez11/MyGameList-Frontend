import React from 'react'

const GamesForm = (props) => {

    const { handleSubmit, handleChange } = props;


    return(
        <form onSubmit={handleSubmit} >
            <div>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={handleChange} />
                </div>

                <div>
                    <label>Genre:</label>
                    <input type="text" name="genre" onChange={handleChange} />
                </div>

                <div>
                    <label>Rating:</label>
                    <input type="Number" name="rating" onChange={handleChange} />
                </div>

                <div>
                    <label>Description:</label>
                    <textarea name="desc" onChange={handleChange} />
                </div>

                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default GamesForm