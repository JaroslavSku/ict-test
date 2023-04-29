import { describe, expect, test } from "@jest/globals";
import CardsService from "./cards.service";

describe("Cards controller test", () => {
  const randomCardNumber = "1234";
  test("status contains validity end", async () => {
    const status = await CardsService.getCardInfo(randomCardNumber);
    expect(new Date(status.validity_end).getTime()).not.toBeNaN();
  });

  test("status contains text description", async () => {
    const status = await CardsService.getCardInfo(randomCardNumber);
    expect(status.state_description).not.toBe("");
  });
});
