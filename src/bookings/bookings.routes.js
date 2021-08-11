const  { Router } = require("express");
const bookingsRouter = Router();
const { createBooking, findBooking, deleteReservation} = require('./bookings.controllers');

bookingsRouter.post('/bookings', createBooking);
bookingsRouter.get('/bookings/:name', findBooking);
bookingsRouter.delete('/bookings/:name', deleteReservation);

module.exports = bookingsRouter;