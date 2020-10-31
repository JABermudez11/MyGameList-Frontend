import React, { Component } from 'react'
import GameCard from '../components/GameCard'

export default class GameLists extends Component {

    state = {
        listOfGames: []
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
        .then(games => this.setState({listOfGames: games}))
        
    }
        

    render() {
        return (
            <div>
                <h1>List of Games</h1>                
            </div>
        )
    }
}
