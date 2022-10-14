// Definisikan Router dari Express
const router = require('express').Router();
// Ambil index.js dari Controller dan panggil variabel didalamnya
const registerController = require('../controllers').register;
// Definisikan Middleware
const verifyUser = require('../config/middleware');

// verifyUser.isLogout digunakan utk memastikan hanya user yg belum login yang dapat akses.
// Rute 'http://localhost:3030/register/' digunakan untuk menampilkan form register
router.get('/', verifyUser.isLogout, registerController.formRegister);
// Rute 'http://localhost:3030/register/save' digunakan untuk simpan data yang diinput user
router.post('/save', verifyUser.isLogout, registerController.saveRegister);

// Export agar dibaca oleh Express
module.exports = router;