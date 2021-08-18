const mongoose = require("mongoose");

const bookingsSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  dayArray: {
    type: Array,
    required: true,
  },
});

const Bookings = mongoose.model("Bookings", bookingsSchema);

module.exports = Bookings;
