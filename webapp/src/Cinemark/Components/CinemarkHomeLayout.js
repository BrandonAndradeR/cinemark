import React from 'react'
import BarraNotifi from './BarraNotifi'
import BodyCine from './BodyCine'
import Carrusel from './Carrusel'
import Navbar from './Navbar'
import NavCiudad from './NavCiudad'


function CinemarkHomeLayout() {
    return (
        <div>
            <BarraNotifi/>
            <Navbar/>
            <Carrusel/>
            <NavCiudad/>
            <BodyCine/>
        </div>
    )
}

export default CinemarkHomeLayout
