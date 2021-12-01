const { Router } = require("express");

const router = Router();

router.use("/api", apiRoutes);

router.use("/", viewRoutes);

module.exports = router;
