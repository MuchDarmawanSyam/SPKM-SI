module.exports = {
    home(req, res){
        res.render("home", {
            url: 'http://localhost:3030/',
            userName:  req.session.nim,
            userLvl: req.session.statuslvlakun,
        });
    }
}