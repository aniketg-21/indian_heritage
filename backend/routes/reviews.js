const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const fetchuser = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");

router.get("/", async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
});

router.post(
  "/addcomment",
  fetchuser,
  [
    body("comment", "Comment must be atleast 6 characters long.").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const { eID, comment } = req.body;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const review = new Review({ eID, comment });
      const saveReview = await review.save();
      res.json(saveReview);
    } catch (error) {
      console.log(error.message);
      res.send(404).send("Internal Server Error");
    }
  }
);

module.exports = router;
