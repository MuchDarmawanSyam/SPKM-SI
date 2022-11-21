const router = require('express').Router();
const akunMhsController = require('../controllers').akunMahasiswa;
const verifyUser = require('../config/middleware');
const { akunMahasiswa } = require('../controllers');

router.get('/', verifyUser.isLogin, akunMhsController.showAkunMhs);
router.post('/detail', verifyUser.isLogin, akunMhsController.detailAkunMhs);
router.post('/reset', verifyUser.isLogin, akunMahasiswa.resetPassAkunMhs);

module.exports = router;