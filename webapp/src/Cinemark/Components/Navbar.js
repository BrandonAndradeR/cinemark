import React from 'react'
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'
import ButtonAll from './ButtonAll'
import Dropdown from 'react-bootstrap/Dropdown'
import './styles/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Etiqueta from './Etiqueta'


function Navbar() {
    return (
        <div>
            <div class='NavbarInfo'>
                <center>
                <Table borderless>
                    <thead>
                        <tr>
                        <th>
                        </th>
                        <th>
                        
                        <a href="https://www.facebook.com/"><Image src="data:image/png;base64,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" 
                        height="17" width = "17" 
                        roundedCircle/></a>
    
                        <a href="https://twitter.com/"><Image src="data:image/png;base64,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" 
                        height="17" width = "17" 
                        roundedCircle /></a>

                        <a href="https://www.instagram.com/"><Image src="https://key0.cc/images/preview/9839_00f4741327cf94ab0b3ca316355eec04.png" 
                        height="17" width = "17" 
                        roundedCircle/></a>
                        </th>

                        <th>
                        </th>

                        <th>
                        <Etiqueta Tamaño='1' refe='' texto='TARIFAS'/>
                        </th>

                        <th>
                        <Etiqueta Tamaño='1' refe='' texto='CONÓCENOS'/>
                        </th>

                        <th>
                        <Etiqueta Tamaño='1' refe='' texto='FORMATOS'/>
                        </th>

                        <th>
                        <Dropdown>
                            <Dropdown.Toggle size="sm" id="dropdown-button-dark-example1">
                            <font size='1'>MARKETING EMPRESARIAL </font> 
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="dark">
                            <Dropdown.Item href="#/action-1"> VENTAS CORPORATIVAS</Dropdown.Item>
                            <Dropdown.Item href="#/action-2"> EVENTOS </Dropdown.Item>
                            <Dropdown.Item href="#/action-3"> PUBLICIDAD </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </th>

                        <th>
                        </th>

                        <th>
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                        <ButtonAll TamañoB='sm' ColorB='secondary' TamañoL='1' Texto='REGISTRARSE'/>
                                        </th>
                                        <th>
                                        <ButtonAll TamañoB='sm' ColorB='danger' TamañoL='1' Texto='INICIAR SESIÓN'/>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </th>
                        </tr>
                    </thead>
                </Table>
                </center> 
                  
            </div>
            <div class='NavbarLogo'>
                <Table borderless>
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>
                            <a href=""><Image src="https://i.pinimg.com/originals/af/fd/56/affd56123dadbec8642c882ff2695b9f.png" 
                            height="20" 
                            rounded/></a>
                            </th>
                            <th>
                            </th>
                                <Etiqueta Tamaño='2' refe='' texto='CARTELERA'/>
                            <th>
                            </th>
                                <Etiqueta Tamaño='2' refe='' texto='TEATROS'/>
                            <th>
                            </th>
                                <Etiqueta Tamaño='2' refe='' texto='COFITERÍA'/>
                            <th>
                            </th>
                                <Etiqueta Tamaño='2' refe='' texto='PROMOCIONES'/>
                            <th>
                            </th>
                                <Etiqueta Tamaño='2' refe='' texto='MEMBRESÍA GOLD'/>
                            <th>
                            </th>
                        </tr>
                    </thead>
                </Table>
            </div>
        </div>
        
    )
}

export default Navbar
