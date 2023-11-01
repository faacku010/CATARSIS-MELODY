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

        }
    }

    let config = {
        tableName: "productos",
        timestamps: false
    }

    const Producto = sequelize.define(alias, columnas, config);
    return Producto;
}