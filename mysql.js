// Import Modul MySQL
const mysql = require("mysql");

// Konfigurasi database
let dbConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test_simple_crud"
});

// Koneksi database
dbConnect.connect((err) => {
    if(err) throw err;
    console.log("Membuat Koneksi aplikasi ke mysql berhasil...")
});

// Eksport modul Koneksi MySQL
module.exports = dbConnect;
// app.listen(3030, console.log(
//     `App listening to port 3030, Running at: ${new Date().toISOString().replace('T', ' ').substring(0, 19)}`
// ));