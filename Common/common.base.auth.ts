import { Request, Response, NextFunction } from "express";
class BaseAuth {
  authenticate(req: Request, res: Response, next: NextFunction) {
    const token = req.get("Authorization")!.split(" ")[1]; // [CR] tady by se asi melo rozlisovat mezi ruznymi typy autentizace, napr. Basic, Bearer, ...
    if (token === "token") {
      next();
    } else {
      res.status(403).json({ status: "Error", message: "Access denied" }); // [CR] opravdu je tohle spravny status code? (rozdil mezi 401 a 403)
    }
  }
}

export default new BaseAuth();
