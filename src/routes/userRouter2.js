const express = require('express');
const router = express.Router();

// Controller
const userController = require('../controllers/userController2.js');

// Middlewares
const upload = require('../middlewares/routes/multerMiddleware.js');
const validations = require('../middlewares/routes/validationRegister.js');
const guestMiddleware = require('../middlewares/routes/guestMiddleware.js');
const authMiddleware = require('../middlewares/routes/authMiddleware');
const userLoggedMiddleware = require('../middlewares/global/userLoggedMiddleware.js');

// Formulario de registro
router.get('/register/', guestMiddleware, userController.register);

// Procesar el registro
router.post('/register/', upload.single('image'), validations, userController.processRegister);

// Formulario de login
router.get('/login', guestMiddleware, userController.login);

// Procesar el login
router.post('/login', userController.loginProcess);

// Perfil de Usuario
router.get('/profile/', authMiddleware, userController.profile);

// Logout
router.get('/logout/', userController.logout);

module.exports = router;