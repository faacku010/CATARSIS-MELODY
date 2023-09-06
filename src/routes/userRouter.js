const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController.js");


router.get('/registro', userController.register);

router.get('/login', userController.login);

module.exports = router;