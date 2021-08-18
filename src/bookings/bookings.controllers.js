const Bookings = require("./bookings.model");

exports.createBooking = async (req, res) => {
  try {
    const customer = new Bookings({
      day: req.body.day,
      dayArray: req.body.dayArray,
    });
    const savedCustomer = await customer.save();
    res
      .status(200)
      .send({ bookings: savedCustomer, message: "Reservation made" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.findBooking = async (req, res) => {
  try {
    req.params.day;
    const targetBookings = await Bookings.findOne({ day: req.params.day });
    res.status(200).send({ targetBookings, message: "Bookings found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    const name = req.params.custName;
    const removeCust = await Bookings.findOneAndDelete({ name: name });
    res.status(200).send({ name: removeCust, message: "Reservation deleted" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateReservation = async (req, res) => {
  try {
    const modifyBookings = await Bookings.findOneAndUpdate(
      { day: req.body.day },
      { dayArray: req.body.dayArray }
    );
    res
      .status(200)
      .send({ user: modifyBookings, message: "Bookings Modified" });
  } catch (error) {
    res.status(500).send(error);
  }
};
