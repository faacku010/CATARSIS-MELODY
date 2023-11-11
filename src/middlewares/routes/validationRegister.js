const path = require('path');
const { body } = require('express-validator');

module.exports = [
        body('firstName').notEmpty().withMessage('debe completar el campo nombre'),
        body('lastName').notEmpty().withMessage('debe completar el campo apellido'),
        body('password').notEmpty().withMessage('debe completar el campo contraseña'),
        body('email').isEmail().withMessage('debe completar el campo email'),
        body("image")
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