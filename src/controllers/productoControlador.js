const db = require('../database/models');

const productoControlador = {
    'listado': (req, res) => {
        db.Productos.findAll()
        .then( (productos) =>{
            res.render('products/listado', {productos});
        })
    }
}

module.exports = productoControlador;