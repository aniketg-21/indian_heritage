const express = require("express");
const router = express.Router();
const Heritage = require("../models/Heritage");

router.get("/top10", async (req, res) => {
  const heritages = await Heritage.find().limit(10);
  res.json(heritages);
});

router.get("/", async (req, res) => {
  const heritages = await Heritage.find();
  res.json(heritages);
});

router.get("/filter/:type", async (req, res) => {
  const heritages = await Heritage.find({ type: req.params.type });
  res.json(heritages);
});

router.get("/:id", async (req, res) => {
  const heritage = await Heritage.findById(req.params.id);
  res.json(heritage);
});

module.exports = router;
