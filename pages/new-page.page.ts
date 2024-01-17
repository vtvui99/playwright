import { Page, Locator } from "@playwright/test";

export class NewPage {
    readonly newPageNameTxt: Locator = this.page.locator("#name");
    readonly parentPageSelection: Locator = this.page.locator("#parent");
    readonly numberOfColumnSelection: Locator = this.page.locator("#columnnumber");
    readonly displayAfterSelection: Locator = this.page.locator("#afterpage");
    readonly publicCheckbox: Locator = this.page.locator("#ispublic");
    readonly okBtn: Locator = this.page.locator("#OK");
    constructor(readonly page: Page) {}

    async createNewPage(newpageName: string, parentPage?: string, numberOfColumn?: string, displayAfter?: string, isPublic?: boolean) {
        await this.newPageNameTxt.fill(newpageName);
        if (parentPage != null && parentPage != undefined) {
            await this.parentPageSelection.selectOption(parentPage);
        }
        if (numberOfColumn != null && numberOfColumn != undefined) {
            await this.numberOfColumnSelection.selectOption(numberOfColumn);
        }
        if (displayAfter != null && displayAfter != undefined) {
            await this.displayAfterSelection.selectOption(displayAfter);
        }
        if (isPublic != null && isPublic != undefined) {
            await this.publicCheckbox.check();
        }
        await this.okBtn.click();
    }
}