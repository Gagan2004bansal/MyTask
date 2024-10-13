const ProfileModel = require('../Models/Profile');
const cloudinary = require('cloudinary').v2;

async function uploadToCloudinary(file, folder){
    const options = {folder: folder};
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

const Profile = async(req, res) => {
    try {
        
        const {name, email, bio,  username} = req.body;
        const file = req.files.image;

        const supportedTypes = ['jpeg', 'jpg', 'png'];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!supportedTypes.includes(fileType)){
            return res.status(400).json({
                success: false,
                message: "File type not supported",
            });
        }

        const response = await uploadToCloudinary(file, "MyTask");

        const profileData = await ProfileModel.create({
            name, email, username, bio, image: response.secure_url
        });


        return  res.status(200).json({
            success: true, 
            data: profileData,
            message: "Profile Updated"
        });
        
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error",
        });
    }
};

module.exports = {
    Profile
};