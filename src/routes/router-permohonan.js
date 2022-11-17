const router = require('express').Router();
const permohonan = require('../controllers').permohonan;
const verifyUser = require('../config/middleware');

router.get('/', verifyUser.isLogin, permohonan.showPermohonan);
router.post('/proses', verifyUser.isLogin, permohonan.processPengajuan);

module.exports = router;