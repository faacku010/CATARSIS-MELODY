const express = require('express');

const router = express.Router();

const productController = require('../controllers/ProductController');

/* router.get('/:idProducto', function(req, res) {
    res.send('Bienvenidos al detalle del producto' + req.params.idProducto);
}); */

router.get('/carrito/:id/', productController.carrito);

/* router.get('/detalle/:id', productController.detalle);

router.get('/create', productController.createProduct); */

/* router.post('/create', productController.create); */

router.get('/edition', productController.edition);

/* router.post('/edition', productController.edition); */

module.exports = router;