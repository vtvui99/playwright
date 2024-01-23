This is the Playwright automation framework used by QA engineers.

Please spend time reading the [Playwright Documentation](https://playwright.dev/docs/intro) before working.
# Organizing tests
## Utils folder
### string-helper file
String helper includes serveral functions to support string: format, concatenate string.

### actions file
Actions file contains several actions on the UI.

### utils file
Utils file contains utilitis such as format/convert data, datetime,...

# Getting started

Here are the most common options.
- Run all the test
    ```python
    npx playwright test
    ```
- Run a single test file: enter the test file name after **test**
    ```python
    npx playwright test tests/login/login-tests.spec.ts
    ```
- Disable parallelization
    ```python
    npx playwright test --workers=1
    ```
- Show report after running tests
    ```python
    npx playwright show-report
    ```