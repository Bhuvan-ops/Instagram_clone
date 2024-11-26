// post_router.js

const express = require("express");
const router = express.Router();
const { getAllPosts, createPost } = require("../Controller/postcontroller");

router.get("/posts", getAllPosts);
router.post("/posts", createPost);

module.exports = router;