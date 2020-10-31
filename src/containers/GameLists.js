import React, { Component } from 'react'
import GameCard from '../components/GameCard'

export default class GameLists extends Component {

    componentDidMount(){
        fetch("http://localhost:4000/games", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    renderGames = (games) => {
        if (games.length !== 0 ) {
            // games.map()
        }
    }

    render() {
        return (
            <div>
                <h1>List of Games</h1>
            </div>
        )
    }
}
