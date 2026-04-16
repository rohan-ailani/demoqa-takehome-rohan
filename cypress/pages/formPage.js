class FormPage {
    visit() {
        cy.visit('/automation-practice-form');
    }

    elements = {
        firstName: () => cy.get('#firstName'),
        lastName: () => cy.get('#lastName'),
        userEmail: () => cy.get('#userEmail'),
        userTelephoneNumber: () => cy.get('#userNumber'),
        genderMale: () => cy.contains('label', 'Male'),
        genderFemale: () => cy.contains('label', 'Female'),
        genderOther: () => cy.contains('label', 'Other'),
        submitButton: () => cy.get('#submit'),
        submissionModal: () => cy.get('.modal-content'),
        submissionModalTitle: () => cy.get('#example-modal-sizes-title-lg')
    }

    typeBasicDetails(user){
        cy.log(`Filling form details for ${user.firstName} ${user.lastName}`)
        this.elements.firstName().type(user.firstName)
        this.elements.lastName().type(user.lastName)
        this.elements.userEmail().type(user.userEmail)
        this.elements.userTelephoneNumber().type(user.userTelephoneNumber)
    }

    selectFemale() {
        cy.log('Selecting "Female" as gender')
        this.elements.genderFemale().click()
    }

    clickSubmitButton() {
        cy.log('Clicking the submit button')
        this.elements.submitButton().click()
    }

    verifySubmission() {
        cy.log('Verifying successful submission')
        this.elements.submissionModal().should('be.visible')
        this.elements.submissionModalTitle().should('contain', 'Thanks for submitting the form')
    }

    verifyNoSubmission() {
        cy.log('Verifying unsuccessful submission')
        this.elements.submissionModal().should('not.exist')
    }

    verifyNoGenderSelected() {
        cy.get('input[name="gender"]:checked').should('not.exist')
    }
}

const formPage = new FormPage();
export default formPage;