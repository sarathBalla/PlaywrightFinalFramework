// We are chaning the test from the pom-fixture to common-fixture because we need to use the commonUtil fixture in the test and we cannot use the commonUtil fixture in the pom-fixture because the pom-fixture is used to create the page object model classes and we cannot use the commonUtil fixture in the page object model classes because the commonUtil fixture is not available in the page object model classes but we can use the commonUtil fixture in the test because the commonUtil fixture is available in the test
import {test as baseTest} from './pom-fixture';
import CommonUtil from '../utils/CommonUtils';

type CommonFixturesTypes = {

    commonUtils: CommonUtil;
};
// In this file we are creating a fixture for CommonUtils.ts file and chaining the pom-fixture.ts file here
export const test = baseTest.extend<CommonFixturesTypes>({
    commonUtils: async ({}, use) => {
        await use(new CommonUtil());
    }
});

//## In this file we are chaining the pon-fixture file to common-fixture file
//## While using in the Test we can send all fixture which we created fixtures in pom-fixture and common-fixture
//## Example -- test('Login to OrangeHRM application', async ({ page,loginPage,commonUtils,dashboardPage,userPage }) => { ... })