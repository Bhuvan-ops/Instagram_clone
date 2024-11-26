// share_router.js

const express = require("express");
const router = express.Router();
const { sharePost } = require("../controller/share_controller");

router.post("/:postId/share", sharePost);

module.exports = router;
