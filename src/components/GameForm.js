import React from 'react'

import { StyledContainerForm } from '../css/GameFormStyles'

const GamesForm = (props) => {

    const { handleSubmit, handleChange } = props;


    return(
        <form onSubmit={handleSubmit} >
            <StyledContainerForm>
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
                    <textarea name="description" onChange={handleChange} />
                </div>

                <button type="submit">Submit</button>
            </StyledContainerForm>
        </form>
    )
}

export default GamesForm