import mongoose, { Document } from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 5);

export interface ShortURL extends Document {
  slug: string;
  url: string;
}

const schema = new mongoose.Schema({
  slug: {
    type: String,
    unique: true,
    required: true,
    default: () => nanoid(),
  },
  url: {
    type: String,
    required: true,
  },
});

const shortUrl = mongoose.model<ShortURL>("shortUrl", schema);

export default shortUrl;
