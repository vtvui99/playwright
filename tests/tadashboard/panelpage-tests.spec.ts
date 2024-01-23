import { expect, test } from "@playwright/test"
import { LoginPage } from "../../pages/login.page";
import { PanelPage } from "../../pages/panel.page";
import users from "../../data/users.json";
import { Assertion } from "../../utils/assertion";

test.beforeEach(async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.go();
    await loginPage.login(users.adminUser.username, users.adminUser.password);
});

test("Verify that when 'Add New Panel' form is on focused all other control/form is disabled or locked.", async ({page}) => {
    const panelPage = new PanelPage(page);

    await panelPage.navigateToPanelPage();
    await panelPage.clickAddNewLink();
    
    Assertion.assertFalse(await panelPage.isPossibleClickOtherControlWhenDialogDisplayed());
})