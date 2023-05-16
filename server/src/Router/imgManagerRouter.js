const express = require("express");
const {getInfoUser ,getSaveImg ,getImageOfUser,deleteImage,putInfoUser,addNewImageFile} = require("../Controllers/imgManagerController.js");
const imgManagerRouter = express.Router();

imgManagerRouter.get('/info-user',getInfoUser);
imgManagerRouter.get('/get-save-img-of-user',getSaveImg);
imgManagerRouter.get('/get-img-of-user',getImageOfUser);
imgManagerRouter.delete('/delete-img',deleteImage);
// imgManagerRouter.post('/add-new-img',addNewImage);
// imgManagerRouter.post('/add-new-img-file',addNewImageFile);
imgManagerRouter.put('/update-info-user',putInfoUser);

module.exports = imgManagerRouter;
