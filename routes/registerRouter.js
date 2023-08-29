let express = require('express');

let router = express.Router();

const registerController = require('../controllers/registerController.js')

router.get('/register', registerController.register);

module.exports = router;