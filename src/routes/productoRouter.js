const express = require('express');
const path = require ('path')
const router = express.Router();
const multer = require('multer');

// ************ Multer config ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images'))
    },
    filename: function (req, file, cb) {
        cb(null, "product-" + Date.now() + path.extname(file.originalname))
    },
});

const upload = multer({storage: storage});


/* controller  require */
const productController = require('../controllers/ProductController');


/* enviar al carrito de cada producto */
router.get('/carrito/:id/', productController.carrito);

/* devolver un producto */
router.get('/detalle/:id/', productController.detalle)

/* crear un producto */
router.get('/create/', productController.createProduct);
router.post('/create/',upload.single("image") , productController.processCreate);

/* eliminar un producto */
router.delete('/delete/:id/', productController.destroy);

/* editar un producto */
router.get('/edition/:id', productController.edition);
router.put('/edition/:id', upload.single("image") , productController.processEdition);

module.exports = router;