const path = require("path");

let productController = {
    carrito: function (req, res) {
        res.render('products/carrito');
    },

    detalle: function(req, res) {
        res.render('products/detalle');
    }
};

module.exports = productController;