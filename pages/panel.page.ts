import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { Constant } from "../utils/constant";

export class PanelPage extends BasePage {
    readonly panelTab: Locator = this.page.locator('//ul[@id="ulAdminister"]/li/a[@href="panels.jsp"]');
    readonly addNewLink: Locator = this.page.locator('//div[@class="panel_tag2"]/a[contains(@href,"openAddPanel")]');

    async navigateToPanelPage() {
        await this.clickAdministerTab();
        await this.panelTab.click();
    }

    async clickAddNewLink() {
        await this.addNewLink.click();
    }

    async isPossibleClickOtherControlWhenDialogDisplayed() {
        try {
            await this.addNewLink.click({
                timeout: Constant.SHORT_TIME
            });
            return true;
        }
        catch(error) {
            return false;
        }
    }
}