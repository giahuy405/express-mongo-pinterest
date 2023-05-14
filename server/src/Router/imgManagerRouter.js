const express = require("express");
const {getInfoUser ,getSaveImg ,getImageOfUser,deleteImage,addNewImage} = require("../Controllers/imgManagerController.js");
const imgManagerRouter = express.Router();

imgManagerRouter.get('/info-user',getInfoUser);
imgManagerRouter.get('/get-save-img-of-user',getSaveImg);
imgManagerRouter.get('/get-img-of-user',getImageOfUser);
imgManagerRouter.delete('/delete-img',deleteImage);
imgManagerRouter.post('/add-new-img',addNewImage);

module.exports = imgManagerRouter;
