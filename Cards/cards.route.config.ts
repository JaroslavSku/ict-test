import { Application } from "express";
import BaseAuth from "../Common/common.base.auth";
import { Routes } from "../Common/common.route.config";
import CardsController from "./cards.controller";

export class CardRoutes extends Routes {
  constructor(app: Application) {
    super(app, "CardRoutes");
  }

  configureRoutes() {
    this.app
      .route("/cards/:cardNumber")
      .get([BaseAuth.authenticate, CardsController.getValidity]);
    return this.app;
  }
}
