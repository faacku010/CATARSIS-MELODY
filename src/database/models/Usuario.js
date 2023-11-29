module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios";

    let columnas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        apellido: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        correo: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true,

        },
        contrasenia: {
            type: dataTypes.STRING(200),
            allowNull: false

        },
        imagen_perfil: {
            type: dataTypes.STRING(100),
            allowNull: true

        },
        ocupacion_id: {
        type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    const Usuario = sequelize.define(alias, columnas, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Ocupaciones, {
          as: "ocupaciones",
          foreignKey: "ocupacion_id", // Corrected typo here
        });
    };

    return Usuario;
    
};