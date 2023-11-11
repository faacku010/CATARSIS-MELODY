const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const usersFilePath = path.join(__dirname, '../data/UsersDataBase.json');

const userController = {

	register: (req, res) => {
		/* let errors = validationResult(req); */
		res.render('users/register');
	},

	processRegister: (req, res) => {
		
        const data = req.body;

        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			res.render("users/register", {
				/* errorsArray: resultValidation.errors, */
				errors: resultValidation.mapped(),
				oldData: req.body
			})
		} else {
			        const newUser = {
			/* Tomar el último producto,      leer su ID, y sumarle 1 */
			id: users[users.length - 1].id + 1,
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			password: bcrypt.hashSync(data.password, 10),
			category: data.category,
			image: req.file ? req.file.filename : "default-image.png"
			}

			// Guardarlo en el array
			users.push(newUser);

			// Escribir el archivo
			fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));

			// Redireccionar al usuario
			// Generamos un pedido de tipo GET a la ruta /
			res.redirect("/")
		}
    },

	login: (req, res) => {
		res.render('users/login');
	},

	processLogin: (req, res) => {
		const errors = validationResult(req);

		if (errors.isEmpty()) {
		const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
		if (users == "") {
			users = [];
		} else {
			users = JSON.parse(users);
		}
		let usuarioALoguearse

		for (let i = 0; i < users.length; i++) {
			if (users[i].email == req.body.email) {
				if (bcrypt.compareSync(req.body.password, users[i].password)) {
					let usuarioALoguearse = users[i];
					break;
				}
			}
		}
			if (usuarioALoguearse == undefined) {
				return res.render('users/login', {errors : [{msg: 'credenciales invalidas'}]});
			}

			req.session.usuarioLogueado = usuarioALoguearse;

			if (req.body.recordame != undefined) {
				res.cookie('recordame', usuarioALoguearse.email, {maxAge: 60000})
			}

		} else {
			return res.render('users/login', {errors : errors.errors})
		}
	}
};

module.exports = userController;