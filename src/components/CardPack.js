import React from 'react'
import { Card, Row, Button } from 'react-bootstrap'
import { useState } from 'react'


function CardPack() {

    //STATE SET VIA HOOKS

    let cardPicStandard = "https://opengameart.org/sites/default/files/card%20back%20red.png"
    let cardPicWin = "https://i.pinimg.com/564x/12/04/e1/1204e1f1b0833cdee4bf1403a01f96b6.jpg"
    let cardPicLose = "https://i.pinimg.com/originals/e7/fc/fc/e7fcfc21f98f2f179d420a8b2a8122b6.jpg"

    const [cardOne, setCardOne] = useState(cardPicStandard)
    const [cardTwo, setCardTwo] = useState(cardPicStandard)
    const [cardThree, setCardThree] = useState(cardPicStandard)
    const [userValue, setUserValue] = useState(0)
    const [winOutput, setWinOutput] = useState("")
    const [loseOutput, setLoseOutput] = useState("")

    // RANDOM CARD STATE SET
    const [cardJoker, setCardJoker] = useState(Math.floor((Math.random() * 3) + 1))

    // IF ELSE IF CONDITIONAL FUNCTION WITH SETSTATE ACTIVITY
    const handleCardClickOne = () => {

        setUserValue(1)

        if (cardJoker != 2 && cardJoker != 3) {

            setCardOne(cardPicWin)
            setCardTwo(cardPicLose)
            setCardThree(cardPicLose)
            setWinOutput("You guessed correctly")

        } else if (cardJoker != 1 && cardJoker != 3) {

            setCardOne(cardPicLose)
            setCardTwo(cardPicWin)
            setCardThree(cardPicLose)
            setLoseOutput("Sorry, the correct card was number " + cardJoker)

        } else {

            setCardOne(cardPicLose)
            setCardTwo(cardPicLose)
            setCardThree(cardPicWin)
            setLoseOutput("Sorry, the correct card was number " + cardJoker)

        }
    }

    // IF ELSE IF CONDITIONAL FUNCTION WITH SETSTATE ACTIVITY    
    const handleCardClickTwo = () => {

        setUserValue(2)

        if (cardJoker != 1 && cardJoker != 3) {

            setCardOne(cardPicLose)
            setCardTwo(cardPicWin)
            setCardThree(cardPicLose)
            setWinOutput("You guessed correctly")

        } else if (cardJoker != 2 && cardJoker != 3) {

            setCardOne(cardPicWin)
            setCardTwo(cardPicLose)
            setCardThree(cardPicLose)
            setLoseOutput("Sorry, the correct card was number " + cardJoker)

        } else {

            setCardOne(cardPicLose)
            setCardTwo(cardPicLose)
            setCardThree(cardPicWin)
            setLoseOutput("Sorry, the correct card was number " + cardJoker)

        }
    }

    // IF ELSE IF CONDITIONAL FUNCTION WITH SETSTATE ACTIVITY

    const handleCardClickThree = () => {

        setUserValue(3)

        if (cardJoker != 1 && cardJoker != 2) {

            setCardOne(cardPicLose)
            setCardTwo(cardPicLose)
            setCardThree(cardPicWin)
            setWinOutput("You guessed correctly")

        } else if (cardJoker != 2 && cardJoker != 3) {

            setCardOne(cardPicWin)
            setCardTwo(cardPicLose)
            setCardThree(cardPicLose)
            setLoseOutput("Sorry, the correct card was number " + cardJoker)

        } else {

            setCardOne(cardPicLose)
            setCardTwo(cardPicWin)
            setCardThree(cardPicLose)
            setLoseOutput("Sorry, the correct card was number " + cardJoker)

        }
    }

    return (
        <div>
            <p>Guess which card is the the Joker</p>

            <Row>

                <Card className="cards" onClick={handleCardClickOne}><img src={cardOne} alt="card" /></Card>
                <Card className="cards" onClick={handleCardClickTwo}><img src={cardTwo} alt="card" /></Card>
                <Card className="cards" onClick={handleCardClickThree}><img src={cardThree} alt="card" /></Card>

            </Row>

            <h1>{winOutput}</h1>
            <h1>{loseOutput}</h1>

            <Button onClick={() => window.location.reload(false)}>Click to restart</Button>

        </div>
    )

}
export default CardPack
