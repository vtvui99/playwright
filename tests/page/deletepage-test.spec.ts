import test from "@playwright/test";
import { LoginPage } from "../../pages/login.page";
import users from "../../data/users.json";
import message from "../../data/message.json";
import { DashboardMainPage } from "../../pages/dashboard-main.page";
import { NewPage } from "../../pages/new-page.page";
import { StringHelper } from "../../utils/string-helper";

test.beforeEach(async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.go();
    await loginPage.login(users.adminUser.username, users.adminUser.password);
});

test("DA_MP_TC017 - Verify that user can remove any main parent page except 'Overview' page successfully and the order of pages stays persistent as long as there is not children page under it", async({page}) => {
    const mainPage = new DashboardMainPage(page);
    const newPage = new NewPage(page);
    const pageName = "Test" + Date.now();
    const childPage = "Test2" + Date.now();

    await mainPage.clickAddPageBtn();
    await newPage.createNewPage({pageName: pageName});
    await mainPage.clickAddPageBtn();
    await newPage.createNewPage({pageName: childPage, parentPage: pageName});

    // Delete main page that has child page and verify message
    let expectedDeleteWarningMessage = StringHelper.formatString(message.deletePage_warningMessage, pageName);
    await mainPage.verifyMessageWhenDeletePageWithchildPage(pageName, expectedDeleteWarningMessage, message.deletePage_confirmMessage);

    // Delete child page and verify message
    await mainPage.navigateToPage(`${pageName}->${childPage}`);
    await mainPage.deletePage();

    // Delete main page and verify message
    await mainPage.navigateToPage(pageName);
    await mainPage.deletePage();

})