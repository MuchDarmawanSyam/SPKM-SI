const router = require('express').Router();
const mhsController = require('../controllers').mahasiswa;
const verifyUser = require('../config/middleware');

router.get('/', verifyUser.isLogin, mhsController.showMhs);
router.post('/save', verifyUser.isLogin, mhsController.addMhs);
router.post('/edit', verifyUser.isLogin, mhsController.getMhs);
router.post('/update', verifyUser.isLogin, mhsController.updateMhs);
router.post('/delete', verifyUser.isLogin, mhsController.deleteMhs);

module.exports = router;