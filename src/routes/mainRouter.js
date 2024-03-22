const express = require('express');
const router = express.Router();

const upload = require('../middlewares/routes/multerMiddlewareP.js');

/* Importamos el controlador de las rutas por defecto */
const mainController = require('../controllers/MainController.js');

/* En vez de app.get, utilizamos router.get. Esto va "guardando" en router las distintas rutas, que luego exportamos */

/* Procesa el pedido de get con ruta */

router.get('/', mainController.menu);

router.get('/inicio', mainController.listado);


/* exportamos la variable router ya con todas las rutas "guardadas", que se usara en app.js */
module.exports = router;