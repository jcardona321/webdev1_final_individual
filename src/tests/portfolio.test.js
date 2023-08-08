const { test, expect } = require('@playwright/test');

test.describe('Portfolio Website', () => {
  let page;

  // Before each test, navigate to the website
  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  // Validate the display of the Contact section
  test('Contact section is displayed', async () => {
    const contact = await page.$('#contact');
    expect(contact).toBeTruthy();
  });

  // Check the existence of the username input in the contact form
  test('Username input exists in contact form', async () => {
    const usernameInput = await page.$('#username');
    expect(usernameInput).toBeTruthy();
  });

  // Check the existence of the email input in the contact form
  test('Email input exists in contact form', async () => {
    const emailInput = await page.$('#email');
    expect(emailInput).toBeTruthy();
  });

  // Check the existence of the message textarea in the contact form
  test('Message textarea exists in contact form', async () => {
    const messageTextarea = await page.$('#message');
    expect(messageTextarea).toBeTruthy();
  });

  // Validate the display of the About Me section
  test('About Me section is displayed', async () => {
    const aboutMe = await page.$('#about');
    expect(aboutMe).toBeTruthy();
  });

  // Validate the display of the Projects section
  test('Projects section is displayed', async () => {
    const projects = await page.$('#projects');
    expect(projects).toBeTruthy();
  });

  // Validate the display of the Resume section
  test('Resume section is displayed', async () => {
    const resume = await page.$('#resume');
    expect(resume).toBeTruthy();
  });

  // TODO: Add tests for Mailchimp CTA, Github, LinkedIn, or any other required sections/elements.

});
