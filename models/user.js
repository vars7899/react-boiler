const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50,
    },
    email: {
        type: String,
        trim: true, //it will remove any space in input
        unique: true, //1 means true
    },
    password: {
        type: String,
        minLength: 5,
    },
    lastname: {
        type: String,
        maxLength: 50,
    },
    role: {
        type: Number,
        default: 0,
    },
    token: {
        type: String,
    },
    tokenExp: {
        type: Number,
    },
});

const User = mongoose.model("user", userSchema);
module.exports = { User };
