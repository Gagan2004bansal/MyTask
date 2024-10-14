const ProfileModel = require('../Models/Profile');

const Profile = async(req, res) => {
    try {
        
        const userId = req.query.id;

        const profile = await ProfileModel.findOne({userId});

        if(!profile){
            return res.status(400).json({
                success: false,
                message: "Profile Not Found",
            });
        }
        
        return res.status(200).json({
            success: true,
            data: profile,
            message: "Profile Found",
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Sever Error",
        });    
    }
};

module.exports = {
    Profile
};