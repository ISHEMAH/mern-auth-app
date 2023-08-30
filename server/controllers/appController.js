import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";
import ENV from '../config.js'

export async function register(req, res) {
    try {
        const { username, password, profile, email } = req.body;

        // Check if the username already exists
        const existingUsername = await UserModel.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ error: "Please use a unique username" });
        }

        // Check if the email already exists
        const existingEmail = await UserModel.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: "Please use a unique email" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the user
        const user = new UserModel({
            username,
            password: hashedPassword,
            profile: profile || "",
            email,
        });

        // Save the user and send a response
        await user.save();
        return res.status(201).json({ msg: "User registered successfully" });
    } catch (error) {
        return res.status(500).json({ error: "An error occurred" });
    }
}

export async function login(req,res){
   
    const { username, password } = req.body;

    try {
        
        UserModel.findOne({ username })
            .then(user => {
                bcrypt.compare(password, user.password)
                    .then(passwordCheck => {

                        if(!passwordCheck) return res.status(400).send({ error: "Don't have Password"});

                        // create jwt token
                        const token = jwt.sign({
                                        userId: user._id,
                                        username : user.username
                                    }, ENV.JWT_SECRET , { expiresIn : "24h"});

                        return res.status(200).send({
                            msg: "Login Successful...!",
                            username: user.username,
                            token
                        });                                    

                    })
                    .catch(error =>{
                        return res.status(400).send({ error: "Password does not Match"})
                    })
            })
            .catch( error => {
                return res.status(404).send({ error : "Username not Found"});
            })

    } catch (error) {
        return res.status(500).send({ error});
    }
}

export async function getUser(req, res) {
    // Implement your logic to get user details here
    res.json({ msg: "Get user route" });
}

export async function updateUser(req, res) {
    // Implement your logic to update user details here
    res.json({ msg: "Update user route" });
}

export async function generateOTP(req, res) {
    // Implement your logic to generate OTP here
    res.json({ msg: "Generate OTP route" });
}

export async function verifyOTP(req, res) {
    // Implement your logic to verify OTP here
    res.json({ msg: "Verify OTP route" });
}

export async function createResetSession(req, res) {
    // Implement your logic to create a password reset session here
    res.json({ msg: "Create reset session route" });
}

export async function resetPassword(req, res) {
    // Implement your logic to reset the password here
    res.json({ msg: "Reset password route" });
}
