/* requerimos path para pode renviar los archivos HTML */
const path = require("path");

/* creamos el objeto literal con los metodos a exportar */
const mainController = {

/* manejo del pedido get con ruta */
index: (req, res) => {
        /* comunicarse con el modelo, conseguir informacion */
        res.render('products/index');
    }
};

/* exportamos el objeto literal con los distintos metodos, que se usara en el enrutador por defecto */
module.exports = mainController;