const path = require('path');
const { body } = require('express-validator');

 const validacionRegistro = [
        body('nombre')
            .notEmpty()
            .withMessage('debe completar el campo nombre').bail(),
        body('apellido')
            .notEmpty()
            .withMessage('debe completar el campo apellido').bail(),
        body('contrasenia')
            .notEmpty()
            .withMessage('debe completar este campo').bail()
            .isLength({min : 8})
            .withMessage('debe tener un minimo de 8 caracteres'),
        body('correo')  
            .notEmpty()
            .withMessage('debe completar el campo email').bail()
            .isEmail()
            .withMessage('debes escribir un formato de correo valido'),
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

module.exports = validacionRegistro;