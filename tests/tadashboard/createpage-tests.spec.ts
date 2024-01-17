import { test } from "@playwright/test";
import { DashboardMainPage } from "../../pages/dashboard-main.page";
import { LoginPage } from "../../pages/login.page";
import { NewPage } from "../../pages/new-page.page";
import users from "../../data/users.json";

test.beforeEach(async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.go();
    await loginPage.login(users.adminUser.username, users.adminUser.password);
});

test('Verify that "Public" pages can be visible and accessed by all users of working repository', async({page}) => {
    const mainPage = new DashboardMainPage(page);
    const newPage = new NewPage(page);
    const pageName = "Test" + Date.now();

    mainPage.clickAddPageBtn();
    await newPage.createNewPage(pageName, undefined, undefined, undefined, true);
    await mainPage.isMainPageDisplayed(pageName);

    mainPage.logout();

    const loginPage = new LoginPage(page);
    await loginPage.login(users.testUser.username, users.testUser.password);
    await mainPage. isMainPageDisplayed(pageName)

    await mainPage.navigateToMainPage(pageName);
    await mainPage.deletePage(pageName);
});