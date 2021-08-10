const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    course: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    dietary: {
        type: Array,
        default: [false,false,false,false,false]
    }
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;