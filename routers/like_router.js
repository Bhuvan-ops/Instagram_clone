// like_router.js

const express = require("express");
const router = express.Router();
const { likePost } = require("../controller/like_controller");

router.post("/:userID/:postId/like", likePost);

module.exports = router;
