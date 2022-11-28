const router = require('express').Router();
const akunMhsController = require('../controllers').akunMahasiswa;
const verifyUser = require('../config/middleware');

router.get('/', verifyUser.isAdmin, akunMhsController.showAkunMhs);
router.post('/detail', verifyUser.isAdmin, akunMhsController.detailAkunMhs);
router.post('/reset', verifyUser.isAdmin, akunMhsController.resetPassAkunMhs);

module.exports = router;