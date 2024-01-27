const express = require('express');
const router = express.Router();

const { body } = require('express-validator');

const usuarioDB = require('../controllers/userControllerDb.js');
const upload = require('../middlewares/routes/multerMiddleware.js');
const validacionRegistro = require('../middlewares/routes/validationRegister.js')
const authMiddleware = require('../middlewares/routes/authMiddleware.js')
const guestMiddleware = require('../middlewares/routes/guestMiddleware.js')



router.get('/create/',guestMiddleware, usuarioDB.registroForm);
router.post('/create/', upload.single("imagen_perfil") , validacionRegistro , usuarioDB.Registro); /* en upload va lo que trae el name del form de image */

router.get('/login',guestMiddleware, usuarioDB.Logueo);
router.post('/login',upload.single("imagen_perfil"),validacionRegistro , usuarioDB.procesoLogueo);

router.get('/perfil',authMiddleware, usuarioDB.Perfil);

router.get('/logout/', usuarioDB.borrarUsuario);
module.exports = router;