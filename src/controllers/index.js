// Auth
const login = require('./controller-login');
const home = require('./controller-home');
const register = require('./controller-register');
// Mahasiswa
const mahasiswa = require('./controller-mahasiswa');
const akunMahasiswa = require('./controller-akun-mahasiswa');
// Permohonan
const permohonan = require('./controller-permohonan');

module.exports = {
    login,
    home,
    register,
    mahasiswa,
    akunMahasiswa,
    permohonan
};