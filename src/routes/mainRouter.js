/* requerimos express y guardamos la ejecucion del metodo router, que usaremos en el archivo */
const express = require('express');

/* router con R mayuscula */
const router = express.Router();

/* Importamos el controlador de las rutas por defecto */
const mainController = require('../controllers/mainController.js')

/* En vez de app.get, utilizamos router.get. Esto va "guardando" en router las distintas rutas, que luego exportamos */

/* Procesa el pedido de get con ruta */
router.get('/', mainController.index);


/* exportamos la variable router ya con todas las rutas "guardadas", que se usara en app.js */
module.exports = router;