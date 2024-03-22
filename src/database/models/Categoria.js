const { fn } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  let alias = "Categorias";

  let columnas = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    imagen: {
      type: dataTypes.STRING(100),
    }
  };

  let config = {
    tableName: "categorias",
    timestamps: false,
  };

  const Categoria = sequelize.define(alias, columnas, config);

  Categoria.associate = function (models) {
    Categoria.hasMany(models.Productos, {
      as: "productos",
      foreignKey: "categoria_id", // Corrected typo here
    });
  };

  return Categoria;
};
