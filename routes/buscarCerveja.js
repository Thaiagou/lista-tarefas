const express = require('express')
const router = express.Router()
const controller = require('../controllers/buscarCerveja')

router.get('/buscar-nome', controller.consultarNome)
router.get('/buscar-nomeParcial', controller.consultarNomeParcial)
router.get('/buscar-nacionalidade', controller.consultarNacionalidade)
router.get('/buscar-tipo', controller.consultarTipo)
router.get('/ordernar-Abv', controller.consultarAbvMaior)
router.get('/', controller.consultarCervejas)

module.exports = router