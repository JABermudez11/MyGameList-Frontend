import React, { Component } from 'react'
import GameForm from '../components/GameForm'

export default class Game extends Component {

    state = {
        formClick: false,
        title: "",
        genre: "",
        rating: "",
        description: ""
    }    

    handleClick = () =>{
        this.setState({ formClick: !this.state.formClick})
    }

    handleSubmit = (e) => {
        e.preventDefault()

        console.log("submitted bruh")
        

    }

    handleChange = (e) => {
        // this.setState({
        //     [e.target.name]: e.target.value
        // })

        console.log(e.target.name)
    }

    render() {
        return (
            <div>
                <h1>Games Page</h1>                
                <button text="Add Game" onClick={this.handleClick}>Add Game</button>
                { this.state.formClick ? 
                <GameForm 
                handleSubmit={this.handleSubmit} 
                handleChange={this.handleChange} /> : 
                null }
            </div>
        )
    }
}
