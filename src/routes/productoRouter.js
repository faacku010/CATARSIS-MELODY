const express = require('express');
const router = express.Router();

const productoDB = require('../controllers/productoController.js');

const upload = require('../middlewares/routes/multerMiddlewareP.js');
const authMiddleware = require('../middlewares/routes/authMiddleware.js')

router.get('/', productoDB.listado);

/* crear un producto */
router.get('/create/', productoDB.createForm);
router.post('/create/', upload.single("imagen_producto") ,productoDB.createProduct);

/* devolver un producto */
router.get('/detalle/:id/', productoDB.detalle)

router.get('/categorias/:id/', productoDB.categorias)

// carrito
router.get('/carrito/:id/', productoDB.carrito);

/* editar un producto */
router.get('/edition/:id',authMiddleware, upload.single("imagen_producto") ,productoDB.edit);
router.put('/edition/:id', upload.single("imagen_producto"), productoDB.update);

/* eliminar un producto */

router.delete('/delete/:id/',authMiddleware, productoDB.delete);

module.exports = router;