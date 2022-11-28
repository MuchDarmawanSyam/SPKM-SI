const router = require('express').Router();
const mhsController = require('../controllers').mahasiswa;
const verifyUser = require('../config/middleware');

router.get('/', verifyUser.isAdmin, mhsController.showMhs);
router.post('/save', verifyUser.isAdmin, mhsController.addMhs);
router.post('/edit', verifyUser.isAdmin, mhsController.getMhs);
router.post('/update', verifyUser.isAdmin, mhsController.updateMhs);
router.post('/delete', verifyUser.isAdmin, mhsController.deleteMhs);

module.exports = router;