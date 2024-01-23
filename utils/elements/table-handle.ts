import { StringHelper } from "../string-helper";
import { Locator, Page } from "@playwright/test";

export class TableHandle {
    private readonly rowLocator: string = '//table[@class="GridView"]//tr/td[count(//th[text()="{0}"]/preceding-sibling::th)+1]';
    constructor(private readonly page: Page) {}

    async getColumnDataByColumnHeader(headerName: string) {
        const rowLocator = StringHelper.formatString(this.rowLocator, headerName);
        const elements = this.page.locator(rowLocator);
        const records = await elements.locator(':scope').allInnerTexts();
        return records;
    }
}