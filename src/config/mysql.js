// Konfigurasi database
let dbConfig = {
    multipleStatements: true,
    host: "localhost",
    user: "root",
    password: "",
    database: "db_spkm",
};

// Koneksi database
// dbConnect.connect((err) => {
//     if(err) throw err;
//     console.log("Membuat Koneksi aplikasi ke mysql berhasil...")
// });

// Eksport modul Koneksi MySQL
module.exports = dbConfig;