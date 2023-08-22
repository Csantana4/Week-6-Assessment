const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("Draw button brings up bots", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("Draw")).sendKeys("choices", key.Return);
    await driver.wait(until.idIs("choices"),1000)
  });
  test("Draw button brings up bots", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("Add to Duo")).sendKeys("player-duo", key.Return);
    await driver.wait(until.idIs("player-duo"),1000)
  });
  // test("bot added too duo goes to your duo", async () => {
  //   await driver.get("http://localhost:3000");
  //   await driver.wait(until.titleIs("Duel Duo"), 1000);
  // });
});