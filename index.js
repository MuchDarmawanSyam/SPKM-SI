// Mengimpor Config Koneksi MySQL dan modul Express
const express = require('express');
const path = require('path');
const dbMysql = require('./mysql');
const app = express();
const port = 3030;

// Meggunakan Pengelolahan URL/Handler inputan ExpressJS
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Set View dan Template Engine dan folder public
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
// Set libary ekternal
app.use(express.static('public'));

// Melampilkan data Pemohon keanggotaan
app.get('/',(req, res) => {
    let sql = "SELECT * FROM `tbl_permohonan_keanggotaan`";

    dbMysql.query(sql, (error, results, fields) => {
        if(error){
            console.log(error);
            return res.render('pages/index', {
                error: true,
                messages: "Terdapat masalah pada Koneksi NodeJS dengan MySQL..."
            });
        } else {
            console.log(results);

            return res.render('pages/index', {
                error: true,
                dataPemohon: results
            });
        }
    });
});

app.listen(port, console.log("App Running on "+port));