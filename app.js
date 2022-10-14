//  ---------------- Mendefinisikan Config Koneksi MySQL dan Modul-Modul ----------------
const express = require('express');
const path = require('path');
const dbMysql = require('./src/config/mysql');
const session = require('express-session');
const flash = require('express-flash');
const app = express();
const port = 3030;
// ---------------- END  ----------------


// ---------------- Mendefinisikan Router  ----------------
// Auth Routes
const appRoutes = require('./src/routes/router-app');
const loginRoutes = require('./src/routes/router-login');
const registerRoutes = require('./src/routes/router-register');
// ---------------- END  ----------------


// ---------------- Penanganan URL, Session dan Flash Message ----------------
// Meggunakan Pengelolahan URL/Handler inputan ExpressJS
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Atur Konfigurasi Session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'm@h@sisw@SI',
    name: 'secretName',
    cookie: {
        sameSite: true,
        maxAge: 60000
    },
}))
app.use(flash());
// ---------------- END ----------------


// ---------------- Pengaturan Views dan Engine View ----------------
// Atur View
app.set('views', path.join(__dirname,'views'));
// Atur Template Engine
app.set('view engine', 'ejs');
// Atur folder library ekternal / static
app.use(express.static('public'));
// ---------------- END ----------------


// ---------------- Gunakan Router yang telah didefinisikan ----------------
// Auth Routes
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/', appRoutes);
// ---------------- END ----------------


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