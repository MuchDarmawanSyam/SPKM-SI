// Middleware Custom.
// File ini berfungsi sebagai middleware yang akan memproteksi pemanggilan controller dari router sebelum dijalankan.
// Buat middleware pengecek login sebagai admin atau pengurus atau mahasiswa agar mahasiswa tidak bisa mengakses halaman admin

module.exports = {
    isLogin(req, res, next){
        if(req.session.loggedin === true){
            next();
            return;
        } else {
            req.session.destroy(function(err){
                res.redirect('/login');
            })
        }
    },
    isLogout(req, res, next){
        if(req.session.loggedin !== true){
            next();
            return;
        }
        res.redirect('/');
    }
};