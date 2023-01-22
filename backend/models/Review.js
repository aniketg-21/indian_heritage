const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReviewSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  eID: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model("reviews", ReviewSchema);
module.exports = Review;
