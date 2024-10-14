const mongoose = require('mongoose');

const Profile = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SignupModel', 
        required: true,
    },
    username: {
        type: String, 
        required: true,
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