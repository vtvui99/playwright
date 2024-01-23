import { Page, Locator, test } from "@playwright/test";

export type NewPageData = {
    pageName: string;
    parentPage?: string;
    numberOfColumn?: string;
    displayAfter?: string;
    isPublic?: boolean;
};

export class NewPage {
    readonly newPageNameTxt: Locator = this.page.locator("#name");
    readonly parentPageSelection: Locator = this.page.locator("#parent");
    readonly numberOfColumnSelection: Locator = this.page.locator("#columnnumber");
    readonly displayAfterSelection: Locator = this.page.locator("#afterpage");
    readonly publicCheckbox: Locator = this.page.locator("#ispublic");
    readonly okBtn: Locator = this.page.locator("#OK");
    constructor(readonly page: Page) {}

    async createNewPage(data: NewPageData) {
        await this.newPageNameTxt.waitFor();
        await this.newPageNameTxt.fill(data.pageName);
        if (data.parentPage != null && data.parentPage != undefined) {
            await this.parentPageSelection.selectOption(data.parentPage);
        }
        if (data.numberOfColumn != null && data.numberOfColumn != undefined) {
            await this.numberOfColumnSelection.selectOption(data.numberOfColumn);
        }
        if (data.displayAfter != null && data.displayAfter != undefined) {
            await this.displayAfterSelection.selectOption(data.displayAfter);
        }
        if (data.isPublic != null && data.isPublic != undefined) {
            await this.publicCheckbox.check();
        }
        await this.okBtn.click();
    }
}