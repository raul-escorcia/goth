var pool = require('./bd');

async function getCanciones(){
    var query = 'select * from canciones';
    var rows = await pool.query(query);
    return rows;
}

async function deleteCancionById(id){
    var query = 'delete from canciones where id=?';
    var row = await pool.query(query,[id]);
    return row;
}

async function insertCancion(obj){
    try{
        var query = 'insert into canciones set ?';
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch(error){
        console.log(error);
        throw error;
    }
}

module.exports = { getCanciones, deleteCancionById, insertCancion }