const express = require('express');
const userRouter = require('./userRouter');
const homeRouter = require('./homeRouter');
const detailRouter = require('./detailRouter');
const imgManagerRouter = require('./imgManagerRouter');

const rootRouter = express.Router();

rootRouter.use('/user', userRouter);
rootRouter.use('/home', homeRouter);
rootRouter.use('/detail', detailRouter);
rootRouter.use('/img-manager', imgManagerRouter);

module.exports = rootRouter;