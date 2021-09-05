const pool =require('../../database');


module.exports = function(){

    async function listall(){
        let query = "select * from catorce";
        return await pool.query(query);
    }

    async function createAlumnos(datos){
        let query = "insert into catorce set ?";
        return await pool.query(query,datos);
    }

    async function deleteAlumnos(datos){
        let query = "delete from catorce where idcatorce=?";
        return await pool.query(query,datos);
    }

    async function updateAlumnos(datos){
        let query = "update catorce set nombre=?, numero=? where idcatorce=?";
        return await pool.query(query,datos);
    }

    return{
        listall,
        createAlumnos,
        deleteAlumnos,
        updateAlumnos
    }
}