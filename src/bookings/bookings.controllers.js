const Bookings = require("./bookings.model");

exports.createBooking = async (req,res) => {
    try {
        const customer = new Bookings(req.body);
        const savedCustomer = await customer.save();
        res.status(200).send({bookings: savedCustomer, message: "Reservation made"})
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.findBooking = async (req, res) => {
    try {
        const name = req.params.custName;
        const targetCustomer = await Bookings.findOne({name: name});
        res.status(200).send({ name: targetCustomer, message: 'Customer found' });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteReservation = async (req, res) => {
    try {
        const name = req.params.custName;
        const removeCust = await Bookings.findOneAndDelete({name: name});
        res.status(200).send({ name: removeCust, message: 'Reservation deleted' });
    } catch (error) {
        res.status(500).send(error);
    }
};