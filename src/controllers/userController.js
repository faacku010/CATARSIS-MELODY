const path = require('path');

const userController = {
	login: (req, res) => {
		res.render('login', {'login': login});
	},

	register: (req, res) => {
		res.sendFile(path.resolve(__dirname, '../views/register.html'));
	}
};

module.exports = userController;