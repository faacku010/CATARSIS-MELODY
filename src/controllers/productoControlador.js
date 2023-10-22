const db = require('../database/models');

const productoControlador = {
    'listado': (req, res) => {
        db.Productos.findAll()
        .then( (productos) =>{
            res.send(productos);
        })
    }
}

module.exports = productoControlador;