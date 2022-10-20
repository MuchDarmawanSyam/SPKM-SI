module.exports = {
    home(req, res){
        // Pembagian Halaman Home Dinamis
        // Pengurus juga dianggap seorang mahasiswa jadi menggunakan halaman yang sama
        let usrlvl = req.session.statuslvlakun;
        if(usrlvl == "Mahasiswa"){
            res.render("mhs_pages/index", {
                url: 'http://localhost:3030/mhs_pages/',
                userNim:  req.session.nim,
                userLvl: req.session.statuslvlakun,
            });
        }else if (usrlvl == "Admin"){
            res.render("admin_pages/index", {
                url: 'http://localhost:3030/admin-pages/',
                userNim:  req.session.nim,
                userLvl: req.session.statuslvlakun,
            });
        }
    }
}