import { getAuth } from "@clerk/express";
import { NextFunction, Request, Response } from "express";

declare module "express" {
  export interface Request {
    userId?: string;
  }
}

export const shouldBeUser = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const auth = getAuth(req);

  const userId = auth.userId;

  if (!userId) {
    return res.status(401).json({ message: "You are not logged in!" });
  }

  req.userId = auth.userId;

  return next();
};
