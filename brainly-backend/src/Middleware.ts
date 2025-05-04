import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { isExpression } from "typescript";

const JWT_SECRET = process.env.JWT_SECRET as string;

export const userAuthorization = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];
  const decoded = jwt.verify(token as string, JWT_SECRET) as { userId: string };
  if (decoded) {
    req.userId = decoded.userId;
    next();
  } else {
    res.status(403).json({
      message: "You are not signed In",
    });
  }
};