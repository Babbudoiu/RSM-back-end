const Admin = require("./admin.models");

exports.createAdmin = async (req,res) => {
    try {
        const admin = new Admin(req.body);
        const savedAdmin = await admin.save();
        res.status(200).send({admin: savedAdmin, message: "Admin created in the database"})
    } catch (error) {
        res.status(500).send(error)
    }
};
