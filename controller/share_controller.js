// share_controller.js

const Share = require("../Models/share");
const Post = require("../Models/post");
const { MESSAGES, STATUS_CODES } = require("../constants.js");

const sharePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ message: MESSAGES.POST_NOT_FOUND });
    }

    const { email, username } = req.body;

    const newShare = new Share({ postId: post._id, username, email });
    await newShare.save();
    res.json(post);
  } catch (err) {
    res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ message: MESSAGES.SHARE_ERROR });
  }
};

module.exports = { sharePost };
