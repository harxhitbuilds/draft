import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { morganStream } from "./utils/logger.js";

const app = express();

// middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(
  morgan("combined", {
    stream: morganStream,
  })
);

app.get("/api/health", (req, res) => {
  res.send("Server running perfectly.");
});

export default app;
