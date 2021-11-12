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
    } catch(error){
        console.log(error);
        throw error;
    }
}

async function getCancionById(id){
    var query = 'select * from canciones where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarCancionById(obj, id){
    try{
        var query = 'update canciones set ? where id = ?';
        var rows = await pool.query(query, [obj, id]);
    } catch (error){
        throw error;
    }
}

module.exports = { getCanciones, deleteCancionById, insertCancion, getCancionById, modificarCancionById }