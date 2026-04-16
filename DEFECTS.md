# Defect Report

## Defect 1: The Date Picker allows you to select a future date of birth

### Description: 
On the automation practice form, when selecting or trying to input a future date, the picker allows you to select a future date of birth

### Steps to reproduce:
1. Go to https://demoqa.com/automation-practice-form
2. Click on the date of birth field
3. When open, select a future date of birth
4. Complete the form by filling in the other details
5. Submit the form

### Expected Result: 
The form shouldn't allow me to pick a date of birth in the future or it should give me an error message

### Actual Result: 
The form allows me to pick any date in the future upuntil 2100 and submit the form without any validation errors

### Severity: HIGH

### Impact: 
Indicates lack of input validation 

## Defect 2: Can't close the submission modal

### Description: 
When the confirmation of submission modal appears, the close button doesn't work and leads to a 'TypeError: Lr.findDOMNode is not a function. (In 'Lr.findDOMNode(ce)', 'Lr.findDOMNode' is undefined)'

### Steps to reproduce:
1. Go to https://demoqa.com/automation-practice-form
2. Complete all relevant fields
3. Submit the form

### Expected Result: 
The confirmation of submission modal should close upon clicking the 'Close' button

### Actual Result: 
No visible error shows, however with the console open the following error appears 'TypeError: Lr.findDOMNode is not a function. (In 'Lr.findDOMNode(ce)', 'Lr.findDOMNode' is undefined)'

### Severity: HIGH

### Impact: 
Lack of visible error messaging

## Defect 3: Form does not clearly indicate required fields to the user

### Description: 
The automation practice form does not provide clear visual indicators for required fields. While some fields are technically required at the HTML level, there is no consistent UI feedback (such as asterisks or labels) indicating which fields must be completed before submission.

### Steps to Reproduce
1. Navigate to https://demoqa.com/automation-practice-form  
2. Observe the form fields before entering any data  
3. Attempt to identify which fields are required based on UI alone  
4. Attempt to submit the form with partial input

### Expected Result
Required fields should be clearly indicated using:
- Asterisks (*)
- Labels such as “required”
- Or inline helper text

This ensures users understand form requirements before submission.

### Actual Result
- No clear visual indication of required fields
- Users must attempt submission to discover missing required inputs
- Validation only appears after submission attempt

### Severity
Medium

### Impact
Users may not know what information is mandatory. Reduced accessibility and clarity for end users


## Defect 4: Ad popup blocks interaction with checkbox tree

### Description: 
On the checkbox tree form, there is an unexpected ad pop up which blocks the interaction with the checkbox tree causing the test to fail

### Steps to reproduce:
1. Go to https://demoqa.com/checkbox
2. Attempt to click on the first checkbox, followed by the second and so on
3. The ad popup appears
4. Attempt to click on the checkboxes which are covered by the ad overlay

### Expected Result: 
The checkbox tree should be fully accessible and the user shouldn't have any issue interacting with the tree

### Actual Result: 
The checkbox tree isn't fully accessible and the user has issues interacting with the tree causing the test to fail

### Severity: HIGH

### Impact: 
This breaks core workflow, stifles the test from running and causes issues where elements on the page can't be interacted with 