//import express
const { Router } = require("express");

//import controllers
const { goToHome, goToNotes } = require("../controllers/view");

const router = Router();

router.get("/notes", goToNotes);

router.get("*", goToHome);

module.exports = router;
