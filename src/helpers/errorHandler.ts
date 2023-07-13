import { NextFunction, Request, Response } from "express";

export const use = (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export function errorHandler(error: ErrorEvent, req: Request, res: Response, next: NextFunction) {
  res.status(500);
  res.json({ message: error.message });
}
