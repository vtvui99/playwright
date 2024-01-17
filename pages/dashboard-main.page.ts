import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";
import { StringHelper } from "../utils/string-helper";
import { Actions } from "../utils/actions";

export class DashboardMainPage extends BasePage{
    readonly deleteBtn: Locator = this.page.locator('//a[contains(text(), "Delete")]');
    mainPageLocator = '//div[@id="main-menu"]//li/a[text()="{0}"]';
    childPageLocator = '//div[@id="main-menu"]//li/a[text()="{0}"]/../ul/li/a[text()="{1}"]';

    async display(){
        await expect(this.page).toHaveTitle(/Execution Dashboard/);
    }
    
    async clickAddPageBtn() {
        this.selectGlobalSettingFeature("Add Page");
    }

    async isMainPageDisplayed(pageName: string) {
        await expect(this.page.locator(StringHelper.formatString(this.mainPageLocator, pageName))).toBeVisible();
    }

    async navigateToMainPage(pageName: string) {
        await this.page.locator(StringHelper.formatString(this.mainPageLocator, pageName)).click();
    }
    
    async navigateToChildPage(parentPage: string, childPage: string) {
        await this.page.locator(StringHelper.formatString(this.mainPageLocator, parentPage)).hover();
        await this.page.locator(StringHelper.formatString(this.childPageLocator, parentPage, childPage)).click();
    }

    async deletePage() {
        await Actions.delay(1000);       
        await this.globalSettings.click();
        this.page.once('dialog', async(dialog) => {
            await dialog.accept();
        });
        await this.deleteBtn.click();
    }

    async verifyMessageWhenDeletePageWithchildPage(parentPage: string, deleteWarningMessage: string, deleteConfirmMessage: string) {
        this.navigateToMainPage(parentPage);
        await Actions.delay(1000);
        await this.globalSettings.click();
        this.page.once('dialog', async dialog => {
            this.page.once('dialog', async dialog => {
                expect.soft(dialog.message().trim()).toEqual(deleteWarningMessage);
                console.log(dialog.message());
                dialog.accept();
            });
            expect.soft(dialog.message()).toEqual(deleteConfirmMessage);
            console.log(dialog.message());
            dialog.accept();
        });
        await this.deleteBtn.click();
    }
}