const pg = require('pg');
const database = new pg.Client('postgres://sriayfdp:PJOVVeoDg9_iDqEObE72roofpx1u8FHE@babar.db.elephantsql.com/sriayfdp');

database.connect((erro) => {
    if (erro) {
        return console.log('Não foi possível se conectar com o ElephantSQL', erro)
    } else {
        return console.log('Conectado ao ElephantSQL!')
    }
})

module.exports = database;