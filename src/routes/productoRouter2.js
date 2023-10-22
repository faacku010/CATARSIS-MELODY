const express = require('express');
const router = express.Router();

const productoController = require('../controllers/productoControlador');
const productoControlador = require('../controllers/productoControlador');

router.get('/', productoControlador.listado);

module.exports = router;