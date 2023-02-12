import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ButtonAll from './ButtonAll';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrusel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://assets.cinemark-core.com/5db771be04daec00076df3f5/content/covers/6154f64d2afa1500089774b8/desktop/venom-preventa-1633633652277.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <ButtonAll TamañoB='sm' ColorB='danger' TamañoL='1' Texto='MÁS INFORMACIÓN'/>             
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://assets.cinemark-core.com/5db771be04daec00076df3f5/content/covers/610c01dad3720e0008804d5a/desktop/jueves-de-estrenos-1634229284688.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <ButtonAll TamañoB='sm' ColorB='danger' TamañoL='1' Texto='MÁS INFORMACIÓN'/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://assets.cinemark-core.com/5db771be04daec00076df3f5/content/covers/5e62d726ee924500081e4dc4/desktop/preventa-halloween-kills-1634575525454.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <ButtonAll TamañoB='sm' ColorB='danger' TamañoL='1' Texto='MÁS INFORMACIÓN'/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://assets.cinemark-core.com/5db771be04daec00076df3f5/content/covers/610e19c9f711590009f11cce/desktop/actualiza-tus-datos-1633969924249.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://assets.cinemark-core.com/5db771be04daec00076df3f5/content/covers/610e198df711590009f11ccc/desktop/protocolos-de-seguridad-1628719722383.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <ButtonAll TamañoB='sm' ColorB='danger' TamañoL='1' Texto='MÁS INFORMACIÓN'/>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default Carrusel
