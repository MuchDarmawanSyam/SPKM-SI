const config = require('../config/mysql');
const mysql = require('mysql');
let pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.log(err);
});
module.exports = {
    // Fungsi tampilkan Halaman Data Akun Mahasiswa
    showAkunMhs(req, res){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            // Tampilkan Daftar Akun Anggota Mahasiswa Selain Admin
            let sql = "SELECT * FROM `tbl_akun` WHERE `nim_mahasiswa` != 'Admin1'";
            connection.query(
                sql, function(error, results){
                    if (error) throw error;
                    res.render("admin_pages/akun-mahasiswa",{
                        posisiHlmn: ['Mahasiswa SI','Data Akun Mahasiswa SI'],
                        userNim:  req.session.nim,
                        userLvl: req.session.statuslvlakun,
                        dataAkunMhs: results,
                    });
                }
            );
        })
    }
}