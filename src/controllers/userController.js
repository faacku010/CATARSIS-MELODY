const { validationResult } = require('express-validator');
const path = require('path');

const userController = {
	login: (req, res) => {
		res.render('users/login');
	},

	register: (req, res) => {
		let errors = validationResult(req);
		res.render('users/register');
		res.send('errors');

	}
};

module.exports = userController;