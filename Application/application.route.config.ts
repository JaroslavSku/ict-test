import { Application } from "express";
import { Routes } from "../Common/common.route.config";
import ApplicationController from "./application.controller";

export class ApplicationRoutes extends Routes {
  constructor(app: Application) {
    super(app, "ApplicationRoutes");
  }

  configureRoutes() {
    this.app.route("/state").get(ApplicationController.getState);
    return this.app;
  }
}
