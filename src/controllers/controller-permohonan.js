const config = require('../config/mysql');
const mysql = require('mysql');
let pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.log(err);
});
module.exports = {
    // Fungsi tampilkan Halaman Data Pengajuan Keanggotaan Mahasiswa
    showPermohonan(req, res){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            // Tampilkan Daftar Pengajuan Keanggotaan Mahasiswa
            let sql = "SELECT * FROM `tbl_permohonan_keanggotaan`";
            connection.query(
                sql, function(error, results){
                    if (error) throw error;
                    res.render("admin_pages/pengajuan",{
                        posisiHlmn: ['SPKM','Ijin Keanggotaan'],
                        userNim:  req.session.nim,
                        userLvl: req.session.statuslvlakun,
                        dataPengajuan: results,
                    });
                }
            );
        })
    }
}