// Impor configurasi Mysql
const config = require('../config/mysql');
// Impor modul mysql
let mysql = require('mysql');
// Impor modul body-parser

// Buat Koneksi database
let pool = mysql.createPool(config);


// Kirim error jika koneksi database gagal
pool.on('error',(err) => {
    console.log(err);
});


module.exports = {
    // Fungsi untuk merender file register yang ada di folder 'views/register.ejs'
    formRegister(req, res){
        res.render("register",{
            url: 'http://localhost:3030/',
        });
    },
    // Fungsi untuk menyimpan data
    saveRegister(req, res){
        // Tampung inputan user keadalam variabel
        let namaPemohon = req.body.nama_permohonan_keanggotaan;
        let nimPemohon = req.body.nim_permohonan_keanggotaan;
        let genderPemohon = req.body.gender_permohonan_keanggotaan;
        let pesanPemohon = req.body.pesan_permohonan_keanggotaan;
        // Pastikan semua variabel terisi
        if(namaPemohon && nimPemohon && genderPemohon && pesanPemohon){
            // Panggil koneksi dan eksekusi query
            pool.getConnection(function(err, connection){
                if(err) throw err;
                connection.query(
                    "INSERT INTO `tbl_permohonan_keanggotaan`(`id_permohonan_keanggotaan`, `nama_permohonan_keanggotaan`, `nim_permohonan_keanggotaan`, `gender_permohonan_keanggotaan`, `pesan_permohonan_keanggotaan`) VALUES (?,?,?,?,?)", ['', namaPemohon, nimPemohon, genderPemohon, pesanPemohon], function (error, results){
                        if (error) throw error;
                        req.flash('color', 'success');
                        req.flash('status', 'Yes..');
                        req.flash('message', 'Permohonan berhasi terkirim.');
                        // Kembali ke halaman login
                        res.redirect('/login');
                    });
                // Koneksi selesai
                connection.release();
            })
        } else {
            res.redirect('/login');
            res.end();
        }
    }
};