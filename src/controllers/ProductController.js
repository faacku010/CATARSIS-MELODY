const { log } = require('console');
const fs = require('fs');
const path = require("path");
const { param } = require('../routes/productoRouter');


const productsFilePath = path.join(__dirname, '../data/ProductDataBase.json');

const productController = {

	carrito: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		const id = req.params.id;

		const productToSend = products.find(product => {
			return product.id == id
		})
		res.render("products/carrito", {product: productToSend})
	},

    detalle: function(req, res) {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        const id = req.params.id;

        const productToSend = products.find(product => {
			return product.id == id
        })
        res.render("products/detalle", {product: productToSend})
    },

    createProduct: function (req, res) {
        res.render('products/creation');
    },
    
    processCreate: (req, res) => {
        const data = req.body;

        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        const newProduct = {
			/* Tomar el último producto,      leer su ID, y sumarle 1 */
			id: products[products.length - 1].id + 1,
			name: data.name,
			price: data.price,
			discount: data.discount,
			category: data.category,
			description: data.description,
			image: req.file ? req.file.filename : "default-image.png"
		}

		// Guardarlo en el array
		products.push(newProduct);

		// Escribir el archivo
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

		// Redireccionar al usuario
		// Generamos un pedido de tipo GET a la ruta /
		res.redirect("/products/")

    },
    
	destroy: (req, res) => {

		const id = req.params.id;
		
		/* traer info de la base de datos */
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		/* modificar el array */
		let productosFiltrados = products.filter(product => {
			return product.id != id
		})

		// escribir el archivo
		fs.writeFileSync(productsFilePath, JSON.stringify(productosFiltrados, null, " "));

		// redireccionar
		res.redirect("/")

	},

    edition: function (req, res) {
        res.render('products/productEdition')
    }
};

module.exports = productController;