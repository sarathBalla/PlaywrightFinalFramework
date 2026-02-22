// In this file we are creating the custom fixtures for the Page Object Model (POM) design pattern. 
// These fixtures will be used in our test files to create instances of the page objects and perform actions on them.
// Here all the pages of application we will create here.

import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/Dashboard';
import { UserPage } from '../pages/UserPage';
import { LeftNavigation } from '../pages/LeftNavigation';
import { PIMPage } from '../pages/PIMPage';
// import CommonUtil from '../utils/CommonUtils';

// Define any custom fixtures here, for example:
type POMFixturesTypes = {
    loginPage: LoginPage;
    // commonUtil: CommonUtil;
    dashboardPage: DashboardPage;
    userPage: UserPage;
    leftNavigationPage: LeftNavigation;
    pimpage: PIMPage;
};

export const test = baseTest.extend<POMFixturesTypes>({
    // Define the fixture for the login page
    loginPage: async ({ page }, use) => {
        //const loginPage = new LoginPage(page);
        await use(new LoginPage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
    userPage: async ({ page }, use) => {
        await use(new UserPage(page));
    },
    leftNavigationPage: async ({ page }, use) => {
        await use(new LeftNavigation(page));
    },
    pimpage: async ({ page }, use) => {
        await use(new PIMPage(page));
    }

})

// export const testWithCommonUtil = baseTest.extend<POMFixturesTypes>({
//     commonUtil: async ({}, use) => {
//         await use(new CommonUtil());
//     }
// })