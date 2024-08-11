const asyncHandler = require("express-async-handler");

const Answer=require("../model/answerModel");
const QuestionModel=require("../model/questionModel")

const AnswerPopularity=require("../model/voteModule")

// // Get Answer

// const getAnswer= async (req, res) => {
//   const answer = await Answer.find()
//     .populate("question", ["question"])
//     .sort({ createdAt: -1 })
//     .limit(10);
//   res.json(answer);
// };


const getAnswer = async (req, res) => {
  try {
    const answers = await Answer.find()
      .populate("question", ["question"])
      .sort({ createdAt: -1 })
      .limit(10);

    // Get vote count for  answer
    const answersWithVoteCount = await Promise.all(answers.map(async (answer) => {
      const answerPopularity = await AnswerPopularity.findOne({ answer: answer._id });
      return {
        _id: answer._id,
        answer: answer.answer,
        question: answer.question,
        popularity: answerPopularity ? answerPopularity.votes : 0,
      };
    }));

    res.json(answersWithVoteCount);
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
};




  // Post Answer with the questionId

  const postAnswer = asyncHandler(async (req, res) => {
    const { questionId } = req.params;
    const { answer } = req.body;
    try {
      const answers = new Answer({ answer, question: questionId });
      await answers.save();
      const question = await QuestionModel.findByIdAndUpdate(
        questionId,
        { $push: { answers: answers._id } },
        { new: true }
      );
      res.json(question);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  

  // get My Question Answer
  const getMyQuestionAnswers = async (req, res) => {
    try {
      const { questionId } = req.params;

      const answer = await Answer.find({ question: questionId });
 
      res.status(200).json(answer);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error." });
    }
  };

  

  module.exports={
    postAnswer,
    getAnswer,
    getMyQuestionAnswers,
    

  }