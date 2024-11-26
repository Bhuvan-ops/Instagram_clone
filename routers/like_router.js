// like_router.js

const express = require("express");
const router = express.Router();
const { likePost } = require("../Controller/likecontroller");

router.post("/:userID/:postId/like", likePost);

module.exports = router;
