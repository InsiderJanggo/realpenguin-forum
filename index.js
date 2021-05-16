const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
const { connectDB } =  require("./db.config");
var cookieParser = require('cookie-parser')

//KONEK KE DATABASE
connectDB(process.env.MONGODB_URI_DEV);


// load the cookie-parsing middleware
app.use(cookieParser());

//FILE STATIK
app.use(express.static('public'));
//SET EJS JADI RENDER HALAMAN DEFAULT
app.set(require("ejs").renderFile);

//GET REQUEST BUAT http://localhost:9000/
app.get("/", (req, res) => {
    res.render("index.ejs", {
        headTitle: "RealPenguin Forum | Home",
        navTitle: "RealPenguin",
        paypalSDK: `https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`
    });
})

app.get("/discord", require("./router/discord"));

app.listen(PORT, () => {
    console.log(`WEBAPP LISTENING AT PORT ${PORT}`);
})