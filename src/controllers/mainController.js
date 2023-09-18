/* requerimos path para pode renviar los archivos HTML */
const fs = require('fs');
const path = require("path");


const productsFilePath = path.join(__dirname, '../../views/data/ProductDataBase.json');

/* creamos el objeto literal con los metodos a exportar */
const mainController = {

index: (req, res) => {
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    res.render("products/index", {product: products});
    /* res.render('index'); */
    }
};

/* exportamos el objeto literal con los distintos metodos, que se usara en el enrutador por defecto */
module.exports = mainController;