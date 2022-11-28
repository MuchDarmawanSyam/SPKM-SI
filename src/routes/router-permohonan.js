const router = require('express').Router();
const permohonan = require('../controllers').permohonan;
const verifyUser = require('../config/middleware');

router.get('/', verifyUser.isAdmin, permohonan.showPermohonan);
router.post('/proses', verifyUser.isAdmin, permohonan.processPengajuan);

module.exports = router;