const asyncHandler = require("express-async-handler");

const AnswerPopularity=require("../model/voteModule")


// Vote for Answer
const voteForAnswer =asyncHandler( async (req, res) => {
    const { answerId } = req.params;
    const { votes } = req.body;
    try {
      let answerPopularity = await AnswerPopularity.findOne({ answer: answerId });
      if (!answerPopularity) {
        answerPopularity = new AnswerPopularity({ answer: answerId, votes: 0 });
      }
      if (votes === "upvote") {
        answerPopularity.votes =answerPopularity.votes + 1;
      } else if (votes === "downvote") {
        answerPopularity.votes =answerPopularity.votes - 1;
      } else {
        return res.status(400).json({ error: "Invalid vote type." });
      }
      await answerPopularity.save();
      res.json({ message: "Vote  successfully." });
    } catch (error) {
      res.status(500).json({ error: "Internal error." });
    }
  });

  module.exports={
    voteForAnswer
  }