const { Before, After } = require('@cucumber/cucumber');
const { browser } = require('protractor');

After(async function () {
  const screenshot = await browser.takeScreenshot();
  const decodedImage = new Buffer.from(screenshot, 'base64');
  return this.attach(decodedImage, 'image/png');
});

Before({}, async function () {
  browser.waitForAngularEnabled(false);
  browser.manage().timeouts().implicitlyWait(2000);
});