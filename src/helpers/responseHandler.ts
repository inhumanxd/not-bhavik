import { Response } from "express";
import { IResponse } from "../interfaces";

export function sendResponse(res: Response, response: IResponse) {
  res.json(response);
}
