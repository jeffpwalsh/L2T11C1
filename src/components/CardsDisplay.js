import React from 'react'
import { Row } from 'react-bootstrap'
import CardPack from './CardPack'


function CardsDisplay() {

    
    return (
        <div>
            <h1>Card Game</h1>
            <Row>
            <CardPack /> 
            </Row>      
        </div>
    )
}

export default CardsDisplay
