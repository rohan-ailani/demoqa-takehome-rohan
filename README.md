# Rohan's Take Home Challenge - Cypress Automation - DemoQA

## Overview
In this take home challenge, I automated UI testing using Cypress as the framework and JavaScript as my language of choice for 
the demo website https://demoqa.com

The files in this repository cover:
1. Automation practice form submission flow
2. A negative validation scenario
3. UI functional tests

## How to Install
### Prerequisites
1. Node.js
2. npm

### Installation
Clone the repositor and install dependencies
`npm install`

## How to Run Tests
### Headed mode
`npx cypress open`
### Headless mode
`npx cypress run`

## Project Structure
1. `cypress/e2e/`: Contains the test specification files
2. `cypress/pages/`: Contains Page Object classes and selectors for the tests
3. `cypress/videos` : Stores videos of test runs
4. `DEFECTS.md`: Documentation of bugs identified during manual click throughs and automation runs
5. `STRATEGY.md` : My one pager highlighting my thought process, choices and decisions

## CI/CD
I have made an attempt to run CI/CD through GitHub Actions. The tests should run automatically with:
1. Every push to main
2. Every pull request