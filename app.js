const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const postRoutes = require("./Routers/post");
const likeRoutes = require("./Routers/like");
const shareRoutes = require("./Routers/share");
const loginRoute = require("./Instagram_auth/Controller/logincontroller.js");
const signupRoute = require("./Instagram_auth/Controller/signupcontroller");
const { PORTS } = require("./Instagram_auth/constants");

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
