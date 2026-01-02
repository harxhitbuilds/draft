// dotenv config
import dotenv, { config } from "dotenv";
dotenv.config();

import connectDB from "./config/database.js";
import app from "./app.js";

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error : ", error);
  });
