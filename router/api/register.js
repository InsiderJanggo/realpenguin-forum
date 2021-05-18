const {Router} = require("express");
const {CheckAuth} = require("../../utils/checkAuth");
const routes = Router();

routes.get("/register", (req, res) => {
    var username = req.body.user;
    var password = req.body.password;
    res.render("register.ejs", {
        paypalSDK: `https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`
    });
})

module.exports = routes;