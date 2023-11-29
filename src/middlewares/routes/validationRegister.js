const path = require('path');
const { body } = require('express-validator');

module.exports = [
        body('nombre').notEmpty().withMessage('debe completar el campo nombre'),
        body('apellido').notEmpty().withMessage('debe completar el campo apellido'),
        body('contrasenia').notEmpty().withMessage('debe completar el campo contraseña'),
        body('correo').notEmpty().withMessage('debe completar el campo email').bail()
        .isEmail().withMessage('debes escribir un formato de correo valido'),
        body("imagen_perfil")
        .custom((value, {req}) => {
    
            let file = req.file;
            let acceptedExtensions = [".jpg", ".png", ".gif"];
            
            if (!file) {
                throw new Error("Debe subir una imagen")
            } else {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error("Las extensiones permitidas son .jpg, .png, .gif")
                }
            }
    
            return true;
        })
]