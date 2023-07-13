import { NextFunction, Request, Response, Router } from "express";
import { limiter } from "./helpers/rateLimiter";

export const router = Router();

router.get("/", limiter, (req: Request, res: Response, next: NextFunction) => {
  res.render("index");
});
