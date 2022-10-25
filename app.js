//  ---------------- Mendefinisikan Config Koneksi MySQL dan Modul-Modul ----------------
const express = require('express');
const path = require('path');
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
// Mahasiswa Routes
const mhsRoutes = require('./src/routes/router-mahasiswa');
const akunMhsRoutes = require('./src/routes/router-akun-mahasiswa');
// Permohonan Keanggotaan Routes
const  permohonanRoutes = require('./src/routes/router-permohonan');
// ---------------- END  ----------------


// ---------------- Penanganan URL, Session dan Flash Message ----------------
// Meggunakan Pengelolahan URL/Handler inputan ExpressJS
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Atur Konfigurasi Session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'm@h@sisw@SI',
    name: 'secretName',
    cookie: {
        sameSite: true,
        maxAge: 600000 // 600 Detik / 10 Menit
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
// Mahasiswa Routes
app.use('/admin/mahasiswa', mhsRoutes);
app.use('/admin/akun-mahasiswa', akunMhsRoutes);
// Permohonan Routes
app.use('/admin/pengajuan', permohonanRoutes);
// Index Routes
app.use('/', appRoutes);
// ---------------- END ----------------

// Running App
app.listen(port, console.log("App Running on "+port));