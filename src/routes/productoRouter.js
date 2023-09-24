const express = require('express');
const router = express.Router();
const multer = require('multer');


/* controller  require */
const productController = require('../controllers/ProductController');


/* enviar al carrito de cada producto */
router.get('/carrito/:id/', productController.carrito);

/* devolver un producto */
router.get('/detalle/:id/', productController.detalle)

/* crear un producto */
router.get('/create/', productController.createProduct);
router.post('/create/', productController.processCreate);

/* eliminar un producto */
router.delete('/delete/:id/', productController.destroy);

/* editar un producto */
router.get('/edition/:id/', productController.edition);
router.put('/edition/:id/', productController.processEdition);

module.exports = router;