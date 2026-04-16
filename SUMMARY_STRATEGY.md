# Test Automation Summary Report: DemoQA Practice Form
- Candidate: Rohan Ailani
- Framework: Cypress (JavaScript)
- Architecture: Page Object Model (POM)

## Executive Summary
This report outlines the design and implementation of an automated test suite for the DemoQA Automation Practice Form. My primary objective was to build a resilient, scalable framework that demonstrates modern QA best practices, including decoupling test logic from UI selectors and handling environment-specific flakiness. The automated suite successfully identified three distinct classes of defects: a logical boundary error, a JavaScript runtime exception, and a significant UX/Accessibility oversight.

## Architectural Approach
### Page Object Model (POM)
I implemented the Page Object Model to ensure the suite remains maintainable. By centralizing selectors and interaction logic within `formPage.js`, the test scripts (`.cy.js`) remain readable and focus purely on the functional flow.
 - Benefits: Reduces code duplication and allows for UI changes to be updated in a single location.

### Resilient Selector Strategy
Recognizing that web elements can be dynamic, I prioritized:
 - Unique IDs (e.g., `#firstName`) for high-speed, reliable targeting.
 - Text-based selection (e.g., `cy.contains`) for user-centric elements like radio buttons, ensuring the test mimics real user interaction.

## Design Decisions & Trade-offs
### Handling UI Flakiness
The DemoQA site includes overlays (e.g., ads) that can block interactions like clicking the Submit button.
My decision was to use `{ force: true }` for the submit action and increased command timeout to 10 seconds. While forced clicks are typically avoided, this ensures test stability in the presence of non-functional UI interference, without masking actual application issues.

### Global Configuration & Retries
### Handling Test Reliability
I also decided upon enabling 2 retries in headless mode. While this increases total runtime, it reduces false failures and improves result stability.

## Key Insights & Bug Analysis
My exploratory and automated testing identified three critical areas of concern that impact both data integrity and user experience:
- Defect 1: Future Date Validation (Data Integrity): The "Date of Birth" picker permits the selection of future dates (up to the year 2100). This lack of boundary validation allows invalid data into the system, potentially breaking downstream age-restricted logic or analytics.
- Defect 2: Critical Runtime Error on Modal Closure (Functional/Stability): Upon successful submission, clicking the "Close" button on the confirmation modal fails to execute. Investigation of the browser console reveals a TypeError: Lr.findDOMNode is not a function. This suggests a regression or incompatibility in the underlying React/third-party libraries, effectively trapping the user in the success state.
- Defect 3: Missing Required Field Indicators (UX/Accessibility): The UI lacks standard visual cues (such as asterisks or "required" labels). Users are forced to use "trial-and-error" submission to identify mandatory fields. This increases friction and fails to meet basic web accessibility standards.
- Defect 4: An unexpected UI overlay was discovered on the Checkbox page, which obstructs interaction with the checkbox tree and prevents successful execution of selection-based workflows.

## Scalability & Future Recommendations
- **Add CI/CD:** Run tests automatically on every push using Buildkite or GitHub Actions. I have attempted to have these tests integrated with GitHub Actions and run automatically on every push and pull request to main.
- **Speed things up:** Run tests in parallel as the suite grows.
- **Use APIs for setup:** Create test data via API instead of UI to keep tests fast and focused.