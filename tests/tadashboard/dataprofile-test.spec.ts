import { expect, test } from "@playwright/test"
import { LoginPage } from "../../pages/login.page";
import users from "../../data/users.json";
import { DataProfilePage } from "../../pages/dataprofile.page";
import { Assertion } from "../../utils/assertion";

test.beforeEach(async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.go();
    await loginPage.login(users.adminUser.username, users.adminUser.password);
});

test("Verify that Data Profiles are listed alphabetically", async ({page}) => {
    const dataProfilePage = new DataProfilePage(page);
    
    await dataProfilePage.navigateToDataProfilePage();
    // Assertion.assertTrue(await dataProfilePage.isDataProfileListAlphabeticalOrder());
})