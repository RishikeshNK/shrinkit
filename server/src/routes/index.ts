import express, { Request, Response } from "express";
import { createShortUrl } from "../controllers/shortUrl.controller";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});
router.post("/url", createShortUrl);

export default router;
