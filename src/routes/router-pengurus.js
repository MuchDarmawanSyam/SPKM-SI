const router = require('express').Router();
const pengurusController = require('../controllers').pengurus;
const verifyUser = require('../config/middleware');

router.get('/', verifyUser.isAdmin, pengurusController.showPengurus);
router.post('/get', verifyUser.isAdmin, pengurusController.getMhsAngkatan);

module.exports = router;