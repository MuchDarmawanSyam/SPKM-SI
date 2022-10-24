const router = require('express').Router();
const akunMhsController = require('../controllers').akunMahasiswa;
const verifyUser = require('../config/middleware');

router.get('/', verifyUser.isLogin, akunMhsController.showAkunMhs);

module.exports = router;