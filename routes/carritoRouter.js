let express = require('express');
let router = express.Router();

const carritoController = require('../controllers/carritoController.js');

router.get('/carrito', carritoController.carrito);

module.exports = router;