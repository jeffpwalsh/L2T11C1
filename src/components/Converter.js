import React from 'react'
//BOOTSTRAP IMPORT
import { useState } from 'react'
import { Button} from "react-bootstrap"



function Converter() {

    // STATE VIA HOOKS
    const [amount, setAmount] = useState(0)

    // CONVERTS STATE OUTPUT
    let dollar = amount * 0.07;
    let pound = amount * 0.05;
    let euro = amount * 0.06;


    return (
        <div>
            <h1>Currency Converter</h1>
            <label>Enter ZAR Amount to be converted</label>
            <br />
            {/* USER INPUT CAPTURING */}
            <input type="text" placeholder="ZAR" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <p>Dollars $ {dollar.toFixed(2)}</p>
            <p>Pounds & {pound.toFixed(2)}</p>
            <p>Euros E {euro.toFixed(2)}</p>
            <b />
            <Button onClick={() => window.location.reload(false)}>Click to reset</Button>
        </div>
    )

}
export default Converter
