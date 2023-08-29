const path = require('path');
const router = require('../routes/carritoRouter');

const carritoController = {
    carrito: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/productCart.html'))
    }
}

module.exports = carritoController;