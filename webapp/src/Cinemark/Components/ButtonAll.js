import React from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function ButtonAll({TamañoB, ColorB, TamañoL, Texto}) {
    return (
        <div>
            <Button size={TamañoB} variant={ColorB}><font size={TamañoL}>{Texto}</font></Button>
        </div>
    )
}

export default ButtonAll
