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
        /* return res.json(productos); */
    },

    carrito: function (req, res) {
        db.Productos.findByPk(req.params.id)
        .then((producto) => {
            /* console.log(producto); */
            res.render('products/carrito', {producto})  
        }) 
    },

    createForm: (req, res) => {
        db.Categorias.findAll()
        .then ( (categorias) => {
            res.render('products/creation', {categorias : categorias})    
        })
        
    },

    createProduct: function (req, res) {
        db.Productos.create({
            nombre: req.body.nombre,
            precio: req.body.precio,
            colores: req.body.colores,
            categoria_id: req.body.categoria_id,
            descripcion: req.body.descripcion,
            descuento: req.body.descuento,
            imagen_producto: req.file.filename  
        })
    	res.redirect('/productos/');
    },

    detalle: function (req, res) {
        let pedidoProducto = db.Productos.findByPk(req.params.id);
        let pedidoColor = db.Productos.findAll();

        Promise.all([pedidoProducto, pedidoColor])

            .then(([productoDB, colorDB]) => {
                /* console.log(producto); */
                res.render('products/detalle', {producto : productoDB, colores : colorDB})  
            }) 
    },

    edit: function (req, res) {
        let pedidoProducto = db.Productos.findByPk(req.params.id);
        let pedidoCategoria = db.Categorias.findAll();

        Promise.all([pedidoProducto, pedidoCategoria])

        .then(([productoDB, categoriaDB]) => {
            console.log(productoDB);
            console.log(categoriaDB);
            res.render('products/productEdition', { producto : productoDB, categorias : categoriaDB })
        })

    },

    update: function (req, res) {
        db.Productos.update({
            nombre: req.body.nombre,
            precio: req.body.precio,
            categoria_id: req.body.categoria_id,
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