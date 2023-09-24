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
		res.redirect("/")

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
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let id = req.params.id;
		let productToEdit = products.find(product =>{
			return product.id == id	
		});

		res.render('products/productEdition', {productToEdit})
	},

	processEdition: (req, res) => {

		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let productToEdit = products.find(product => {
			return req.params.id == product.id
		});

		let editedProduct = {
			id: req.params.id,
			name: req.body.name,
			description: req.body.description,
			price: req.body.price,
			discount: req.body.discount,
			image: productToEdit.image,
			colors: req.body.colors,
			category: req.body.category
		}

		// Buscando la posicion en el array del producto a editar
		let indice = products.findIndex(product => {
			return product.id == req.params.id
		});

		// Reemplazamos el producto por el editado
		products[indice] = editedProduct;

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
		res.redirect("/");
	}

}


module.exports = productController;