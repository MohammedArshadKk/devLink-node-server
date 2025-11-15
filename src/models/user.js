const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
    },

    profession: {
        type: String,
        maxlength: 500,
    },
    about: {
        type: String,
    },
    skils: {

        type: [String],
    },
    location: {
        type: String,
    },

    github: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    portfolio: {
        type: String,
    },
})

const User = mongoose.model("User", userSchema);

module.exports = User;
