/* requerimos path para pode renviar los archivos HTML */
const path = require("path");
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productDataBase.json');

/* creamos el objeto literal con los metodos a exportar */
const mainController = {

index: (req, res) => {
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    res.render("index", {products: products});
    }
};

/* exportamos el objeto literal con los distintos metodos, que se usara en el enrutador por defecto */
module.exports = mainController;