const express = require('express');
const router = express.Router();
const productoControlador = require('../controllers/productoControlador');

router.get('/', productoControlador.listado);

module.exports = router;