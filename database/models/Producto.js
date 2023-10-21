module.exports = (sequelize, dataTypes) => {
    let alias = "Peliculas";

    let columnas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "",
        timestamps: false
    }

    const Pelicula = sequelize.define(alias, columnas, config);
    return Pelicula;
}