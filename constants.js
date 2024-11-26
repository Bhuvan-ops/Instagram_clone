const MESSAGES = {
  FETCH_ERROR: "Error fetching the posts",
  CREATE_ERROR: "Error creating post",
  POST_NOT_FOUND: "Post not found",
  ERROR_LIKING: "Error liking the post",
  SHARE_ERROR: "Error sharing the post",
  MISSING_FIELDS: "Missing required fields.",
  INVALID_CREDENTIALS: "Invalid input credentials.",
  LOGIN_SUCCESS: "Login successful",
  INTERNAL_SERVER_ERROR: "Internal server error.",
  USER_EXISTS: "User with these details already exists.",
  USER_CREATED: "User with username ({username}) created successfully",
  ERROR_CREATING_USER: "Error creating user",
};

const PORTS = {
  SERVER: 5000,
};

const STATUS_CODES = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const API_URLS = {
  BASE_URL: "http://localhost:5000",
  LOGIN: "/login",
  SIGNUP: "/signup",
  GUEST: "/guest",
};

module.exports = { STATUS_CODES, API_URLS, MESSAGES, PORTS };
