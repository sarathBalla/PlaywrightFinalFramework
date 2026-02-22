import { expect, Locator, Page } from "@playwright/test";

export class LeftNavigation {
    readonly page: Page;
    readonly pimtab: Locator;
    readonly orangehrmLogo: Locator;
    readonly leefthandnavigation: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pimtab = this.page.getByRole('link', { name: 'PIM' });
        this.orangehrmLogo = this.page.getByRole('link', { name: 'client brand banner' });
        this.leefthandnavigation = this.page.locator('div.oxd-sidepanel-body'); 
    }

    async clickOnPIMTab() {
        await this.pimtab.click();
    }

}