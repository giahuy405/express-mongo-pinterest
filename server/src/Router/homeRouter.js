const express = require("express");
const { getImgList,getImgDetail } = require("../Controllers/homeController.js");
const homeRouter = express.Router();

homeRouter.get('/get-img-list',getImgList);
homeRouter.get('/get-img-detail',getImgDetail);

module.exports = homeRouter;
