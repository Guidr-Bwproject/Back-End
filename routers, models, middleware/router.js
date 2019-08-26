const router = require("express").Router();

const Model = require("./model");

router.get("/", (req, res) => {
  res.status(200).json({ server: "running" });
});

router.get("/", (req, res) => {});

module.exports = router;
