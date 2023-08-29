let express = require('express');
let router = express.Router();

const loginController = require('../controllers/loginController.js');

router.get('/login', loginController.login);

module.exports = router;