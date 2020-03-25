import React from 'react'

// BASIC WELCOME & LANDING PAGE WITH USER MENU FOR OPTIONS


function Home() {
    return (
        <div className="home">
            <h1>Welcome</h1>
            <br />
            <br />
            <p>Navigate to the menu above and select a game</p>
            <p className="game">Cards</p>
            <p className="game">Converter</p>

        </div>
    )
}

export default Home
