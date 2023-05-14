const express = require('express');
const { getAllUser, loginUser, signUpUser } = require('../Controllers/userController');
const userRouter = express.Router();

userRouter.get('/get-all-user',getAllUser);
userRouter.post('/login', loginUser);
userRouter.post('/register', signUpUser);

module.exports = userRouter;