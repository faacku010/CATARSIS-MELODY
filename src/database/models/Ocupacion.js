const { fn } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  let alias = "Ocupaciones";

  let columnas = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    clase: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
  };

  let config = {
    tableName: "ocupacion",
    timestamps: false,
  };

  const Ocupacion = sequelize.define(alias, columnas, config);

  Ocupacion.associate = function (models) {
    Ocupacion.hasMany(models.Usuarios, {
      as: "Usuarios",
      foreignKey: "ocupacion_id", // Corrected typo here
    });
  };

  return Ocupacion;
};
