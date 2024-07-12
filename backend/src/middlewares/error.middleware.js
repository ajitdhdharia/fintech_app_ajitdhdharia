import { ApiError } from "../utils/ApiError.js";

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res
      .status(err.statusCode)
      .json({ message: err.message, errors: err.errors });
  }

  return res.status(500).json({ message: "Internal Server Error" });
};

export default errorMiddleware;
