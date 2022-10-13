// Import Modul MySQL
const mysql = require("mysql");

// Konfigurasi database
let dbConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_spkm"
});

// Koneksi database
dbConnect.connect((err) => {
    if(err) throw err;
    console.log("Membuat Koneksi aplikasi ke mysql berhasil...")
});

// Eksport modul Koneksi MySQL
module.exports = dbConnect;