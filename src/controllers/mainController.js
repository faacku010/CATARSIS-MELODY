const db = require('../database/models');
const sequelize = db.Sequelize;

const mainController = {
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