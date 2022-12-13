// Middleware Custom.
// File ini berfungsi sebagai middleware yang akan memproteksi pemanggilan controller dari router sebelum dijalankan.

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
    isAdmin(req, res, next){
        if(req.session.loggedin === true){
            if(req.session.statuslvlakun == "Admin"){
                next();
                return;
            }else{
                res.redirect('/');
            }
            
        } else {
            req.session.destroy(function(err){
                res.redirect('/login');
            })
        }
    },
    isMahasiswa(req, res, next){
        if(req.session.loggedin === true){
            if(req.session.statuslvlakun == "Mahasiswa"){
                next();
                return;
            }else{
                res.redirect('/');
            }
            
        } else {
            req.session.destroy(function(err){
                res.redirect('/login');
            })
        }
    },
    isPengurus(req, res, next){
        if(req.session.loggedin === true){
            if(req.session.statuslvlakun == "Pengurus"){
                next();
                return;
            }else{
                res.redirect('/');
            }
            
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