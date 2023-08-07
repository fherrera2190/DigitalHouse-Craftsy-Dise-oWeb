const express = require('express');
const usersControllers = require('../controllers/usersControllers');
const router = express.Router();

/* GET users listing. */
router.get('/register', usersControllers.register);
router.get('/login', usersControllers.login);
router.get('/profile', usersControllers.profile);

module.exports = router;
