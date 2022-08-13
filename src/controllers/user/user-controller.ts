import { NextFunction, Request, Response } from "express";

export class UserController {
  static getCurrentUser(req: Request, res: Response, next: NextFunction) {
    console.log("I ran....");
    return res.send({ userId: "1", name: "Bobby" });
  }
}
