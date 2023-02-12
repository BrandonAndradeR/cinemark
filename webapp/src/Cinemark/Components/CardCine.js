import React from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

function CardCine( {color, Imagen, Titulo, Texto}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body variant={color}>
                    <Card.Title> {Titulo} </Card.Title>
                    <Card.Img src={Imagen} />
                    <Card.Text>
                    {Texto}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardCine
