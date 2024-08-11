const mongoose=require("mongoose")



// Question Schema
const QuestionSchema = new mongoose.Schema({
    title: String,
    question: String,
    createdAt: { type: Date, default: Date.now },
   
  });

  const Question=mongoose.model("Question",QuestionSchema);

  module.exports=Question;