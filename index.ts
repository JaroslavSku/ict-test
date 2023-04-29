import bodyParser from "body-parser";
import express from "express";
import { Routes } from "./Common/common.route.config";
import { ApplicationRoutes } from "./Application/application.route.config";
import { CardRoutes } from "./Cards/cards.route.config";

const routes: Array<Routes> = [];
const app = express();

app.use(bodyParser.json());

routes.push(new ApplicationRoutes(app));
routes.push(new CardRoutes(app));

app.listen(3000, () => {
  routes.forEach((route: Routes) => {
    console.log(`Routes configured for ${route.getName()}`);
  });
});
