const pool =require('../../database');


module.exports = function(){

    async function listall(){
        let query = "select * from ciudad";
        return await pool.query(query);
    }

    return{
        listall
    }
}