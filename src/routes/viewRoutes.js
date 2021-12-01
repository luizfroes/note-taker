//import express
const { Router } = require("express");

//import controllers
const { goToHome, goToNotes } = require("../controllers/view");

const router = Router();

router.get("*", goToHome);

router.get("/notes", goToNotes);

module.exports = router;
