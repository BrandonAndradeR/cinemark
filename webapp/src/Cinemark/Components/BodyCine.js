import React, {useEffect, useState} from 'react'
import { getPelicula } from '../Services'
import ButtonAll from './ButtonAll'
import CardCine from './CardCine'
import './styles/Fondo.css'

function BodyCine() {

    const [pelicula, setPelicula] = useState([]);
    useEffect(()=>{
        async function CargaPelicula(){
            const datos = await getPelicula();
            console.log(datos);

            if(datos.status === 208){
                setPelicula(datos.data.listaTodos_Pelicula)
            }
        }
        CargaPelicula();
    },[])


    return (
        <div class='FondoBody'>
            <h1><font size='5'>ESTRENOS / CARTELERA</font></h1>
            <table>
                <thead>
                    <tr>
                        
                        {
                            pelicula.map((item)=>(
                            <th>
                            <CardCine color='Danger' key={item.idPelicula} Imagen='https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/6160e221359d1600088f7659/common/el-ultimo-duelo-86598-1634133345904.jpg' Titulo='Estreno' Texto='VerHorario'/>
                            </th>
                            ))
                        }
                        
                        
                    </tr>
                </thead>
            </table>
            <center>
            <ButtonAll TamañoB='sm' ColorB='secondary' TamañoL='2' Texto='VER TODAS LAS PELICULAS'/>
            </center>
            <h1><font size='5'>PROMOCIONES DE NUESTROS ALIADOS</font></h1>
            <CardCine color='Danger' Imagen='https://assets.cinemark-core.com/5db771be04daec00076df3f5/content/promotions/5e27626c68506000078af15f/desktop/cover-2x1-pagando-con-american-express-1607107777416.jpg' Titulo='2X1 PAGADO CON AMERICA EXPRESS' Texto='MÁS INFORMACIÓN'/>
        </div>
    )
}

export default BodyCine
