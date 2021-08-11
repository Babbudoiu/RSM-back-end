const mongoose = require("mongoose");

const bookingsSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true,
    },
    custName: {
        type: String,
        required: true,
    },
    custSurname:{
        type: String,
        required: true,
    },
    people: {
        type: String,
        required: true,
    },
    phoneNum: {
        type: String,
        required: true,
    }
});

const Bookings = mongoose.model("Bookings",bookingsSchema);

module.exports = Bookings;