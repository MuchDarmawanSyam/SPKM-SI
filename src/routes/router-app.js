// ---- Router untuk Mengkses halaman setelah login ----
const router = require('express').Router();
const homeController = require('../controllers').home;
const verifyUser = require('../config/middleware');

router.get('/', verifyUser.isLogin, homeController.home);

module.exports = router;