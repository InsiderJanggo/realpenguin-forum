const {Router} = require("express");
const routes = Router();

routes.get("/acknowledgements", (req, res) => {
    res.render("acknowledgements.ejs", {
        paypalSDK: `https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`
    })
})

/*
    https://www.deepl.com/
    https://emojipedia.org
    
*/

module.exports = routes;