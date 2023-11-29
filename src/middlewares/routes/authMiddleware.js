function authMiddleware(req, res, next) {
	if (!req.session.usuarioLogueado) {
		return res.redirect('/usuariosDB/login');
	}
	next();
}

module.exports = authMiddleware;