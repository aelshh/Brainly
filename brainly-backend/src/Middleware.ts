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
  try {
    const decoded = jwt.verify(token as string, JWT_SECRET) as {
      userId: string;
    };
    if (decoded) {
      req.userId = decoded.userId;
      next();
    }
  } catch (e) {
    res.json({
      message: "You are not signed In",
    });
  }
};
