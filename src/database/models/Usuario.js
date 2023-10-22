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
            null: true
        },
        apellido: {
            type: dataTypes.STRING(100)
        },
        correo: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING

        },
        imagen_perfil: {
            type: dataTypes.STRING(100)

        }
    }

    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    const Usuario = sequelize.define(alias, columnas, config);
    return Usuario;
}