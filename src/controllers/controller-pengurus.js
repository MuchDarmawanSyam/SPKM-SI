const config = require('../config/mysql');
const mysql = require('mysql');
const dateNow = new Date();
let pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.log(err);
});
module.exports = {
    showPengurus(req, res){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            let sql = "SELECT * FROM `tbl_pengurus`";
            connection.query(
                sql, function(error, results){
                    if (error) throw error;
                    res.render("admin_pages/pengurus",{
                        posisiHlmn: ['Pengurus','Data Pengurus SI'],
                        userNim:  req.session.nim,
                        userLvl: req.session.statuslvlakun,
                        dataPengurus: results,
                        colorFlash: req.flash('color'),
                        statusFlash: req.flash('status'),
                        pesanFlash: req.flash('message'),
                    });
                }
            );
        })
    },
    getMhsAngkatan(req, res){ // API Mahasiswa by Tahun Angkatan
        pool.getConnection(function(err, connection){
            if (err) throw err;
            yearMhs = req.body.year+'%';

            let sql = "SELECT tbl_mahasiswa.nim_mahasiswa, tbl_mahasiswa.nama_mahasiswa, tbl_mahasiswa.gender_mahasiswa, tbl_mahasiswa.id_semester FROM tbl_mahasiswa INNER JOIN tbl_akun ON tbl_akun.nim_mahasiswa = tbl_mahasiswa.nim_mahasiswa WHERE tbl_akun.nim_mahasiswa LIKE ? AND tbl_akun.id_lvl_akun = 1";
            connection.query(sql, [yearMhs], function(error, results){
                if (error) throw error;
                res.json(results);
            });
        })
    },
}