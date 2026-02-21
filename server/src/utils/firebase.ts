import fs from "fs";
import { bucket } from "../config/firebase.config.js";

const uploadToFirebase = async (file: Express.Multer.File): Promise<string> => {
  try {
    if (!file) {
      throw new Error("No file provided");
    }

    const localFilePath = file.path;
    const uniqueFileName = `${Date.now()}_${file.originalname}`;
    const firebaseFile = bucket.file(uniqueFileName);

    const buffer = await fs.promises.readFile(localFilePath);
    await firebaseFile.save(buffer, {
      metadata: { contentType: file.mimetype },
    });

    await firebaseFile.makePublic();
    const publicUrl = firebaseFile.publicUrl();

    await fs.promises.unlink(localFilePath);

    return publicUrl;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

const deleteFromFirebase = async (imageURL: string): Promise<boolean> => {
  try {
    if (!imageURL) throw new Error("No image URL provided");

    const parts = imageURL.split("/");
    const last = parts.pop();
    if (!last) throw new Error("Invalid image URL");

    const fileName = decodeURIComponent(last.split("?")[0]);

    const file = bucket.file(fileName);
    await file.delete();

    return true;
  } catch (error: any) {
    console.error("Error deleting image from Firebase:", error?.message ?? error);
    return false;
  }
};

export { uploadToFirebase,deleteFromFirebase };
