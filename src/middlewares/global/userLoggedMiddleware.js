const db = require('../../database/models');

async function userLoggedMiddleware(req, res, next) {
	
	res.locals.isLogged = false;

	const correoEnCookie = req.cookies.usuarioCorreo;

	try {
			if(req.cookies?.usuarioCorreo) {
				const usuarioCookie = await db.Usuarios.findOne({where: {correo: req.cookies.usuarioCorreo}});

			if(usuarioCookie && usuarioCookie.correo === req.cookies.usuarioCorreo) {
				uCookie = usuarioCookie;
				}
			if(uCookie) {
				delete uCookie.contrasenia;
				req.session.usuarioLogueado = uCookie;
				}
			}
		 	if (req.session && req.session.usuarioLogueado) {
					res.locals.isLogged = true;
					res.locals.usuarioLogueado = req.session.usuarioLogueado;
				}
		}
		catch (error) {
			console.error("Error en middleware de inicio de sesión:", error);
		  }
		
		  next();
}

module.exports = userLoggedMiddleware;
