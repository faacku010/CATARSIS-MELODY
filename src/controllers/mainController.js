const db = require('../database/models');
const sequelize = db.Sequelize;

const mainController = {

    menu: (req, res) => {
        db.Categorias.findAll({
            /* include: [{association: "categorias"}] */
        })
        .then( (categorias) =>{
            res.render('products/inicio', {categorias});
        })
    },
    listado: (req, res) => {
        db.Productos.findAll({
            include: [{association: "categorias"}]
        })
        .then( (productos) =>{
            res.render('products/index', {productos});
        })
    }

}


module.exports = mainController;