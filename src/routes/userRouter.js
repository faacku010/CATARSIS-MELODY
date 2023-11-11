const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body, check, validationResult} = require('express-validator');
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
    body('email')
    .notEmpty().withMessage('debe completar el campo email').bail()
    .isEmail().withMessage('debes escribir un formato de correo valido '),
    body('password').isStrongPassword().withMessage('debe completar el campo contraseña'),
    body("image")
    .custom((value, {req}) => {
    
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".gif"];
        
        if (!file) {
            throw new Error("Debe subir una imagen")
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error("Las extensiones de archivos permitidas son .jpg, .png, .gif")
            }
        }

        return true;
    })
]

const validateSession = [
    check('email').isEmail().withMessage('email invalido'),
    check('password').isLength({min : 8}).withMessage('la contraseña es invalida')
]


router.get('/register/', userController.register);
router.post('/register/',upload.single("image") , validateCreateForm,  userController.processRegister);

router.get('/login', userController.login);
router.post('/login',upload.single("image"), validateSession, userController.processLogin);

module.exports = router;