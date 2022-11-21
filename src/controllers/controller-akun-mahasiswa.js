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
                        colorFlash: req.flash('color'),
                        statusFlash: req.flash('status'),
                        pesanFlash: req.flash('message'),
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
    },
    resetPassAkunMhs(req, res){ //API akun Mahasiswa
        pool.getConnection(function(err, connection){
            if(err) throw err;
            nimMhs = req.body.nim_reset_akun;
            // 4 angka random
            minimalNumber = 1000;
            maksimalNumber = 9999;
            randomNumber = Math.floor(Math.random() * (maksimalNumber - minimalNumber) ) + minimalNumber;
            // 5 angka terakhir dari nim
            lastNim = nimMhs.slice(8, 13);
            // data untuk ditambahkan
            passMhs = "mhspass"+lastNim+randomNumber;
            let sql = "UPDATE `tbl_akun` SET `password_akun`=SHA1(?) WHERE `nim_mahasiswa`=?";
            connection.query(
                sql, [passMhs, nimMhs], function(error, results){
                    if(error) throw error;
                    passResult = {nimMhs:nimMhs,passMhs:passMhs};
                    res.json(passResult);
                })
        })
    }
}