module.exports = {
    home(req, res){
        // Mencoba disini untuk pengecekan lvl akun yg login
        // Kemudian pisahkan render masing-masing dengan if else

        res.render("mhs_pages/index", {
            url: 'http://localhost:3030/',
            userNim:  req.session.nim,
            userLvl: req.session.statuslvlakun,
        });
    }
}