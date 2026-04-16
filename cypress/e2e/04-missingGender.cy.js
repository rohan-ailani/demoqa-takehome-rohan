import formPage from "../pages/formPage";

describe ('Missing Gender', () => {
  it('verifying unsuccessful submission when required field is missing', () => {
    cy.fixture('user').then((user) => {

      cy.log('Starting missing gender test')

      formPage.visit()
      formPage.typeBasicDetails(user)
  
    formPage.clickSubmitButton()
    formPage.verifyNoSubmission()
    formPage.verifyNoGenderSelected()
  
    cy.log('Missing gender test passed')

    })

  })
})