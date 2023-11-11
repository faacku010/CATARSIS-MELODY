const db = require('../database/models');
const sequelize = db.Sequelize;

const productoControladorDB = {
    listado: (req, res) => {
        db.Productos.findAll({
            include: [{association: "categorias"}]
        })
        .then( (productos) =>{
            res.render('products/index', {productos});
        })
    },

    createProduct: function (req, res) {
        db.Productos.create({
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            descuento: req.body.descuento,
            imagen_producto: req.body.imagen_producto  
        })
    	res.render('products/creation');
    },

    detalle: function (req, res) {
        db.Productos.findByPk(req.params.id)
        .then((producto) => {
            /* console.log(producto); */
            res.render('products/detalle', {producto})  
        }) 
    },

    carrito: function (req, res) {
        db.Productos.findByPk(req.params.id)
        .then((producto) => {
            /* console.log(producto); */
            res.render('products/carrito', {producto})  
        }) 
    },


    edit: function (req, res) {
        db.Productos.findByPk(req.params.id)
            .then(function(productoDB) {
                res.render('products/productEdition', 
                {producto : productoDB})
            })
    },

    update: function (req, res) {
        db.Productos.update({
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            descuento: req.body.descuento,
            imagen_producto: req.body.imagen_producto  
        },
        { where: {
            id: req.params.id
            }
        })
        res.redirect('/productos/edition/' + req.params.id)
    },

    delete: function (req, res) {
        db.Productos.destroy({
            where: {
                id: req.params.id
            } 
        })
        res.redirect('/productos/')
    }
}

module.exports = productoControladorDB;