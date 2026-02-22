//import {test} from '../fixtures/pom-fixture';
import { expect } from '@playwright/test';
import { test } from '../fixtures/hooks-fixture';
//import CommonUtil from '../utils/CommonUtils';
//import {LoginPage} from '../pages/LoginPage';

// Here we used the Before and after each hooks but we used the hooks over fixture
// test.beforeEach('Before each test Hook', async ({ loginPage }) => {
//     await loginPage.gotoOrangeHRM();
// });

// test.afterEach('After each test Hook', async ({userPage }) => {
//     await userPage.logout();
// });
// gotoUrl and logout are the custom fixtures which are created in hooks-fixture.ts file and we can use those fixtures in our test files by importing the hooks-fixture file

// gotoUrl --- This fixture is responsible for navigating to the specified URL before each test. It ensures that every test starts from the correct page, providing a consistent testing environment.

// logout --- This fixture is responsible for logging out of the application after each test. It ensures that each test is independent and does not affect the state of subsequent tests, maintaining a clean testing environment.

test('Login to OrangeHRM application', async ({ page,gotoUrl,logout }) => {

    //const decryptedUsername = commonUtils.decryptData(process.env.ENCRYPTED_USERNAME!);
    //const decryptedPassword = commonUtils.decryptData(process.env.ENCRYPTED_PASSWORD!);

    //await loginPage.gotoOrangeHRM();
    //await loginPage.loginOrangeHRM(decryptedUsername, decryptedPassword);
    console.log(await page.title());
});


// In this Tests we are just login to the application because we used only gotoUrl fixture
// If we used logout fixture we will logout the application without using the before or after hooks

test('Temp Test', async ({ page,gotoUrl }) => {

    console.log(await page.title());
    expect(await page.title()).toBe('OrangeHRM');
});

test('Temp Test2', async ({ page,gotoUrl }) => {

    console.log(await page.title());
    expect(await page.title()).toBe('OrangeHRM');
});

test('Temp Test3', async ({ page,gotoUrl}) => {

    console.log(await page.title());
    expect(await page.title()).toBe('OrangeHRM');
});