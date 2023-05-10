import bodyParser from "body-parser";
import express from "express";
import { Routes } from "./Common/common.route.config";
import { ApplicationRoutes } from "./Application/application.route.config";
import { CardRoutes } from "./Cards/cards.route.config";

const routes: Array<Routes> = [];
const app = express();

app.use(bodyParser.json()); // [CR] body-parser v teto aplikaci neni potreba, protoze se nepouziva

// [CR] chybi tu logovani requestu, napr. pomoci morganu

routes.push(new ApplicationRoutes(app));
routes.push(new CardRoutes(app));

app.listen(3000, () => { // [CR] port by mel byt v konfiguracii, treba jako env promenna
  routes.forEach((route: Routes) => {
    console.log(`Routes configured for ${route.getName()}`); // [CR] console.log by mel byt nahrazen nejakym loggerem, napr. winston
  });
});
