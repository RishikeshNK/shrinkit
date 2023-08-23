import express from "express";
import {
  createShortUrl,
  handleShortUrl,
} from "../controllers/shortUrl.controller";

import validate from "../middleware/validate";
import createShortUrlSchema from "../schemas/createShortUrl.schema";

const router = express.Router();

router.post("/api/url", validate(createShortUrlSchema), createShortUrl);
router.get("/:slug", handleShortUrl);

export default router;
