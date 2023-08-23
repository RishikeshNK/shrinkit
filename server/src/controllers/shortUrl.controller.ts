import { Request, Response } from "express";
import shortUrl from "../models/shortUrl.model";

export async function createShortUrl(req: Request, res: Response) {
  const shortened = await shortUrl.create(req.body);

  return res.send(shortened);
}

export async function handleShortUrl(req: Request, res: Response) {
  const short = await shortUrl.findOne(req.params).lean();

  if (!short) {
    return res.sendStatus(404);
  }

  return res.redirect(short.url);
}
