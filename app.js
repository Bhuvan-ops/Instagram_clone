const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const postRoutes = require("./routers/post_router.js");
const likeRoutes = require("./routers/like_router.js");
const shareRoutes = require("./routers/share_router.js");
const loginRoute = require("./routers/login_router.js");
const signupRoute = require("./routers/signup_router.js");
const { PORTS } = require("./constants.js");

dotenv.config();

const app = express();

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
};

app.use(cors(corsOpts));
app.use(express.json());

app.use(loginRoute);
app.use(signupRoute);

app.use("/", postRoutes);
app.use("/", likeRoutes);
app.use("/", shareRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

const port = process.env.PORT || PORTS.SERVER || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
