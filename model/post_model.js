// post_model.js

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    username: { type: String, required: true },
    email: { type: String, required: true },
  },
  content: { type: String, required: true },
  hashtags: [String],
  likes: [{ username: String, email: String }],
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
