// simple.test.js
const { chromium } = require('playwright');

test('simple test', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await browser.close();
    expect(1).toBe(1);
});
