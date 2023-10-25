const express = require('express')
const app = express()
const port = 3000
const buscarCerveja = require('./routes/buscarCerveja')



const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use('/cervejas', buscarCerveja)


app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})




/*
app.delete('/deletar-compra/:id', (req, res) => {
    const id = req.params.id
   const indiceId =  compras.findIndex(compra => 
    compra.id == id
  )

  compras.splice(indiceId, 1)
    res.status(200).send(compras)

})
   
    app.put('/:id', (req, res) => {
        const id = req.params.id
        res.status(200).send({message: 'PUT'})
    })*/
