const {Router} = require("express");
const routes = Router();

routes.get("/acknowledgements", (req, res) => {
    res.render("acknowledgements.ejs")
})

module.exports = routes;