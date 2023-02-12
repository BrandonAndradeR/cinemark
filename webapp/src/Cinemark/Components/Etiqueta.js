import React from 'react'

function Etiqueta({Tamaño, refe, texto}) {
    return (
        <div>
            <a href={refe}>
            <font size={Tamaño}>{texto}</font>
            </a>
        </div>
    )
}

export default Etiqueta
