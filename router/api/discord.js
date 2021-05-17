const {Router} = require("express");
const {CheckAuth} = require("../../utils/checkAuth");
const passport = require('passport');
const { Strategy } = require('passport-discord');
const routes = Router();

routes.use(passport.initialize())
routes.use(passport.session());

routes.get("/api/discord", (req, res) => {
    passport.serializeUser((user, done) => done(null, user));
	passport.deserializeUser((obj, done) => done(null, obj));

	const scopes = ['identify'];

    passport.use(new Strategy({
		clientID: process.env.DISCORD_CLIENT_ID,
		clientSecret: process.env.DISCORD_CLIENT_SECRET,
		callbackURL: `http://localhost:${process.env.PORT}`+'/api/login',
		scope: scopes,
	}, function (accessToken, refreshToken, me, done) {
		process.nextTick(() => done(null, me));
	}));
});

module.exports = routes;