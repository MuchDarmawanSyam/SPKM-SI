const config = require('../config/mysql');
const mysql = require('mysql');
const dateNow = new Date();
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
            let sql = "SELECT * FROM `tbl_permohonan_keanggotaan` ORDER BY `id_permohonan_keanggotaan` DESC";
            connection.query(
                sql, function(error, results){
                    if (error) throw error;
                    res.render("admin_pages/pengajuan",{
                        posisiHlmn: ['SPKM','Ijin Keanggotaan'],
                        userNim:  req.session.nim,
                        userLvl: req.session.statuslvlakun,
                        dataPengajuan: results, 
                        colorFlash: req.flash('color'),
                        statusFlash: req.flash('status'),
                        pesanFlash: req.flash('message'),
                    });
                }
            );
        })
    },
    processPengajuan(req, res){
        pool.getConnection(function(err, connection) {
            if (err) throw err;

            nimPengaju = req.body.nimPengaju;
            statusProses = req.body.statusProses;
            if (statusProses == "terima"){
                let sql = "SELECT * FROM `tbl_permohonan_keanggotaan` WHERE `nim_permohonan_keanggotaan` = ?";
                connection.query(
                    sql, [nimPengaju], function(error, results){
                        if (error) throw error;
    
                        namaMhs = results[0].nama_permohonan_keanggotaan;
                        genderMhs = results[0].gender_permohonan_keanggotaan;
                        emailMhs = results[0].email_permohonan_keanggotaan;
                        semesterMhs = 1; // Default
                        addBy = req.session.nim;
                        addDate = dateNow.getFullYear()+'-'+dateNow.getMonth()+'-'+dateNow.getDate();

                        // kelola data yang diinput untuk tabel akun mahasiswa sesuai kerangka password
                        // 4 angka random
                        minimalNumber = 1000;
                        maksimalNumber = 9999;
                        randomNumber = Math.floor(Math.random() * (maksimalNumber - minimalNumber) ) + minimalNumber;
                        // 5 angka terakhir dari nim
                        lastNim = nimPengaju.slice(8, 13);
                        // data untuk ditambahkan
                        usrMhs = nimPengaju;
                        passMhs = "mhspass"+lastNim+randomNumber;

                        let sql2 = "INSERT INTO `tbl_mahasiswa`(`nim_mahasiswa`, `nama_mahasiswa`, `gender_mahasiswa`, `email_mahasiswa`, `alamat_mahasiswa`, `no_telp_mahasiswa`, `kelas_mahasiswa`, `id_semester`, `yang_menambah_mahasiswa`, `waktu_ditambahkan_mahasiswa`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                        connection.query(
                            sql2, [nimPengaju, namaMhs, genderMhs, emailMhs, '-', '-', '-', semesterMhs, addBy, addDate], function(error2, results){
                                if(error2) throw error2;
                                let sql3 = "INSERT INTO `tbl_akun`(`id_akun`, `username_akun`, `password_akun`, `id_lvl_akun`, `nim_mahasiswa`) VALUES (?, ?, SHA1(?), ?, ?)";
                                connection.query(
                                    sql3, ['', usrMhs, passMhs, 1, nimPengaju], function(error3, results){
                                        if(error3) throw error3;
                                        let sql4 = "DELETE FROM `tbl_permohonan_keanggotaan` WHERE `nim_permohonan_keanggotaan` = ?";
                                        connection.query(
                                            sql4, [nimPengaju], function(error4, results){
                                                if(error4) throw error4;
                                                req.flash('color', 'success');
                                                req.flash('status', 'Data Added');
                                                req.flash('message', 'Menerima keanggotaan mahasiswa ('+passMhs+' '+emailMhs+').');
                                                res.redirect('/admin/pengajuan');
                                            });
                                    });
                            });
                    });
            }else if(statusProses == "tolak"){
                let sql = "DELETE FROM `tbl_permohonan_keanggotaan` WHERE `nim_permohonan_keanggotaan` = ?";
                connection.query(
                    sql, [nimPengaju], function(error, results){
                        if (error) throw error;
                        
                        req.flash('color', 'success');
                        req.flash('status', 'Data Deleted');
                        req.flash('message', 'Menolak keanggptaan mahasiswa ('+nimPengaju+').');
                        res.redirect('/admin/pengajuan');
                    });
            }else{
                res.redirect('/admin/pengajuan');
            }
        })
    }
}