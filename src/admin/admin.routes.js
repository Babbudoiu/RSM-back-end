const { Router } = require("express");
const adminRouter = Router();
const { createAdmin } = require("./admin.controllers");

adminRouter.post("/admin", createAdmin);

module.exports = adminRouter;