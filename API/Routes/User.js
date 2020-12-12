const userRouter = require("express").Router();
const { sign } = require("jsonwebtoken");
const userControllers = require("../Controller/User");

userRouter.post("/signup", userControllers.signUp);
userRouter.post("/login", userControllers.login);

module.exports = userRouter;
