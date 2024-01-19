import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { TableHandle } from "../utils/table-handle";
import { Utils } from "../utils/utils";

export class DataProfilePage extends BasePage {
    readonly dataProfileTab: Locator = this.page.locator('//ul[@id="ulAdminister"]/li/a[@href="profiles.jsp"]');
    readonly table: TableHandle;
    

    async navigateToDataProfilePage() {
        await this.clickAdministerTab();
        await this.dataProfileTab.click();
        await this.table.getColumnDataByColumnHeader("Data Profile");
    }
    
    async isDataProfileListAlphabeticalOrder() {
        return Utils.isAlphabeticalOrder(await this.table.getColumnDataByColumnHeader("Data Profile"));
    }
}