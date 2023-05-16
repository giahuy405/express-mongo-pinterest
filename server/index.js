const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const fileUpload = require('express-fileupload');
const rootRouter = require("./src/Router/rootRouter");
app.use(fileUpload({
  useTempFiles:true,
  limits:{fileSize: 50 * 2024 * 1024 }
}))


app.use(cors());
app.use(express.json());
app.use(express.static("."));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
dotenv.config();

app.use("/api", rootRouter);

const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT);
  })
  .catch((error) => console.log(`${error} did not connect`));
