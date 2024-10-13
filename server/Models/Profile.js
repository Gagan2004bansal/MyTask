const mongoose = require('mongoose');

const Profile = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    username: {
        type: String, 
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    bio: {
        type: String, 
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model("ProfileModel", Profile);