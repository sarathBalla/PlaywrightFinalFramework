import { test, expect } from '../fixtures/hooks-fixture';
import pimModuleData from '../data/pim-module-data.json';

test('[PIM] verify that new employee is sucessfully added under the PIM',{
    tag:['@UI','@UAT'],
             annotation:{
            type:'Negative Test Case',
            description:'This test case verifies that the user cannot login with invalid username'
         }
} ,async ({gotoUrl, pimpage, leftNavigationPage }) => {


    await test.step('Opening the PIM page', async () => {

        await leftNavigationPage.clickOnPIMTab();
    });

    await test.step('Adding a new employee', async () => {
    await pimpage.clickOnAddPimButton();
    await pimpage.addNewEmployee(pimModuleData.firstName, pimModuleData.middleName, pimModuleData.lastName);
    await expect(pimpage.newEmployeeHeader).toHaveText(`${pimModuleData.firstName} ${pimModuleData.lastName}`);
    });

});