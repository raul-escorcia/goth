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

module.exports = { getCanciones, deleteCancionById }