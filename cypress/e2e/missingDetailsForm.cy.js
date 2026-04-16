import formPage from "../pages/formPage";

describe ('Missing Details Form Page', () => {
 it('unsuccessful submission of form due to all fields empty', () => {
    
    cy.log('Starting form submission test with all fields empty')

    formPage.visit()

    formPage.clickSubmitButton()
    formPage.verifyNoSubmission()

    cy.log('Unsuccessful submission of form due to all fields empty test passed')
 })
})