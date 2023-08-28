const dataBase = require('../models/dataBase');

exports.listar =(req, res) => {
    const query = "SELECT * FROM tarefas"

    dataBase.query(query).then(
        (resultado) => {
            res.status(200).send({ tarefas: resultado.rows });
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
}

exports.listarTarefa =(req, res) => {
    const id =req.params.id
    const query = `SELECT * FROM tarefas WHERE id = '${id}'`
    
    dataBase.query(query).then(
        (resultado) => {
            res.status(200).send({ tarefas: resultado.rows });
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
}

exports.adicionarTarefa = (req,res,next)=>{
    const status = ''
    const query = "INSERT INTO tarefas VALUES($1,$2,$3);";
    
    const values = [req.body.id, req.body.tarefa, status ]

    dataBase.query(query,values).then(
        (resposta)=>{
            res.status(200).send({message:"cadastrado com sucesso"})
        }, (erro)=>{
            res.status(500).send({erro:erro})
        }
    )
}

exports.excluirTarefa = (req, res, next) => {
    const id =req.params.id
    dataBase.query(`DELETE FROM tarefas WHERE id  = '${id}'`).then(
        (resposta)=>{
            res.status(200).send({message:"excluido"})
        }, (erro)=>{
            res.status(500).send({erro:erro})
        })
    }


exports.marcarAndamento = (req,res)=>{
    const id =req.params.id
    const status = 'Em andamento'
    const query = `UPDATE tarefas SET status = '${status}' WHERE id = '${id}'` 

    dataBase.query(query).then(
        (resposta)=>{
            res.status(200).send({message:"Tarefa atualizada para: Em andamento"})
        }, (erro)=>{
            res.status(500).send({erro:erro})
        }
    )
}

exports.marcarConcluida = (req,res)=>{
    const id =req.params.id
    const status = 'Concluida'
    const query = `UPDATE tarefas SET status = '${status}' WHERE id = '${id}'` 

    dataBase.query(query).then(
        (resposta)=>{
            res.status(200).send({message:"Tarefa Concluida"})
        }, (erro)=>{
            res.status(500).send({erro:erro})
        }
    )
}