import { Locator, Page, expect } from "@playwright/test";
import { StringHelper } from "../utils/string-helper";

export abstract class BasePage {
    readonly globalSettings: Locator = this.page.locator(".mn-setting");
    readonly accountTab: Locator = this.page.locator("//ul[@class='head-menu']//a[@href='#Welcome']");
    readonly logoutBtn: Locator = this.page.locator("//a[@href='logout.do']");
    globalSettingFeature = "//a[contains(text(), '{0}')]";
    readonly administerTab: Locator = this.page.locator('//ul[@id="ulAdminister"]/parent::li');
    constructor(readonly page: Page) { }

    async pageDisplays(pageName: string) {
        expect(this.page).toHaveTitle(pageName);
    }


    async selectGlobalSettingFeature(feature: string) {
        await this.globalSettings.click();
        await this.page.locator(StringHelper.formatString(this.globalSettingFeature, feature)).click();
    }

    async logout() {
        await this.accountTab.click();
        await this.logoutBtn.click();
    }

    async clickAdministerTab() {
        await this.administerTab.waitFor();
        await this.administerTab.click();
    }
}