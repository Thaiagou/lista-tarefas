const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const tarefa = require("./routes/tarefas");

const app = express()
app.use(bodyParser.json())
app.use('/tarefas',tarefa)


app.listen(port, () => {
    console.log(`Servidor express rodando na porta: ${port}`)
})