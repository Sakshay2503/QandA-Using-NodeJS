const express=require("express")

const router=express.Router();

const { postAnswer, getAnswer, getMyQuestionAnswers, }=require("../controller/answerController")

router.post('/questions/:questionId/answers',postAnswer );
router.get("/getAnswer",getAnswer)
router.get("/getMyQuestionAnswers/:questionId", getMyQuestionAnswers);

module.exports=router;