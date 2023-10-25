const express = require("express");
const router = express.Router();
const controller = require("../controllers/tarefas");

router.get("/tarefas", controller.listar)
router.post('/adicionar-tarefa',controller.adicionarTarefa  )
router.delete("/deletar-tarefa/:id", controller.excluirTarefa)
router.get("/tarefas/:id", controller.listarTarefa)
router.put("/marcar-andamento/:id", controller.marcarAndamento)
router.put("/marcar-concluida/:id", controller.marcarConcluida)


module.exports = router;