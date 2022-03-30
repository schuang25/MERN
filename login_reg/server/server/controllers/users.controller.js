const User = require("../models/users.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const myFirstSecret = process.env.FIRST_SECRET_KEY;

module.exports.findAll = (req, res) => {
    User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(400).json(err));
}

module.exports.register = (req, res) => {
    User.create(req.body)
        .then(user => {
            const userToken = jwt.sign({
                id: user._id
            }, process.env.SECRET_KEY);

            res
                .cookie("usertoken", userToken, myFirstSecret, {
                    httpOnly: true
                })
                .json({ msg: "Register success!", user: user });
        })
        .catch(err => {
            res.status(400).json(err);
        });
}

module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
        // email not found in users collection
        console.log("Email not found");
        return res.status(400).json({ errors: ["Invalid credentials"] });
    }

    // if we made it this far, we found a user with this email address
    // let's compare the supplied password to the hashed password in the database
    const correctPassword = await bcrypt.compare(req.body.password, user.password);

    if (!correctPassword) {
        // password wasn't a match!
        console.log("Password mismatch");
        return res.status(400).json({ errors: ["Invalid credentials"] });
    }

    // if we made it this far, the password was correct
    const userToken = jwt.sign({
        id: user._id
    }, myFirstSecret);

    // note that the response object allows chained calls to cookie and json
    res
        .cookie("usertoken", userToken, myFirstSecret, {
            httpOnly: true
        })
        .json({ msg: "Login success!" });
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.status(200).json({msg: "Logged out successfully"});
}