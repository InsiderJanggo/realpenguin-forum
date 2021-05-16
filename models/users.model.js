const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    fullname: String,
    userID: Number
});

module.exports = model("Users", userSchema);