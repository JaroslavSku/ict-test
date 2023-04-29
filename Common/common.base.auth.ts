import { Request, Response, NextFunction } from "express";
class BaseAuth {
  authenticate(req: Request, res: Response, next: NextFunction) {
    const token = req.get("Authorization")!.split(" ")[1];
    if (token === "token") {
      next();
    } else {
      res.status(403).json({ status: "Error", message: "Access denied" });
    }
  }
}

export default new BaseAuth();
