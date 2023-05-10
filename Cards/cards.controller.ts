import CardsService from "./cards.service";
import { NextFunction, Request, Response } from "express";

class CardsController {
  constructor() {}

  async getValidity(req: Request, res: Response, next: NextFunction) {
    try {
      const cardNumber = req.params.cardNumber;
      const status = await CardsService.getCardInfo(cardNumber);
      return res.status(200).json({
        status,
      });
    } catch (e: any) {
      res.status(500).json({ error: e.message }); // [CR] status mi to vratilo 500, ale v message je 404, to je trochu matouci
    }
  }
}

export default new CardsController();
