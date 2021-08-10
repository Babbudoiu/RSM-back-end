const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    course: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;