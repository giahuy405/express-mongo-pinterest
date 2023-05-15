const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");

const rootRouter = require("./src/Router/rootRouter");
const User = require("./src/Models/users");
const Comment = require("./src/Models/comment");
const Img = require("./src/Models/img.js");
const SaveImg = require("./src/Models/save_img");
 


app.use(cors());
app.use(express.json());
app.use(express.static("."));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
dotenv.config();

app.use("/api", rootRouter);

const PORT = process.env.PORT || 9000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT);
    
    // User.insertMany([
    //   {
    //     _id: "6371251df03239e680000033",
    //     email: "john@example.com",
    //     password: "password123",
    //     fullname: "John Doe",
    //     age: 30,
    //     avatar: "https://example.com/avatar1.jpg",
    //   },
    //   {
    //     _id: "6371251df03239e680000034",
    //     email: "jane@example.com",
    //     password: "password456",
    //     fullname: "Jane Smith",
    //     age: 25,
    //     avatar: "https://example.com/avatar2.jpg",
    //   },
    //   {
    //     _id: "6371251df03239e680000035",
    //     email: "bob@example.com",
    //     password: "password789",
    //     fullname: "Bob Johnson",
    //     age: 40,
    //     avatar: "https://example.com/avatar3.jpg",
    //   },
    //   {
    //     _id: "6371251df03239e680000036",
    //     email: "sara@example.com",
    //     password: "passwordabc",
    //     fullname: "Sara Lee",
    //     age: 35,
    //     avatar: "https://example.com/avatar4.jpg",
    //   },
    //   {
    //     _id: "6371251df03239e680000037",
    //     email: "tom@example.com",
    //     password: "passwordxyz",
    //     fullname: "Tom Smith",
    //     age: 28,
    //     avatar: "https://example.com/avatar5.jpg",
    //   },
    // ]);
    // Comment.insertMany([
    //   {
    //     _id: "6371251df03239e680000041",
    //     user_id: "6371251df03239e680000033",
    //     image_id: "6371251df03239e680000001",
    //     date_comment: "2022-02-01",
    //     content_comment: "Nice shot!",
    //   },
    //   {
    //     _id: "6371251df03239e680000042",
    //     user_id: "6371251df03239e680000035",
    //     image_id: "6371251df03239e680000002",
    //     date_comment: "2022-03-15",
    //     content_comment: "Love this place!",
    //   },
    //   {
    //     _id: "6371251df03239e680000043",
    //     user_id: "6371251df03239e680000037",
    //     image_id: "6371251df03239e680000004",
    //     date_comment: "2022-04-20",
    //     content_comment: "Amazing view!",
    //   },
    //   {
    //     _id: "6371251df03239e680000044",
    //     user_id: "6371251df03239e680000034",
    //     image_id: "6371251df03239e680000005",
    //     date_comment: "2022-05-10",
    //     content_comment: "Great composition!",
    //   },
    //   {
    //     _id: "6371251df03239e680000045",
    //     user_id: "6371251df03239e680000036",
    //     image_id: "6371251df03239e680000003",
    //     date_comment: "2022-06-22",
    //     content_comment: "Beautiful colors!",
    //   },
    //   {
    //     _id: "6371251df03239e680000046",
    //     user_id: "6371251df03239e680000032",
    //     image_id: "6371251df03239e680000007",
    //     date_comment: "2022-07-05",
    //     content_comment: "Stunning shot!",
    //   },
    //   {
    //     _id: "6371251df03239e680000047",
    //     user_id: "6371251df03239e680000038",
    //     image_id: "6371251df03239e680000009",
    //     date_comment: "2022-08-18",
    //     content_comment: "Love the mood!",
    //   },
    //   {
    //     _id: "6371251df03239e680000048",
    //     user_id: "6371251df03239e680000033",
    //     image_id: "6371251df03239e680000008",
    //     date_comment: "2022-09-01",
    //     content_comment: "Excellent work!",
    //   },
    //   {
    //     _id: "6371251df03239e680000049",
    //     user_id: "6371251df03239e680000035",
    //     image_id: "6371251df03239e680000006",
    //     date_comment: "2022-10-20",
    //     content_comment: "Beautiful scenery!",
    //   },
    //   {
    //     _id: "6371251df03239e680000050",
    //     user_id: "6371251df03239e680000037",
    //     image_id: "6371251df03239e680000010",
    //     date_comment: "2022-11-15",
    //     content_comment: "Love the angle!",
    //   },
    // ]);
    // Img.insertMany([
    //   {
    //     img_name: "Image 1",
    //     img_url: "https://example.com/image1.jpg",
    //     img_description: "This is the first image",
    //     user_id: "6371251df03239e680000033",
    //   },
    //   {
    //     img_name: "Image 2",
    //     img_url: "https://example.com/image2.jpg",
    //     img_description: "This is the second image",
    //     user_id: "6371251df03239e680000033",
    //   },
    //   {
    //     img_name: "Image 3",
    //     img_url: "https://example.com/image3.jpg",
    //     img_description: "This is the third image",
    //     user_id: "6371251df03239e680000034",
    //   },
    //   {
    //     img_name: "Image 4",
    //     img_url: "https://example.com/image4.jpg",
    //     img_description: "This is the fourth image",
    //     user_id: "6371251df03239e680000035",
    //   },
    //   {
    //     img_name: "Image 5",
    //     img_url: "https://example.com/image5.jpg",
    //     img_description: "This is the fifth image",
    //     user_id: "6371251df03239e680000036",
    //   },
    //   {
    //     img_name: "Image 6",
    //     img_url: "https://example.com/image6.jpg",
    //     img_description: "This is the sixth image",
    //     user_id: "6371251df03239e680000036",
    //   },
    //   {
    //     img_name: "Image 7",
    //     img_url: "https://example.com/image7.jpg",
    //     img_description: "This is the seventh image",
    //     user_id: "6371251df03239e680000036",
    //   },
    //   {
    //     img_name: "Image 8",
    //     img_url: "https://example.com/image8.jpg",
    //     img_description: "This is the eighth image",
    //     user_id: "6371251df03239e680000037",
    //   },
    //   {
    //     img_name: "Image 9",
    //     img_url: "https://example.com/image9.jpg",
    //     img_description: "This is the ninth image",
    //     user_id: "6371251df03239e680000037",
    //   },
    //   {
    //     img_name: "Image 10",
    //     img_url: "https://example.com/image10.jpg",
    //     img_description: "This is the tenth image",
    //     user_id: "6371251df03239e680000037",
    //   },
    // ]);
    // SaveImg.insertMany([
    //   {
    //     _id: "6371251df03239e680000037",
    //     user_id: "6371251df03239e680000033",
    //     img_id: "6371251df03239e680000001",
    //     date_save_img: "2022-01-01",
    //   },
    //   {
    //     _id: "6371251df03239e680000038",
    //     user_id: "6371251df03239e680000034",
    //     img_id: "6371251df03239e680000003",
    //     date_save_img: "2022-01-03",
    //   },
    //   {
    //     _id: "6371251df03239e680000039",
    //     user_id: "6371251df03239e680000033",
    //     img_id: "6371251df03239e680000004",
    //     date_save_img: "2022-01-05",
    //   },
    //   {
    //     _id: "6371251df03239e680000040",
    //     user_id: "6371251df03239e680000035",
    //     img_id: "6371251df03239e680000005",
    //     date_save_img: "2022-01-07",
    //   },
    //   {
    //     _id: "6371251df03239e680000041",
    //     user_id: "6371251df03239e680000034",
    //     img_id: "6371251df03239e680000006",
    //     date_save_img: "2022-01-09",
    //   },
    //   {
    //     _id: "6371251df03239e680000042",
    //     user_id: "6371251df03239e680000035",
    //     img_id: "6371251df03239e680000007",
    //     date_save_img: "2022-01-11",
    //   },
    //   {
    //     _id: "6371251df03239e680000043",
    //     user_id: "6371251df03239e680000036",
    //     img_id: "6371251df03239e680000008",
    //     date_save_img: "2022-01-13",
    //   },
    //   {
    //     _id: "6371251df03239e680000044",
    //     user_id: "6371251df03239e680000036",
    //     img_id: "6371251df03239e680000009",
    //     date_save_img: "2022-01-15",
    //   },
    //   {
    //     _id: "6371251df03239e680000045",
    //     user_id: "6371251df03239e680000037",
    //     img_id: "6371251df03239e680000010",
    //     date_save_img: "2022-01-17",
    //   },
    //   {
    //     _id: "6371251df03239e680000046",
    //     user_id: "6371251df03239e680000038",
    //     img_id: "6371251df03239e680000011",
    //     date_save_img: "2022-01-19",
    //   },
    // ]);
  })
  .catch((error) => console.log(`${error} did not connect`));
