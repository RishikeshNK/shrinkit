import express from "express";
import {
  createShortUrl,
  handleShortUrl,
} from "../controllers/shortUrl.controller";

const router = express.Router();

router.post("/api/url", createShortUrl);
router.get("/:slug", handleShortUrl);

export default router;
