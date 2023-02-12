import React, {useEffect, useState} from 'react'
import { getCiudad } from '../Services'
import Dropdown from 'react-bootstrap/Dropdown'
import './styles/NavCiudad.css'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavCiudad() {

    const [ciudad, setCiudad] = useState([]);
    useEffect(()=>{
        async function CargaCiudad(){
            const datos = await getCiudad();
            console.log(datos);

            if(datos.status === 208){
                setCiudad(datos.data.listaTodos_Ciudad)
            }
        }
        CargaCiudad();
    },[])


    return (
        <div class='NavCiuBack'>
            <div class='NavCiuBacker'>
            <table>
                <thead>
                    <tr>
                        <th>
                            USTED ESTÁ EN:
                        </th>
                        <th>
                        <Form>
                            <Dropdown>
                                <Dropdown.Toggle size="sm" id="dropdown-button-dark-example1">
                                    <font size='1'><Form.Control  size='sm' type="text" placeholder="Ciudad"/></font> 
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark">
                                        {
                                            ciudad.map((item)=>(
                                                <Dropdown.Item key={item.idCiudad} href=''> {item.Ciudad}</Dropdown.Item>
                                            ))
                                        }
                                        
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form>
                        </th>
                    </tr>
                </thead>
            </table>
               
            </div>    
        </div>
    )
}

export default NavCiudad
