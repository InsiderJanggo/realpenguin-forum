const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    fullname: String,
    userID: Number,
    createdDate: { type: Date, default: Date.now },
    fullName: String
});

userSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = model("Users", userSchema);