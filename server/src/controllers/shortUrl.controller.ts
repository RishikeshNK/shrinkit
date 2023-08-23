import { Request, Response } from "express";
import shortUrl, { ShortURL } from "../models/shortUrl.model";

export async function createShortUrl(req: Request, res: Response) {
  const shortened = await shortUrl.create(req.body);

  return res.send(shortened);
}
