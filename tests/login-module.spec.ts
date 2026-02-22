import { test, expect } from '../fixtures/hooks-fixture';
import loginModuleData from '../data/login-module-data.json';
import { LeftNavigation } from '../pages/LeftNavigation';

// Here we are stoping the Global setup for this file by using the cookies and origins
test.use({
    storageState: {
        cookies: [],
        origins: []
    }
});

test('[Login] verify that the user cannot login with invalid password', {
    tag: ['@UI', '@UAT'],
    annotation: {
        type: 'Negative Test Case',
        description: 'This test case verifies that the user cannot login with invalid password'
    }

}, async ({ gotoUrl, loginPage, commonUtils }) => {
    const username = commonUtils.decryptData(process.env.ENCRYPTED_USERNAME!);
    await loginPage.loginOrangeHRM(username, loginModuleData.wrongPassword);

    await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.InvalidCredentials_text);

    //expect(await loginPage.getInvalidCredentialsError()).toBe('Invalid credentials');

    await expect(loginPage.userNameInput).toBeVisible();

});

test.describe('[Login] Negative Test Cases', {
    tag: '@InvalidLogin',
    annotation: {
        type: 'Story Link',
        description: 'This block contains all the negative test cases related to login functionality'
    }
},() => {

        test('[Login] verify that the user cannot login with invalid username', {
            tag: ['@UI', '@UAT'],
            annotation: {
                type: 'Negative Test Case',
                description: 'This test case verifies that the user cannot login with invalid username'
            }
        }, async ({ gotoUrl, loginPage, commonUtils }) => {
            const password = commonUtils.decryptData(process.env.ENCRYPTED_PASSWORD!);
            await loginPage.loginOrangeHRM(loginModuleData.wrongUsername, password);

            await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.InvalidCredentials_text);

            //expect(await loginPage.getInvalidCredentialsError()).toBe('Invalid credentials');

            await expect(loginPage.userNameInput).toBeVisible();

        });

        test('[Login] verify that the user cannot login with invalid username and password', {
            tag: ['@UI', '@UAT'],
            annotation: {
                type: 'Negative Test Case',
                description: 'This test case verifies that the user cannot login with invalid username'
            }
        }, async ({ gotoUrl, loginPage, commonUtils }) => {

            await loginPage.loginOrangeHRM(loginModuleData.wrongUsername, loginModuleData.wrongPassword);

            await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.InvalidCredentials_text);

            //await expect(loginPage.invalidCredentialsErrorPopup).toHaveText("qwetry");

            await expect(loginPage.userNameInput).toBeVisible();

        });

    });

    // test('[Login] verify that the user can login with valid credentials', {
    //     tag: ['@VISUAL', '@UAT'],
    //     annotation: {
    //         type: 'Positive Test Case',
    //         description: 'This test case verifies that the user can login with valid credentials'
    //     }
    // }, async ({ gotoUrl, loginPage, commonUtils, leftNavigationPage }) => {
    //     const username = commonUtils.decryptData(process.env.ENCRYPTED_USERNAME!);
    //     const password = commonUtils.decryptData(process.env.ENCRYPTED_PASSWORD!);
    //     await loginPage.loginOrangeHRM(username, password);
    //     await expect(leftNavigationPage.orangehrmLogo).toHaveScreenshot('orangehrm-logo.png');
    //     await expect(leftNavigationPage.leefthandnavigation).toHaveScreenshot('left-hand-navigation.png');

    // });
