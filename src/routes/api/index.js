const { Router } = require("express");

const router = Router();

router.use("/notes", notesRoutes);

module.exports = router;
