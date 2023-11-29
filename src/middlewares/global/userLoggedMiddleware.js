const db = require('../../database/models');

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.usuarioCorreo;
	let userFromCookie = db.Usuarios('correo', emailInCookie);

	if (userFromCookie) {
		req.session.usuarioLogueado = userFromCookie;
	}

	if (req.session.usuarioLogueado) {
		res.locals.isLogged = true;
		res.locals.usuarioLogueado = req.session.usuarioLogueado;
	}

	next();
}

module.exports = userLoggedMiddleware;