const config = require('../config/mysql');
const mysql = require('mysql');
let pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.log(err);
});
module.exports = {

    // Fungsi tampilkan Halaman Data Mahasiswa
    showMhs(req, res){

        pool.getConnection(function(err, connection) {
            if (err) throw err;
            // Tampilka Daftar Anggota Mahasiswa Selain Admin
            let sql = "SELECT * FROM `tbl_mahasiswa` WHERE `nim_mahasiswa` != 'Admin1'";
            connection.query(
                sql, function(error, results){
                    if (error) throw error;
                    res.render("admin_pages/mahasiswa",{
                        posisiHlmn: ['Mahasiswa SI','Data Mahasiswa SI'],
                        userNim:  req.session.nim,
                        userLvl: req.session.statuslvlakun,
                        dataMhs: results,
                    });
                }
            );
        })


    }
}