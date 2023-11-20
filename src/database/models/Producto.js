const { fn } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = "Productos";

    let columnas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(100),
            null: true
        },
        precio: {
            type: dataTypes.FLOAT
        },
        descripcion: {
            type: dataTypes.TEXT

        },
        descuento: {
            type: dataTypes.INTEGER

        },
        imagen_producto: {
            type: dataTypes.STRING(100)

        },
        categoria_id: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: "productos",
        timestamps: false
    };

    const Producto = sequelize.define(alias, columnas, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.Categorias, {  //seguido de models se coloca el alias del modelo al q refiere
            as: "categorias",
            foreignKey: "categoria_id"
        })
    };

    return Producto;
}