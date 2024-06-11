# quatt-api-automation-tests
Api automation tests playwrite-typescript

This project contains automated tests for CRUD user operations with API Version 2
and HTTP Bearer Token authentication from https://gorest.co.in/ service. using Playwright and TypeScript.

## Table of Contents
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Viewing Results](#viewing-results)
- [CI/CD with GitHub Actions](#cicd-with-github-actions)
- [Recommendations for Improvements](#recommendations-for-improvements)
- [Contributing](#contributing)
- [License](#license)

## Project Structure
The project is organized as follows:
api-automation-test/
│
├── src/
│ ├── data/
│ │ └── createUserDto.ts
│ ├── tests/
│ │ └── userApiTests.spec.ts
│ ├── utils/
│ │ ├── apiClient.ts
│ │ └── env.ts
│
├── .github/
│ └── workflows/
│ ├── ci-regression.yml
│ ├── nightly.yml
├── .env
├── package.json
├── tsconfig.json
├── playwright.config.ts
└── README.md


- **data/**: Contains data transfer objects (DTOs) for the API requests.
- **tests/**: Contains test specifications.
- **utils/**: Contains utility classes and functions such as API clients and environment configurations.
- **.github/workflows/**: Contains CI/CD workflow configurations for GitHub Actions.

## Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- [Playwright](https://playwright.dev/) (installed via npm)
- [TypeScript](https://www.typescriptlang.org/) (installed via npm)
- [dotenv](https://www.npmjs.com/package/dotenv) (installed via npm)
- [axios](https://github.com/axios/axios) (installed via npm)
- [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) (installed via npm)
-  A GoRest API Access Token (for local runs)


### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/moamenelsawy/quatt.git
    cd quatt
    ```

2. Install the dependencies:
    ```bash
    npm install
    npx playwright install --with-deps
    npm install typescript ts-node @types/node --save-dev
    npm install dotenv
    npm install axios
    npm install @faker-js/faker
    ```

3. add in the `.env` file in the root directory your access token accuired from https://gorest.co.in/:
    ```
    ACCESS_TOKEN=your_access_token_here
    ```

### Configuration

#### TypeScript Configuration
Ensure the `tsconfig.json` is set up correctly for the project:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src"]
}
```

#### Playwright Configuration
Ensure the playwright.config.ts is configured properly:
```
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://gorest.co.in/public/v2',
    extraHTTPHeaders: {
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
    },
    timeout: 30000, // Increase timeout to 30 seconds
  },
  testDir: './src/tests',
  reporter: [['list'], ['json', { outputFile: 'test-results.json' }]],
});
```
###Running Tests
####Run All Tests
To run all tests run the command:
``
npx playwright test
``

Run Tests in Debug Mode
To run the tests in debug mode:
``
npx playwright test --debug
``

###Viewing Results
####Locally
After running tests, you can view the results in the terminal output. For detailed HTML reports, you can use Playwright's built-in reporters.

####GitHub Actions
You can view the results of the test runs in the **Actions** tab of your GitHub repository. Detailed reports and logs are available for each workflow run.

###CI/CD with GitHub Actions
####Workflow Configuration
The CI/CD is configured using GitHub Actions. Two workflows are set up:

**CI/CD Workflow**: Runs on push and PRs review request events targeting the main branch.
**Nightly Workflow**: Runs every night at midnight.

####Github secret
For the CI the access token is added as a Github secret.

###Possible next steps for such a project
**Error Handling**: Improve error handling in the ApiClient class to handle and log API errors more gracefully.
**Test Coverage**: Increase test coverage to include more edge cases and validation checks.
Code Documentation: Add more comments and documentation to the code to improve readability and maintainability.
**CI/CD Enhancements**: Add notifications for CI/CD failures to alert the team when tests fail.

###Contributing
If contributions are inteded Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature-branch).
6. Create a pull request.