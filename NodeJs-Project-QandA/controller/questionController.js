const asyncHandler = require("express-async-handler");

const Question=require("../model/questionModel")



// Post Question
const postQuestion =async (req, res,next) => {
    const { title, question } = req.body;
    try {
        const questions = await Question.create({ title, question });
        res.status(201).json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Question
const getQuestion = asyncHandler(async (req, res,next) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

  module.exports={
    postQuestion,
    getQuestion
  }