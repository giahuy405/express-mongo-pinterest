const express = require('express');
const userRouter = require('./userRouter');
const homeRouter = require('./homeRouter');
const detailRouter = require('./detailRouter');
const imgManagerRouter = require('./imgManagerRouter');
const { privateAPI } = require('../utils/jwt');

const rootRouter = express.Router();

rootRouter.use('/user', userRouter);
rootRouter.use('/home',privateAPI, homeRouter);
rootRouter.use('/detail',privateAPI, detailRouter);
rootRouter.use('/img-manager',privateAPI, imgManagerRouter);

module.exports = rootRouter;