//import express
const { Router } = require("express");

//import controllers
const { getNotes, createNotes, deleteNote } = require("../../controllers/api");

const router = Router();

router.get("/", getNotes);

router.post("/", createNotes);

router.delete("/:id", deleteNote);

module.exports = router;
