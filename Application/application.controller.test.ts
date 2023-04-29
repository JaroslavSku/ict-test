import { describe, expect, test } from "@jest/globals";
import ApplicationService from "./application.service";

describe("Application controller test", () => {
  test("we receive positive process up time", () => {
    expect(ApplicationService.getState() > 0).toBeTruthy();
  });
});
