import mongoose from "mongoose";

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to DB");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

async function connectDB(): Promise<void> {
  try {
    // Check if already connected
    if (mongoose.connection.readyState === 1) {
      console.log("Database already connected");
      return;
    }

    const mongoURL = process.env.MONGO_URL;
    if (!mongoURL) {
      throw new Error(
        "MongoDB connection string not found in environment variables"
      );
    }

    console.log("Attempting to connect with the database...");
    await mongoose.connect(mongoURL);
    console.log("Successfully connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

export default connectDB;
