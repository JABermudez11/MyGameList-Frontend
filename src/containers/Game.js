import React, { Component } from 'react'
import GameForm from '../components/GameForm'

export default class Game extends Component {

    state = {
        formClick: false
    }

    handleClick = () =>{
        this.setState({ formClick: !this.state.formClick})
    }

    render() {
        return (
            <div>
                <h1>Games Page</h1>                
                <button text="Add Game" onClick={this.handleClick}>Add Game</button>
                { this.state.formClick ? <GameForm /> : null }
            </div>
        )
    }
}
