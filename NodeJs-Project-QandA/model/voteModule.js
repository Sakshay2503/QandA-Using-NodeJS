const mongoose = require("mongoose");

const answerPopularitySchema = new mongoose.Schema({
  answer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answer",
    required: true,
    unique: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
});

const AnswerPopularity = mongoose.model("AnswerPopularity", answerPopularitySchema);

module.exports = AnswerPopularity;
