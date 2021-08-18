const { Router } = require("express");
const adminRouter = Router();
const { createAdmin, findAdmin } = require("./admin.controllers");

adminRouter.post("/admin", createAdmin);
adminRouter.post("/admin/:username", findAdmin);

module.exports = adminRouter;
