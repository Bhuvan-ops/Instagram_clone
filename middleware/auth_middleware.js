// auth_middleware.js

const User = require("../model/user_model");
const { STATUS_CODES, MESSAGES } = require("../constants");

const authMiddleware = async (req, res, next) => {
  try {
    const { _id } = req.params;

    if (!_id) {
      return res
        .status(STATUS_CODES.BAD_REQUEST)
        .json({ message: MESSAGES.MISSING_FIELDS });
    }

    const user = await User.findById({ _id });

    if (!user) {
      return res
        .status(STATUS_CODES.UNAUTHORIZED)
        .json({ message: MESSAGES.UNAUTHORIZED_ACCESS });
    }

    next();
  } catch (error) {
    console.error(error);
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ message: MESSAGES.INTERNAL_SERVER_ERROR });
  }
};

module.exports = authMiddleware;
