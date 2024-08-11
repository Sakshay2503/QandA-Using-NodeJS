const express=require("express")

const router = express.Router();


const { 
    getQuestion,
    postQuestion,
   }=require("../controller/questionController");


   router.post('/questions',postQuestion );
router.get('/questions',getQuestion );

module.exports = router;