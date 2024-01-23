import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";
import { DashboardMainPage } from "../../pages/dashboard-main.page";
import message from "../../data/message.json";
import users from "../../data/users.json"

test.describe('Login Tests', () => {
    test('DA_LOGIN_TC001 - Verify that user can login specific repository successfully via Dashboard login page with correct credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.go();
        await loginPage.login(users.adminUser.username, users.adminUser.password);

        const mainPage = new DashboardMainPage(page);
        await mainPage.display();
    });

    test ('DA_LOGIN_TC002 - Verify that user fails to login specific repository successfully via Dashboard login page with incorrect credentials', async({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.go();

        page.on('dialog', async dialog => {
            expect.soft(dialog.message()).toBe(message.login_incorrectCredential);
        });
        await loginPage.login(users.invalidUser.username, users.invalidUser.password);
    })
});