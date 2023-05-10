import axios from "axios";
import cardsMapper from "./cards.mapper";

class CardsService {
  constructor() {}
  async getCardInfo(cardNumber: string) {
    const [validity, state] = await Promise.all([
      axios.get(
        `http://private-264465-litackaapi.apiary-mock.com/cards/${cardNumber}/validity` // [CR] base url by mela byt v konfiguraci
      ),
      axios.get(
        `http://private-264465-litackaapi.apiary-mock.com/cards/${cardNumber}/state`
      ),
    ]);

    const cardValidity = validity.data;
    const cardState = state.data;

    return cardsMapper({ ...cardValidity, ...cardState });
  }
}

export default new CardsService();
