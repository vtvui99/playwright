import { Locator, Page, expect } from "@playwright/test";
import { StringHelper } from "../utils/string-helper";

export abstract class BasePage {
    readonly globalSettings: Locator = this.page.locator(".mn-setting");
    readonly accountTab: Locator = this.page.locator("//ul[@class='head-menu']//a[@href='#Welcome']");
    readonly logoutBtn: Locator = this.page.locator("//a[@href='logout.do']");
    globalSettingFeature = "//a[contains(text(), '{0}')]";
    constructor(readonly page: Page) { }

    public pageDisplays(pageName: string) {
        expect(this.page).toHaveTitle(pageName);
    }


    public selectGlobalSettingFeature(feature: string) {
        this.globalSettings.click();
        this.page.locator(StringHelper.formatString(this.globalSettingFeature, feature)).click();
    }

    public logout() {
        this.accountTab.click();
        this.logoutBtn.click();
    }
}