//import express
const { Router } = require("express");

//import api routes
const apiRoutes = require("./api");

//import view routes
const viewRoutes = require("./viewRoutes");

const router = Router();

router.use("/api", apiRoutes);

router.use("/", viewRoutes);

module.exports = router;
