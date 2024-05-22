import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

const port = process.env.PORT || 8000;

dotenv.config({
  path: "./.env",
});

//Connect DB
connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("ERROR ", err);
      throw err;
    });
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed !!!", error);
  });
