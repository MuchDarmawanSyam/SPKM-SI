const router = require('express').Router();
const loginController = require('../controllers').login;
const verifyUser = require('../config/middleware');

router.get('/', verifyUser.isLogout, loginController.login);
router.get('/logout', loginController.logout);

// Auth = Proses Login
router.post('/auth', loginController.loginAuth);

module.exports = router;