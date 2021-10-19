import React from 'react'
import axios from 'axios'

const baseUrl_Ciudad =process.env.REACT_APP_BASE_URL
const baseUrl_Pelicula =process.env.REACT_APP_BASE_URL_PELICULA

export async function getCiudad(){
    try{
        const responde =await axios({
            url:`${baseUrl_Ciudad}/api/listarCiudad`,
            method:'GET'
        })
        return response
    }catch (error) {
        console.log(error);
    }
}  

export async function getPelicula(){
    try{
        const responde =await axios({
            url:`${baseUrl_Pelicula}/api/listarPelicula`,
            method:'GET'
        })
        return response
    }catch (error) {
        console.log(error);
    }
}  