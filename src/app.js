import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// app.use(helmet); // TODO - need to configure according to application needs.

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

import userRouter from "./routes/user.routes.js";
import transactionRouter from "./routes/transaction.routes.js";
import summaryRouter from "./routes/summary.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/transaction", transactionRouter);
app.use("/api/v1/summary", summaryRouter);

app.use(errorMiddleware);

export { app };
