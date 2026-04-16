class AlertsPage {

    visit() {
      cy.visit('/alerts');
    }
  
    elements = {
      confirmButton: () => cy.get('#confirmButton'),
      result: () => cy.get('#confirmResult')
    }
  
    clickConfirmButton() {
      this.elements.confirmButton().click();
    }
  
    handleConfirmAlert(expectedStr) {
      cy.on('window:confirm', (str) => {
        expect(str).to.contain(expectedStr);
        return true;
      });
    }
  
    verifyResult(expectedStr) {
      this.elements.result().should('contain', expectedStr);
    }
  }
  
  export default new AlertsPage();