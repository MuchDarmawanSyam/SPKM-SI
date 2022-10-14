// ---- Router untuk Mengkses halaman setelah login ----
const router = require('express').Router();
const homeController = require('../controllers').home;
const profilController = require('../controllers').profil;
const verifyUser = require('../config/middleware');

router.get('/', verifyUser.isLogin, homeController.home);
router.get('/profile', verifyUser.isLogin, profilController.profil);

module.exports = router;