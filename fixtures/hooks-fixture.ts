import {test as baseTest} from '../fixtures/common-fixture';

type HooksFixtureTypes = {
    gotoUrl: any;
    logout: any;
};

export const test = baseTest.extend<HooksFixtureTypes>({
    gotoUrl: async ({loginPage}:any, use:any) => {
        await loginPage.gotoOrangeHRM();
        await use();
    },
    logout: async ({userPage}:any, use:any) => {
        await use();
        await userPage.logout();
    }
});

export { expect } from '@playwright/test';