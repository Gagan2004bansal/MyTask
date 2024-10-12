const SignupModel = require('../Models/Signup');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Signup = async(req, res) => {
    try {
        const {name, email, password} = req.body;

        const user = await SignupModel.findOne({email});

        if(user){
            return res.status(409).json({
                status: false,
                message: "User is already exist"
            });
        }

        const newUser = new SignupModel({name, email, password});
        newUser.password = await bcrypt.hash(password, 10);

        await newUser.save();

        const jwtToken = jwt.sign({_id: newUser._id}, process.env.JWT_SECRET,{expiresIn: '24h'});

        return res.status(201).json({
            success: true,
            jwtToken,
            message: "Signup Successfully",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }   
}   

module.exports = {Signup};
