const {Router} = require("express");
const {CheckAuth} = require("../../utils/checkAuth");
const routes = Router();

routes.get("/login",(req, res) => {
    var username = req.body.user;
    var password = req.body.password;
    res.render("login.ejs");
});

module.exports = routes;