function guestMiddleware(req, res, next) {
	if (req.session.usuarioLogueado) {
		return res.redirect('/usuariosDB/perfil');
	}
	next();
}

module.exports = guestMiddleware;