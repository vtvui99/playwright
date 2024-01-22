import { Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import { TableHandle } from "../utils/table-handle";
import { Utils } from "../utils/utils";

export class DataProfilePage extends BasePage {
    readonly dataProfileTab: Locator = this.page.locator('//ul[@id="ulAdminister"]/li/a[@href="profiles.jsp"]');
    tableHandle = new TableHandle(this.page);
    

    async navigateToDataProfilePage() {
        await this.clickAdministerTab();
        await this.dataProfileTab.click();
    }
    
    async isDataProfileListAlphabeticalOrder() {
        return Utils.isAlphabeticalOrder(await this.tableHandle.getColumnDataByColumnHeader("Data Profile"));
    }
}