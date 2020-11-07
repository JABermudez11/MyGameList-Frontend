import React, { Component } from 'react'
import GameForm from '../components/GameForm'
import GameList from '../containers/GameLists'

export default class Game extends Component {

    state = {
        formClick: false,
        title: "",
        genre: "",
        rating: "",
        description: "",
        games: []
    } 
    
    componentDidMount(){
        fetch("http://localhost:4000/games", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
        .then(res => res.json())
        .then(games => this.setState({games}))

    }

    handleClick = () =>{
        this.setState({ formClick: !this.state.formClick})
    }

    handleSubmit = (e) => {
        e.preventDefault()

        // post new games
        fetch('http://localhost:4000/games', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                genre: this.state.genre,
                rating: this.state.rating,
                description: this.state.description
            })
        })
        .then(response => response.json())
        .then(response => console.log('submitted new game'))       
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })      
        console.log(e.target.name)
    }

    deleteGame = (gameId) => {
        fetch(`http://localhost:4000/games/${gameId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })   
        
        const currGames = this.state.games.filter(g => g._id !== gameId)
        this.setState({
            games: currGames
        })
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

                <GameList games={this.state.games} deleteGame={this.deleteGame} />                
            </div>
        )
    }
}
