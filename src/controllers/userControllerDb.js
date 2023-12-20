const db = require('../database/models');
const sequelize = db.Sequelize;
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const usuarioControladorDB = {

    registroForm: (req, res) => {
        return res.render('users/registerDb');
    },

    Registro: (req, res) => {
        let resultValidation = validationResult(req);

        db.Usuarios.findOne({
            where: {
                correo: req.body.correo
            },
            raw: true

        })
        .then(usuarioRegistrado => {
/*             console.log('usuarioregistrado')
            console.log(usuarioRegistrado); */
            if (usuarioRegistrado) {
                return res.render('users/registerDb', {
                    errors: {
                        'correo': {
                            'msg': 'este correo ya esta registrado'
                        }
                    },
                    oldData: req.body
                })   
            }
            if (resultValidation.errors.length > 0) {
			    return res.render('users/registerDb', {
				    errors: resultValidation.mapped(),
				    oldData: req.body
		        })
            }
            db.Usuarios.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                correo: req.body.correo,
                contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10),
                imagen_perfil: req.file.filename, 
                ocupacion_id: req.body.ocupacion_id
            }).then( (usuarioCreado) => {
                /* console.log(usuarioCreado); */
                res.redirect('/productos/');
            })
        })

        
    },

    Logueo: (req, res) => {
        return res.render('users/login');
    },

    procesoLogueo: (req, res) => {
        /* console.log(req.body); */
        const usuarioEncontrado = db.Usuarios.findOne({
            where: {
                correo: req.body.correo
            },
            raw: true

        })
        .then(usuarioEncontrado => {
            if (usuarioEncontrado) {
                let contraseniaValida = bcryptjs.compareSync(req.body.contrasenia, usuarioEncontrado.contrasenia);
                if (contraseniaValida) {
                    delete usuarioEncontrado.contrasenia;
                    req.session.usuarioLogueado = usuarioEncontrado;

                    if(req.body.recordame) {
                        res.cookie('usuarioCorreo', req.body.correo, {maxAge: 360000} )
                    }

                    return res.redirect('/usuariosDB/perfil')
                } 
                    return res.render('users/login', {
                        errors: {
                            correo: {
                                msg: 'Credenciales invalidas'
                            }
                        }
                    });
            } 
                    return res.render('users/login', {
                        errors: {
                            contrasenia: {
                                msg: 'contraseña incorrecta'
                        }
                    }
                });

        })
    },
    
    Perfil: (req, res) => {
        
        console.log(req.cookies.usuarioCorreo);

        usuarioLog = req.session.usuarioLogueado
           
        res.render('users/userProfile'/* , {
            usuario: req.session.usuarioLogueado
        } */)

    },

    borrarUsuario: (req, res ) => {
        res.clearCookie('usuarioCorreo');
        req.session.destroy();
        return res.redirect('/')
    }

}


module.exports = usuarioControladorDB;