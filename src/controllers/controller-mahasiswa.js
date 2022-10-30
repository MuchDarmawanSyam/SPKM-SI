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

            // kelola data yang diinput untuk tabel akun mahasiswa sesuai kerangka password
            // 4 angka random
            minimalNumber = 1000;
            maksimalNumber = 9999;
            randomNumber = Math.floor(Math.random() * (maksimalNumber - minimalNumber) ) + minimalNumber;
            // 5 angka terakhir dari nim
            lastNim = nimMhs.slice(8, 13);
            // data untuk ditambahkan
            usrMhs = nimMhs;
            passMhs = "mhspass"+lastNim+randomNumber;

            // Menambahkan Anggota Mahasiswa
            let sql = "INSERT INTO `tbl_mahasiswa`(`nim_mahasiswa`, `nama_mahasiswa`, `gender_mahasiswa`, `alamat_mahasiswa`, `no_telp_mahasiswa`, `kelas_mahasiswa`, `id_semester`) VALUES (?, ?, ?, ?, ?, ?, ?)";
            connection.query(sql, [nimMhs, namaMhs, genderMhs, '-', '-', '-', semesterMhs], function(error, results){
                if (error) throw error;
                let sql2 = "INSERT INTO `tbl_akun`(`id_akun`, `username_akun`, `password_akun`, `id_lvl_akun`, `nim_mahasiswa`) VALUES (?, ?, SHA1(?), ?, ?)";
                connection.query(sql2, ['', usrMhs, passMhs, 1, nimMhs], function(error2, results2){
                    if (error2) throw error2;
                    req.flash('color', 'success');
                    req.flash('status', 'Data Added');
                    req.flash('message', 'Menambahkan mahasiswa '+passMhs+' berhasil.');
                    // Saat Ini dibranch doublesql
                    // Buat Fungsi tambah data ke tabel akun mahasiswa didalam fungsi tambah data mahasiswa
                    // tambah dibawah pengecekan error
                    res.redirect('/admin/mahasiswa');
                });
            });
        })
    }
}