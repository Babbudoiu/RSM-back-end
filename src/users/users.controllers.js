const User = require("./users.models");

exports.createUser = async (req,res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        const token = await user.generateAuthToken(user._id)
        res
        .status(200)
        .send({user: savedUser, token: token, message: "User created in database"})
        } catch (error) {
        res.status(500).send(error)
    }
};