const SignupModel = require('../Models/Signup');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Login = async(req, res) => {
    try {
        
        const {email, password} = req.body;
        
        const user = await SignupModel.findOne({email});

        if(!user){
            return res.status(403).json({
                success: false,
                message: "User doesn't exist",
            });
        }

        const isPasswordEqual = await bcrypt.compare(password, user.password);

        if(!isPasswordEqual){
            return res.status(403).json({
                success: false,
                message: "Password doesn't match",
            });
        }

        const jwtToken = jwt.sign({ _id: user._id}, process.env.JWT_SECRET, {expiresIn: '72h'})

        return res.status(201).json({
            success: true,
            jwtToken,
            message: "Login Successfully",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}   

module.exports = {
    Login
};