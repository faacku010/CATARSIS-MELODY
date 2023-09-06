const path = require('path');

const userController = {
	login: (req, res) => {
		res.sendFile(path.resolve(__dirname, '../views/login.html'));
	},

	register: (req, res) => {
		res.sendFile(path.resolve(__dirname, '../views/register.html'));
	}
};

module.exports = userController;