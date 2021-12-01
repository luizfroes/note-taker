const { Router } = require("express");

const router = Router();

router.get("/", getNotes);

router.post("/", createNote);

router.delete("/:id", deleteNote);

module.exports = router;
