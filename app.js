// Mendefinisikan Config Koneksi MySQL dan Modul yang digunakan
const express = require('express');
const path = require('path');
const dbMysql = require('./src/config/mysql');
const session = require('express-session');
const flash = require('express-flash');
const app = express();
const port = 3030;

// Mendefinisikan 

// Meggunakan Pengelolahan URL/Handler inputan ExpressJS
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Set View
app.set('views', path.join(__dirname,'views'));
// Set Template Engine
app.set('view engine', 'ejs');
// Set folder libary ekternal / static
app.use(express.static('public'));


// Ini untuk halaman Pengurus & Admin
// app.get('/',(req, res) => {
//     let sql = "SELECT * FROM `tbl_permohonan_keanggotaan`";

//     dbMysql.query(sql, (error, results, fields) => {
//         if(error){
//             console.log(error);
//             return res.render('mhs_pages/index', {
//                 error: true,
//                 messages: "Terdapat masalah pada Koneksi NodeJS dengan MySQL..."
//             });
//         } else {
//             console.log(results);

//             return res.render('mhs_pages/index', {
//                 error: true,
//                 dataPemohon: results
//             });
//         }
//     });
// });

app.listen(port, console.log("App Running on "+port));