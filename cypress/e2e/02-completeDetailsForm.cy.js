import formPage from "../pages/formPage"

describe ('Complete Details Form Page', () => {
 it('successful submission of form', () => {
  cy.fixture('user').then((user) => {

    cy.log('Starting form submission test')

    formPage.visit()
    formPage.typeBasicDetails(user)
  
    formPage.selectFemale()
    formPage.clickSubmitButton()
  
    formPage.verifySubmission()
  
    cy.log('Form submission test passed')

  })

 })
})