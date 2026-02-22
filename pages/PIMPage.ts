import { Locator,Page } from "@playwright/test";    

export class PIMPage {
    readonly page: Page;
    readonly addPimButton: Locator;
    readonly firstNameTextBox: Locator;
    readonly middleNameTextBox: Locator;
    readonly lastNameTextBox: Locator;
    readonly saveButton: Locator;
    readonly newEmployeeHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addPimButton = this.page.getByRole('button', { name: 'Add' });
        this.firstNameTextBox = this.page.getByRole('textbox', { name: 'First Name' });
        this.middleNameTextBox = this.page.getByRole('textbox', { name: 'Middle Name' });
        this.lastNameTextBox = this.page.getByRole('textbox', { name: 'Last Name' });
        this.saveButton = this.page.getByRole('button', { name: 'Save' });
        this.newEmployeeHeader = this.page.getByRole('heading', { name: 'Tom John' });
    }

    async clickOnAddPimButton() {
        await this.addPimButton.click();
    }

    async addNewEmployee(firstName: string, middleName: string, lastName: string) {
        await this.firstNameTextBox.fill(firstName);
        await this.middleNameTextBox.fill(middleName);
        await this.lastNameTextBox.fill(lastName);
        await this.saveButton.click();
    }  
    
}