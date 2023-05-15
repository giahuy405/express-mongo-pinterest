const express = require("express");
const {
  getAllUser,
  loginUser,
  signUpUser,
} = require("../Controllers/userController");
const { privateAPI } = require("../utils/jwt");
const userRouter = express.Router();

userRouter.get("/get-all-user", privateAPI, getAllUser);
userRouter.post("/login", loginUser);
userRouter.post("/register", signUpUser);

module.exports = userRouter;
