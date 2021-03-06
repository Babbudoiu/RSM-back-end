const User = require("./users.models");

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    const token = await user.generateAuthToken(user._id);
    res
      .status(200)
      .send({
        user: savedUser,
        token: token,
        message: "User created in database",
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.findUser = async (req, res) => {
  try {
    const user = req.params.username;
    const pass = req.body.password;
    const targetUser = await User.findOne({ name: user, password: pass });
    const token = await targetUser.generateAuthToken(targetUser._id);
    res
      .status(200)
      .send({ user: targetUser, token: token, message: "User found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    console.log(req.params.username);
    const user = req.params.username;
    const filter = req.params.username;
    const removeUser = await User.findOneAndDelete(
      { name: filter },
      { name: user }
    );
    res.status(200).send({ user: removeUser, message: "User deleted" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = req.body.username;
    const pass = req.body.password;
    const role = req.body.role;
    const filter = req.body.currentUser;
    const modifyUser = await User.updateOne(
      { username: filter },
      { username: user, password: pass, role: role }
    );
    res.status(200).send({ user: modifyUser, message: "User modified" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.authUser = async (req, res) => {
  res.status(200).send(req.user);
};
