const config = require('../config/mysql');

const mysql = require('mysql');
let pool = mysql.createPool(config);

pool.on('error', (err) =>{
    console.log(err);
});

module.exports = {
    // Render tampilan untuk login untuk halaman 'views/login.ejs'
    login(req, res){
        res.render("login", {
            url: 'http://localhost:3030/',
            colorFlash: req.flash('color'),
            statusFlash: req.flash('status'),
            pesanFlash: req.flash('message'),
        });
    },
    // Fungsi Logiin | Kirim data yang diiput user dengan metode POST
    loginAuth(req, res){
        let username = req.body.username_akun;
        let password = req.body.password_akun;
        if (username && password){
            pool.getConnection(function(err, connection) {
                if (err) throw err;
                connection.query(
                  "SELECT * FROM `tbl_akun` WHERE `username_akun` = ? AND `password_akun` = SHA1(?)", [username, password], function(error, results){
                    if(error) throw error;
                    if(results.length > 0){
                        // Jika username dan password yang diinput ditemukan
                        if(results[0].id_lvl_akun == 3){
                            // Jika yang login seorang Admin
                            req.session.loggedin = true;
                            req.session.nim = results[0].nim_mahasiswa;
                            req.session.statuslvlakun = "Admin";
                            res.redirect('/admin');
                        } else if (results[0].id_lvl_akun == 2){
                            // Jika yang login seorang Pengurus
                            req.session.loggedin = true;
                            req.session.nim = results[0].nim_mahasiswa;
                            req.session.statuslvlakun = "Pengurus";
                            res.redirect('/mahasiswa');
                        } else if (results[0].id_lvl_akun == 1){
                            // Jika yang login seorang Mahasiswa
                            req.session.loggedin = true;
                            req.session.nim = results[0].nim_mahasiswa;
                            req.session.statuslvlakun = "Mahasiswa";
                            res.redirect('/');
                        }else{
                            // Jika login tapi tidak memiliki lvl terdaftar
                            req.flash('color', 'danger');
                            req.flash('status', 'Oops..');
                            req.flash('message', 'Akun tidak dikenal');
                            res.redirect('/login');
                        }
                    } else {
                        // Jika username & password yang diinput tdk ditemukan
                        req.flash('color', 'danger');
                        req.flash('status', 'Oops..');
                        req.flash('message', 'Akun tidak terdaftar');
                        res.redirect('/login');
                    }
                  });

                connection.release();
            })
        } else {
            // Jika inputan tidak terisi
            // Masalahnya disini
            req.flash('color', 'danger');
            req.flash('status', 'Oops..');
            req.flash('message', 'Username dan Password harus diisi.');
            res.redirect('/login');
            res.end();
        }
    },
    //Fungsi untuk logout | Cara memanggilnya menggunakan url/rute 'http://localhost:3030/login/logout'
    logout(req, res){
        // Hapus sesi user dari browser
        req.session.destroy((err) => {
            if(err){
                return console.log(err);
            }
            // hapus Cookie
            res.clearCookie('secretname');
            res.redirect('/login');
        });
    },
}