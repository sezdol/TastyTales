const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }

})

userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        }, process.env.JWT_KEY, {
            expiresIn: "7d"
        })

    } catch (error) {
        console.log(error);

    }

}


const User = new mongoose.model("User", userSchema);

module.exports = User;