import mongoose, { model, Schema, SchemaType } from "mongoose";
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
  type: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "Users" },
});

const linkSchema = new Schema({
  hash: String,
  userId: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "Users",
    unique: true,
  },
});

export const contentModel = model("Contents", contentSchema);
export const linkModel = model("Link", linkSchema);
export const userModel = model("Users", userSchema);
