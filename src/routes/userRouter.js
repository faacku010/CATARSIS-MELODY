const express = require('express');
const router = express.Router();
const multer = require('multer');

const userController = require("../controllers/userController.js");


router.get('/registro', userController.register);
/* router.post('/registro', userController); */

router.get('/login', userController.login);

module.exports = router;