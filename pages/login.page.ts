import { Locator, Page } from "@playwright/test";
import { Constant } from "../utils/constant";

export class LoginPage {
    readonly repoSelection: Locator = this.page.locator('#repository');
    readonly usernameTxt: Locator = this.page.locator('#username');
    readonly passwordTxt: Locator = this.page.locator('#password');
    readonly loginBtn: Locator = this.page.locator('.btn-login');
    constructor(private readonly page: Page) {}

    async go(){
        await this.page.goto(Constant.URL);
    }

    async login(username: string, password: string){
        await this.usernameTxt.clear();
        await this.usernameTxt.fill(username);
        await this.passwordTxt.clear();
        await this.passwordTxt.fill(password);
        await this.loginBtn.click();
    }
}

