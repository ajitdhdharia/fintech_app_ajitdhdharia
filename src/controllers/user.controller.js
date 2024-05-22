import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import { COOKIES_OPTIONS } from "../constants.js";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    // add refresh token to user and save it to db
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating the refresh and access token"
    );
  }
};

const signUp = asyncHandler(async (req, res, next) => {
  // get user input
  const { username, email, firstname, lastname, password } = req.body;

  // validate inputs - TODO separate validation password
  if (
    [username, email, firstname, lastname, password].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }
  // if user alredy exist or not
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }
  // create user object in db
  const user = await User.create({
    username: username.toLowerCase(),
    email,
    firstname,
    lastname,
    password,
  });

  // remove password and refresh token field from created user before sending to frontend
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  // return res
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User Is registerd succussfully"));
});

// Login user
const signIn = asyncHandler(async (req, res, next) => {
  // Get username and password
  const { username, password } = req.body;
  // Validate if username empty or not
  if (!username) {
    throw new ApiError(400, "Username is required");
  }

  // User exist or not
  const user = await User.findOne({ username: username.toLowerCase() }).select(
    "+password"
  ); // as we have 'select: false' in schema

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }
  // is password valid
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  try {
    // generate access token and refresh token and save RT to db
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      user._id
    );

    // validate refresh token after access token expires
    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    return res
      .status(200)
      .cookie("accessToken", accessToken, COOKIES_OPTIONS)
      .cookie("refreshToken", refreshToken, COOKIES_OPTIONS)
      .json(
        new ApiResponse(
          200,
          {
            user: loggedInUser,
            accessToken,
            refreshToken,
          },
          "User loggin in successfully"
        )
      );
  } catch (err) {
    throw new ApiError(500, err?.message);
  }
});

// Logout user
const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: undefined },
    },
    {
      new: true,
    }
  );

  return res
    .status(200)
    .clearCookie("accessToken", COOKIES_OPTIONS)
    .clearCookie("refreshToken", COOKIES_OPTIONS)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});

// Refresh access token
const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "refresh token is expired or used");
    }

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshToken(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, COOKIES_OPTIONS)
      .cookie("refreshToken", newRefreshToken, COOKIES_OPTIONS)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed successfully"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "invalid refresh token");
  }
});

export { signUp, signIn, logoutUser, refreshAccessToken };
