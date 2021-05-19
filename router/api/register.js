const {Router} = require("express");
const {CheckAuth} = require("../../utils/checkAuth");
const {rand} = require("../../utils/rand");
const routes = Router();

routes.get("/register", (req, res) => {
    var username = req.body.user;
    var password = req.body.password;
    res.render("register.ejs", {
        paypalSDK: `https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`,
        randNumber: rand(20)
    });
})

module.exports = routes;