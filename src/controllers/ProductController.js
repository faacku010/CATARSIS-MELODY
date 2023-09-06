const path = require("path");

let productController = {
    carrito: function (req, res) {
        res.sendFile(path.resolve(__dirname, '../views/productCart.html'));
    },
    detalle: function(req, res) {
        res.sendFile(path.resolve(__dirname, '../views/productDetail.html'));
        },

/*     detalleComentarios: function(req, res) {
        if (req.params.idComentario == undefined) {
            res.send('Bienvenidos a los comentarios del producto ' + req.params.idProducto + ' y estas enfocado en el comentario ' + req.params.idComentario); 
        } else {
            res.send('Bienvenidos a los comentarios del producto ' + req.params.idProducto + ' y estas enfocado en el comentario ' + req.params.idComentario);
        }
    }, */
};

module.exports = productController;