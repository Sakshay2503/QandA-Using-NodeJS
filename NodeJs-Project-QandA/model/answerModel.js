const mongoose=require("mongoose")

// Answer Schema

const AnswerSchema = new mongoose.Schema({
    answer: String,
    createdAt: { type: Date, default: Date.now },
     question: { type: mongoose.Schema.Types.ObjectId, ref: "Question"},
     votes: { type: mongoose.Schema.Types.ObjectId, ref: "AnswerPopularity"}
  });
  const Answer=mongoose.model("Answer",AnswerSchema);

  module.exports=Answer