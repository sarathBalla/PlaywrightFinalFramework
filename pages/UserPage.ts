import { Locator, Page } from "@playwright/test";

export class UserPage {
    readonly page: Page;
    readonly userMenu: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userMenu = this.page.locator('.oxd-userdropdown-tab');
        this.logoutButton = this.page.getByRole('menuitem', { name: 'Logout' });
    }


    /**
     * This method will logout from the OrangeHRM application
     */
    async logout() {
        await this.userMenu.click();
        await this.logoutButton.click();
    }       
}
