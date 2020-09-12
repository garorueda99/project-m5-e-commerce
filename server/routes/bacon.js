//EXAMPLE
const router = require("express").Router();

router.get("/bacon", (req, res) => res.status(200).json("🥓"));

module.exports = router;
