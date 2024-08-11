const express = require("express");
const connectDb = require("./config/db");
const cookieParser = require("cookie-parser");
const bodyParser=require("body-parser")

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/auth", require("./route/userRoute"));

app.use("/api/auth",require("./route/questionRoute"))

app.use("/api/auth",require("./route/answerRoute"))

app.use("/api/auth",require("./route/votingRoute"))

app.listen(3001, () => {
  console.log("server running on", 3001);
});

connectDb();