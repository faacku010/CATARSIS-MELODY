const path = require("path");

let productController = {
    carrito: function (req, res) {
        res.render('products/carrito');
    },

    detalle: function(req, res) {
        res.render('products/detalle');
    },

    createProduct: function (req, res) {
        res.render('products/creation');
    },
    
    create: function (req, res) {
        let producto = {
            nombre : req.body.name,
            descripcion: req.body.description,
            /* imagen: req.bdoy.image, */
            categoria: req.body.category,
            colores: req.body.colors,
            precio: req.body.price,

        }
        res.render('products/creation')
    },
    
    edition: function (req, res) {
        res.render('products/productEdition')
    }

};

module.exports = productController;