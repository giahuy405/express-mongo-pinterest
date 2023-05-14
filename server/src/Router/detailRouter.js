const express = require("express");
const {  getInfoImageAndUser,getComment,getSaveImage,postComment} = require("../Controllers/detailController.js");
const detailRouter = express.Router();

detailRouter.get('/get-info-img-user',getInfoImageAndUser);
detailRouter.get('/get-info-comment',getComment);
detailRouter.get('/get-save-img',getSaveImage);
detailRouter.post('/post-cmt',postComment);

module.exports = detailRouter;
