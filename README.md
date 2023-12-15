## Summary of Repo
This project focuses on testing various functionalities of the "Cypress Real World App," including login, registration, creation of new transactions, and fund transfer requests. The tests are designed to ensure the proper functioning of critical features in the application. In the project used multiply browsers, and the Allure report is incorporated to provide a detailed and visually appealing representation of test results.

## Requirements
To run this project, ensure you have the following prerequisites installed on your system:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Steps to Install and Run the Application Locally
1. Clone the repository:
   `git clone https://github.com/cypress-io/cypress-realworld-app.git`
2. Open terminal or command prompt in the cloned project.
3. Run the following npm command to install Yarn globally:
   `npm install -g yarn@1`
4. Install dependencies:
   `yarn install`
5. Run the Application:
   `yarn dev`
   This will start the application, and a browser window should open at http://localhost:3000.

## Steps to Install
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

2. Navigate to the project directory:
   cd your-repo

3. Open terminal or command prompt in the project.
4. Install dependencies using npm:
   `npm install`

## Steps to launch
To run the tests, use the following commands:

1) To run all tests using the default configuration, use the following command:
   `npm run test`
2) Run tests in headless mode:
    `npm run test:headless`
3) Run tests in Chrome:
   `npm run test:chrome`
4) Run tests in Firefox:
   `npm run test:firefox`
5) Run tests in Edge:
   `npm run test:edge`

## Steps to creating the report
1) After running the tests - generate test report using:
    `npm run test:report`
This command will generate test reports using Allure.
 
2) Open test report:
   `npm run open:report`