const express = require('express');
const router = express.Router();
const multer = require('multer');
const { body } = require('express-validator');
const userController = require("../controllers/userController.js");

// ************ Multer config ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/users'))
    },
    filename: function (req, file, cb) {
        cb(null, "product-" + Date.now() + path.extname(file.originalname))
    },
});

const upload = multer({storage : storage});

// validaciones 
const validateCreateForm = [
    body('firstName').notEmpty().withMessage('debe completar el campo nombre'),
    body('lastName').notEmpty().withMessage('debe completar el campo apellido'),
    body('password').isStrongPassword().withMessage('debe completar el campo contraseña'),
    body('email').isEmail().withMessage('debe completar el campo email')
]


router.get('/register/', userController.register);
router.post('/register/',upload.single("image") , validateCreateForm,  userController.processRegister);

router.get('/login', userController.login);

module.exports = router;