const { Router } = require("express");
const bookingsRouter = Router();
const {
  createBooking,
  findBooking,
  deleteReservation,
  updateReservation,
} = require("./bookings.controllers");

bookingsRouter.post("/bookings", createBooking);
bookingsRouter.get("/bookings/:day", findBooking);
bookingsRouter.delete("/bookings/:name", deleteReservation);
bookingsRouter.put("/bookings", updateReservation);

module.exports = bookingsRouter;
