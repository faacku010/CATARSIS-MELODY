const express = require('express');
const router = express.Router();

const productoDB = require('../controllers/productoController.js');

const upload = require('../middlewares/routes/multerMiddlewareP.js');


router.get('/', productoDB.listado);

/* crear un producto */
router.get('/create/', productoDB.createProduct);
/* router.post('/create/',upload.single("image") , productoDB.processCreate); */


/* devolver un producto */
router.get('/detalle/:id/', productoDB.detalle)

// carrito
router.get('/carrito/:id/', productoDB.carrito);

/* editar un producto */
router.get('/edition/:id', upload.single("image") ,productoDB.edit);
router.post('/edition/:id', upload.single("image"), productoDB.update);

/* eliminar un producto */

router.post('/delete/:id/', productoDB.delete);

module.exports = router;