const database = require('../database')

//Funcionalidade que retorna todas as cervejas
exports.consultarCervejas = (req, res, next) => {

    //Seleciona todas tabelas com as cervejas
    database.query('SELECT * FROM cervejas').then((resultado) => {
        res.status(200).send({cervejas: resultado.rows})
    }, (error) => {
        res.status(500).send({error: error})
    })
}
//Funcionalidade que retorna o nome consultado pelo usuário
exports.consultarNome = (req, res, next) => {

    //Constante que armazena o dado enviado pelo usuário
    const { Nome } = req.body

    //Seleciona todas as tabelas onde tem o nome consultado
    database.query(`SELECT * FROM cervejas WHERE Nome = '${Nome}'`).then((resultado) => {
        res.status(200).send({cervejas: resultado.rows})
    }, (error) => {
        res.status(500).send({error: error})
    }) 
    console.log(Nome)
}
//Funcionalidade que retorna todos os nomes que possuem o caracter consultado pelo usuário
exports.consultarNomeParcial = (req, res, next) => {

    //Constante que armazena o dado enviado pelo usuário
    const { Nome } = req.body

    //Seleciona todas as tabelas onde o dado enviado pelo usuário possui o caracter
    database.query(`SELECT * FROM cervejas WHERE Nome LIKE '%${Nome}%'`).then((resultado) => {
        res.status(200).send({cervejas: resultado.rows})
    }, (error) => {
        res.status(500).send({error: error})
    }) 
    console.log(Nome)
}
//Funcionalidade que retorna a nacionalidade consultada pelo usuário
exports.consultarNacionalidade = (req, res, next) => {

    //Constante que armazena o dado enviado pelo usuário
    const { Nacionalidade } = req.body

    //Seleciona todas as tabelas onde tem a nacionalidade consultada
    database.query(`SELECT * FROM cervejas WHERE Nacionalidade = '${Nacionalidade}'`).then((resultado) => {
        res.status(200).send({cervejas: resultado.rows})
    }, (error) => {
        res.status(500).send({error: error})
    }) 
    console.log(Nacionalidade)
}
//Funcionalidade que retorna o tipo consultado pelo usuário
exports.consultarTipo = (req, res, next) => {

    //Constante que armazena o dado enviado pelo usuário
    const { Tipo } = req.body

    //Seleciona todas as tabelas onde tem o tipo consultado
    database.query(`SELECT * FROM cervejas WHERE Tipo = '${Tipo}'`).then((resultado) => {
        res.status(200).send({cervejas: resultado.rows})
    }, (error) => {
        res.status(500).send({error: error})
    }) 
    console.log(Tipo)
}
//Funcionalidade que retorna em ordem decrescente o ABV das cervejas
exports.consultarAbvMaior = (req, res, next) => {

    //Retorna todas as tabelas em ordem decrescente de acordo com o valor do ABV das cervejas
    database.query(`SELECT * FROM cervejas ORDER BY Abv DESC`).then((resultado) => {
        res.status(200).send({cervejas: resultado.rows})
    }, (error) => {
        res.status(500).send({error: error})
    }) 
}


