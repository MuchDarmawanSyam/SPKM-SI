const login = require('./controller-login');
const home = require('./controller-home');
const register = require('./controller-register');
const mahasiswa = require('./controller-mahasiswa');
const akunMahasiswa = require('./controller-akun-mahasiswa');

module.exports = {
    login,
    home,
    register,
    mahasiswa,
    akunMahasiswa
};