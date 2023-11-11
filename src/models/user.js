// guardar al usuario en la DB
// buscar al usuario que se queire loguear por su email
// buscar a un usuario por su ID
// Editar la informacion de un usuario
// eliminar a un usuario de la DB 

const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');

const user = {
    filename: /* '../data/usersDataBase.json', */ usersFilePath,
     
    getData: function () {
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'));
    },

    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },

    findAll: function () {
        return this.getData();
    },

    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(userData);
        fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },
    
    delete: function () {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.filename, JSON.stringify(finalUsers, null, ' '));
        return true;
    }

 }

/*  console.log(user.getData()); */

 module.exports = user;