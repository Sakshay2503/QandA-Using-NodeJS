const express=require("express")

const router = express.Router();

const{voteForAnswer}=require("../controller/votingController");

router.post("/voteForAnswer/:answerId",voteForAnswer)

module.exports = router;