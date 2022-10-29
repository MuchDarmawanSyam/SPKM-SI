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
            // Tampilkan Daftar Anggota Mahasiswa Selain Admin
            let sql = "SELECT * FROM `tbl_mahasiswa` WHERE `nim_mahasiswa` != 'Admin1'";
            connection.query(
                sql, function(error, results){
                    if (error) throw error;
                    res.render("admin_pages/mahasiswa",{
                        posisiHlmn: ['Mahasiswa SI','Data Mahasiswa SI'],
                        userNim:  req.session.nim,
                        userLvl: req.session.statuslvlakun,
                        dataMhs: results, 
                        colorFlash: req.flash('color'),
                        statusFlash: req.flash('status'),
                        pesanFlash: req.flash('message'),
                    });
                }
            );
        })
    },
    addMhs(req, res){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            // tangkap data dari modal form
            nimMhs = req.body.nim_mahasiswa;
            namaMhs = req.body.nama_mahasiswa;
            genderMhs = req.body.gender_mahasiswa;
            semesterMhs = req.body.semester_mahasiswa;

            // Menambahkan Anggota Mahasiswa
            let sql = "INSERT INTO `tbl_mahasiswa`(`nim_mahasiswa`, `nama_mahasiswa`, `gender_mahasiswa`, `alamat_mahasiswa`, `no_telp_mahasiswa`, `kelas_mahasiswa`, `id_semester`) VALUES (?, ?, ?, ?, ?, ?, ?)";
            connection.query(sql, [nimMhs, namaMhs, genderMhs, '', '', '', semesterMhs], function(error, results){
                if (error) throw error;
                req.flash('color', 'success');
                req.flash('status', 'Data Added');
                req.flash('message', 'Menambahkan mahasiswa '+namaMhs+' berhasi.');

                res.redirect('/admin/mahasiswa');
            });
        })
    }
}