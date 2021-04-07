const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50,
        required: true,
    },
    email: {
        type: String,
        trim: true, //it will remove any space in input
        unique: 1, //1 means true
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

module.exports = mongoose.model("User", userSchema);
