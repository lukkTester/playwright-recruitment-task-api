# Regres API tests project

This project includes automated tests written in TypeScript using Playwright. 

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm)
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Playwright Test for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.test) extension

## Installation

1. Unzip archive with test project

2. Navigate to the project directory:
cd 'API test project'

3. Install the dependencies:
npm install

## Running Tests

### Via Command Line

To run the tests from the command line, use the following command:
npx playwright test

This will run all tests located in the `tests` directory.

### Via Visual Studio Code

You can also run tests directly from Visual Studio Code using the Playwright Test for VS Code extension:

1. Open "Playwright Test for VS Code" from the sidebar.
2. Expand test to run.
3. Click the "Run Test" button that appears next to the test.
5. The test will run, and the results will be displayed in the "Test Result" panel.

## Viewing Test Reports

After running the tests, an HTML report will be generated. You can view this report by opening the HTML file in a web browser. The report is created in playwright-report folder.