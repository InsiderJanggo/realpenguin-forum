const express = require("express");
const lingua  = require('lingua');
const passport = require('passport');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
const { connectDB } =  require("./db.config");
var cookieParser = require('cookie-parser')

//KONEK KE DATABASE
connectDB(process.env.MONGODB_URI_DEV);


// load the cookie-parsing middleware
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//FILE STATIK
app.use(express.static('public'));
//SET EJS JADI RENDER HALAMAN DEFAULT
app.set(require("ejs").renderFile);

app.use(lingua(app, {
    defaultLocale: 'en',
    path: __dirname + '/locales',
    storageKey: 'lang', // http://localhost:9000/?lang=ja
    /*cookieOptions: {
        domain: 'localhost:9000',    // to allow subdomains access to the same cookie, for instance
        path: '/',            // to restrict the language cookie to a path
        httpOnly: false,          // if you need access to this cookie from javascript on the client
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),  // expire in 1 day instead of 1 year
        secure: false              // for serving over https
    }*/
}));

//GET REQUEST BUAT http://localhost:9000/
app.get("/", (req, res) => {
    res.render("index.ejs", {
        paypalSDK: `https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`
    });
})

app.get("/discord", require("./router/discord"));

app.get("/login", require("./router/api/login"));

app.get("/acknowledgements", require("./router/acknowledgements"));

app.get("/api/discord", require("./router/api/discord"));

app.get("/register", require("./router/api/register"));

app.listen(PORT, () => {
    console.log(`WEBAPP LISTENING AT PORT ${PORT}`);
})