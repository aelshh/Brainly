import mongoose, { model, Schema } from "mongoose";
import "dotenv/config";
import { string } from "zod";

mongoose.connect(process.env.DATABASE_URL as string);

const userSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

const contentSchema = new Schema({
  title: String,
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "Users" },
});

export const contentModel = model("Contents", contentSchema);

export const userModel = model("Users", userSchema);
