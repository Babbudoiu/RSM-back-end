require("./db/connection");
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const userRouter = require("./users/users.routes");
const menuRouter = require("./menu/menu.routes");
const adminRouter = require("./admin/admin.routes");
const bookingsRouter = require("./bookings/bookings.routes");

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(menuRouter);
app.use(adminRouter);
app.use(bookingsRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
