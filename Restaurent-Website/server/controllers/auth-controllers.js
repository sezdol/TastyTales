const User = require('../models/user-model.js');
const bcrypt = require('bcryptjs')

const Home = async (req, res) => {
    try {
        res.status(200).send("Hello world");
    } catch (error) {
        console.log(error)
    }
}

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        //Checking if email is registered
        const existingUser = await User.findOne({ email: email });

        if (!existingUser) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        console.log(existingUser)
        //comparing password
        const user = await bcrypt.compare(password, existingUser.password);

        if (user) {
            res.status(200).json({ message: "Login Successful", token: await existingUser.generateToken(), userId: existingUser._id.toString() });

        } else {
            res.status(401).json({ message: "Invalid Email or password" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error : Login Failed" })
    }
}


const Register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ message: "Email Already Exists" })
        }

        //hashing the password
        const saltround = 10;  //no. of rounds the password should be hashed
        const hashedPassword = await bcrypt.hash(password, saltround);

        const newUser = await User.create({ username, email, phone, password: hashedPassword })
        res.status(201).json({ message: "Registration Successful", token: await newUser.generateToken(), userId: newUser._id.toString() });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error : Registration Failed" })
    }
}



module.exports = { Home, Login, Register }