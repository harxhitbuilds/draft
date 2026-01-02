import admin from "firebase-admin";
import type { ServiceAccount } from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

const projectId = process.env.FIREBASE_PROJECT_ID;
const privateKey = process.env.FIREBASE_PRIVATE_KEY;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;

if (!projectId || !privateKey || !clientEmail) {
  throw new Error(
    "Missing required Firebase environment variables: FIREBASE_PROJECT_ID, FIREBASE_PRIVATE_KEY, or FIREBASE_CLIENT_EMAIL"
  );
}

const serviceAccount: ServiceAccount = {
  projectId,
  privateKey: privateKey.replace(/\\n/g, "\n"),
  clientEmail,
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET as string,
  });
}

export const auth: ReturnType<typeof admin.auth> = admin.auth();
export const bucket: ReturnType<ReturnType<typeof admin.storage>["bucket"]> =
  admin.storage().bucket();
export default admin;
