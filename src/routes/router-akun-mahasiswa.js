const router = require('express').Router();
const akunMhsController = require('../controllers').akunMahasiswa;
const verifyUser = require('../config/middleware');

router.get('/', verifyUser.isLogin, akunMhsController.showAkunMhs);
router.post('/detail', verifyUser.isLogin, akunMhsController.detailAkunMhs);
router.post('/reset', verifyUser.isLogin, akunMhsController.resetPassAkunMhs);

module.exports = router;