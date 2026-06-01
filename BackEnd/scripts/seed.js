import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import fs from "fs";
import dotenv from "dotenv";
import mongoose from "mongoose";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envPath = resolve(__dirname, "../config/config.env");
console.log("Looking for .env at:", envPath);
console.log("File exists:", fs.existsSync(envPath));
dotenv.config({ path: envPath });

console.log("MONGO_URI =", process.env.MONGO_URI);
console.log("EMAIL_ADMIN =", process.env.EMAIL_ADMIN);

const { adminModel } = await import("../Database/models/Admin/Admin.js");
const { connectionDB } = await import("../Database/ConnectionDB.js");

const addSuperAdmin = async () => {
  try {
    await connectionDB();
    console.log("DB connected successfully");

    const adminExisted = await adminModel.findOne({
      email: process.env.EMAIL_ADMIN,
    });

    if (adminExisted) {
      return console.log("Account already exists");
    }

    const superAdmin = {
      username: "super admin",
      email: process.env.EMAIL_ADMIN,
      password: "admin123456",
    };

    const admin = await adminModel.create(superAdmin);
    console.log("Super admin created:", admin);
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("Database connection closed");
    process.exit(0);
  }
};

addSuperAdmin();