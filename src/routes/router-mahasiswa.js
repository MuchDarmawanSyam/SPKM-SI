const router = require('express').Router();
const mhsController = require('../controllers').mahasiswa;
const verifyUser = require('../config/middleware');

router.get('/', verifyUser.isLogin, mhsController.showMhs);
router.post('/save', verifyUser.isLogin, mhsController.addMhs);

module.exports = router;