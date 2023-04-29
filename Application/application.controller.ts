import ApplicationService from "./application.service";
import { NextFunction, Request, Response } from "express";

class ApplicationController {
  constructor() {}

  getState(req: Request, res: Response, next: NextFunction) {
    const upTime = ApplicationService.getState();
    const status = upTime > 0 ? "OK" : "NOK";
    return res.status(200).json({
      status,
    });
  }
}

export default new ApplicationController();
