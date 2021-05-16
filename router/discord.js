const {Router} = require("express");
const routes = Router();

routes.get("/discord", (req, res) => {
    res.redirect(process.env.DISCORD_SERVER_INVITE);
})

module.exports = routes;