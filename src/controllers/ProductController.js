const fs = require('fs');
const path = require("path");


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
    
/*     create: function (req, res) {
        let producto = {
            nombre : req.body.name,
            descripcion: req.body.description,
            imagen: req.bdoy.image,
            categoria: req.body.category,
            colores: req.body.colors,
            precio: req.body.price,

        }
        res.render('products/creation')
    },
    
     */
edition: function (req, res) {
        res.render('products/productEdition')
    }
};

module.exports = productController;