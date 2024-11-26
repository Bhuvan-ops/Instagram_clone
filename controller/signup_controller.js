// signup_controller.js

const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const userModel = require("../Models/user.js");
const { STATUS_CODES, API_URLS, MESSAGES } = require("../constants");

router.use(express.json());

router.post(API_URLS.SIGNUP, async (req, res) => {
  const { email, username, password, phonenumber } = req.body;

  try {
    const existingUser = await userModel.findOne({
      $or: [
        { email: email },
        { username: username },
        { phonenumber: phonenumber },
      ],
    });

    if (existingUser) {
      return res
        .status(STATUS_CODES.BAD_REQUEST)
        .send({ message: MESSAGES.USER_EXISTS });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let createdUser = await userModel.create({
      email: email,
      username: username,
      phonenumber: phonenumber,
      password: hashedPassword,
      _id: userID,
    });

    res.status(STATUS_CODES.CREATED).json({
      message: MESSAGES.USER_CREATED.replace(
        "{username}",
        createdUser.username
      ),
    });
  } catch (error) {
    res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ message: MESSAGES.ERROR_CREATING_USER, error: error.message });
  }
});

module.exports = router;
