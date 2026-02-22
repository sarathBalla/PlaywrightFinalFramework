import {test} from '../fixtures/common-fixture';
import {expect} from '@playwright/test';

test('Global setup for Auto Login',async({page,loginPage,commonUtils,dashboardPage}) => {

    const decryptedUsername = commonUtils.decryptData(process.env.ENCRYPTED_USERNAME!);
    const decryptedPassword = commonUtils.decryptData(process.env.ENCRYPTED_PASSWORD!);

    await loginPage.gotoOrangeHRM();
    await loginPage.loginOrangeHRM(decryptedUsername, decryptedPassword);
    await page.waitForURL(`${process.env.BASE_URL}/web/index.php/dashboard/index`)
    await expect(dashboardPage.dashboardTitleText).toHaveText('Dashboard');

    // Saving Authentication State to a file
    await page.context().storageState({
        path: './playwright/.auth/auth.json'
    })

});