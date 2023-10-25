const pg = require('pg')

const database = new pg.Client('postgres://juwgmthv:L2Y5Hj5wt6fqqXJ0zSCXgALY65UflMWk@silly.db.elephantsql.com/juwgmthv')


database.connect ((error) => {
    if (error) {
        return console.log('Não foi possível se conectar com o ElephantSQL', error)
    } else {
        return console.log('Conectado ao ElephantSQL')
    }
})

module.exports = database