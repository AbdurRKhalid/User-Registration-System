const userRouter = require("express").Router();
const signUp = require("../Controller/User");

userRouter.post("/signup", signUp.signUp);

module.exports = userRouter;
