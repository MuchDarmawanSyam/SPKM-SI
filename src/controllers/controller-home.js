module.exports = {
    home(req, res){
        // Mencoba disini untuk pengecekan lvl akun yg login
        // Kemudian pisahkan render masing-masing dengan if else

        res.render("home", {
            url: 'http://localhost:3030/',
            userName:  req.session.nim,
            userLvl: req.session.statuslvlakun,
        });
    }
}