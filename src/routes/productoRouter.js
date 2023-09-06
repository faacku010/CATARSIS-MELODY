const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');

/* router.get('/:idProducto', function(req, res) {
    res.send('Bienvenidos al detalle del producto' + req.params.idProducto);
}); */

router.get('/carrito', productController.carrito);

router.get('/detalle', productController.detalle);


module.exports = router;