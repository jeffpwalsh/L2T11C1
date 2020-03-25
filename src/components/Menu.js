import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

function Menu() {
    return (
        

            <DropdownButton id="dropdown-basic-button" title="Menu">
                <Dropdown.Item href="/cards" className="Option">Play Cards</Dropdown.Item>
                <Dropdown.Item href="/converter" className="Option">Convert Currency</Dropdown.Item>
                <Dropdown.Item href="/" className="Option">Home/Exit</Dropdown.Item>
            </DropdownButton>
        
    )
}
export default Menu
