//import express
const { Router } = require("express");

//import notes routes
const notesRoutes = require("./notesRoutes");

const router = Router();

router.use("/notes", notesRoutes);

module.exports = router;
