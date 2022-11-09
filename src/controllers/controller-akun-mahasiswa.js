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
    },
    detailAkunMhs(req, res){ // API Akun Mahasiswa
        pool.getConnection(function(err, connection){
            if (err) throw err;
            nimMhs = req.body.id;

            let sql = "SELECT tbl_mahasiswa.nama_mahasiswa, tbl_mahasiswa.gender_mahasiswa, tbl_akun.username_akun, tbl_akun.password_akun, tbl_akun.id_lvl_akun FROM tbl_mahasiswa INNER JOIN tbl_akun ON tbl_mahasiswa.nim_mahasiswa = tbl_akun.nim_mahasiswa WHERE tbl_akun.nim_mahasiswa = ?";
            connection.query(sql, [nimMhs], function(error, results){
                if (error) throw error;
                res.json(results[0]);
            });
        })
    }
}