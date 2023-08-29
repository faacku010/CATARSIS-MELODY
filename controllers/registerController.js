const path = require('path');
const router = require('../routes/registerRouter');

const registerController = {
    register: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/register.html'))
    }
};

module.exports = registerController;