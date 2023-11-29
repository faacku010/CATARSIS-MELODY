const db = require('../database/models');
const sequelize = db.Sequelize;
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const usuarioControladorDB = {

    registroForm: (req, res) => {
        return res.render('users/registerDb');
    },

    Registro: (req, res) => {
        const resultValidation = validationResult(req);

        db.Usuarios.findOne({
            where: {
                correo: req.body.correo
            },
            raw: true

        })
        .then(usuarioRegistrado => {
            console.log('usuarioregistrado')
            console.log(usuarioRegistrado);
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
                console.log(usuarioCreado);
                res.redirect('/productos/');
            })
        })

        
    },

    Logueo: (req, res) => {
        return res.render('users/login');
    },

    procesoLogueo: (req, res) => {
        console.log(req.body);
        db.Usuarios.findOne({
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

                    res.locals.usuarioLogueado = req.session.usuarioLogueado;
                    console.log('sesion')
                    console.log(req.session.usuarioLogueado);
                    
/*                     if(req.body.recordame) {
                        res.cookie('usuarioCorreo', req.body.correo, {maxAge: 360000} )
                    } */
                    console.log('locals')
                    console.log(res.locals);
                    return res.redirect('/usuariosDB/perfil');
                } else {
                    return res.render('users/login', {
                        errors: {
                            contrasenia: {
                                msg: 'Contraseña incorrecta'
                            }
                        }
                    });
                }
            } else {
                return res.render('users/login', {
                    errors: {
                        correo: {
                            msg: 'No se encuentra este correo en nuestra base de datos'
                        }
                    }
                });
            }
        })
        .catch(error => {
            console.error("Error en procesoLogueo:", error);
            return res.status(500).send("Error interno del servidor");
        });
    },
    
    
     
    Perfil: (req, res) => {
        
        res.locals.usuarioLogueado = req.session.usuarioLogueado;

        console.log('locals');
        console.log(res.locals.usuarioLogueado);

        res.render('users/userProfile'/* , {
            usuario: req.session.usuarioLogueado
        } */)
    },

/*     borrarUsuario: (req, res) => {
        res.clearCookie('usuarioCorreo');
        db.Usuario.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/usuariosDB/')
    } */

}


module.exports = usuarioControladorDB;