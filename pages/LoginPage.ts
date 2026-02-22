import { Locator, Page } from "@playwright/test";

export class LoginPage {

    // Define the page and the locators for the username, password, and login button
    // readonly --- we are not able to change the value of page, username, password which we declerared as readonly or we can say we are not able to reassign the value of page, username, password
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly invalidCredentialsErrorPopup: Locator;

    // Initialize the page and the locators in the constructor and we need to send the page as a parameter to the constructor because we need to use the page object in the methods of this class and we need to initialize the locators in the constructor because we need to use the locators in the methods of this class

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = this.page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password' })
        this.loginButton = this.page.getByRole('button', { name: 'Login' })
        this.invalidCredentialsErrorPopup = this.page.getByText('Invalid credentials');

    }
    /**
     * This method will navigate to the OrangeHRM login page
     */
    async gotoOrangeHRM() {

        // URL is coming from the env file and we are using the process.env to get the value of the URL from the env file and we are using the page.goto method to navigate to the URL
        await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`)

    }

    /**
     * To login to the OrangeHRM application, we need to fill the username and password and click on the login button
     * @param username 
     * @param password 
     */
    async loginOrangeHRM(username: string, password: string) {

        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    // Here we are just returining the text content of the invalid credentials.
    async getInvalidCredentialsError() {

        return await this.invalidCredentialsErrorPopup.textContent();
    }
}