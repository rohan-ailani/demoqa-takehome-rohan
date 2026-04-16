class CheckboxPage {

    visit() {
      cy.log('Navigating to checkbox page');
      cy.visit('/checkbox');
    }
  
    elements = {
      expandAllButton: () => cy.get('button[title="Expand all"]'),
      commandsCheckbox: () => cy.get('label[for="tree-node-commands"]'),
      result: () => cy.get('#result')
    }
  
    expandAll() {
      cy.log('Expanding all nodes');
      this.elements.expandAllButton().click();
    }
  
    selectCommands() {
      cy.log('Selecting commands checkbox');
      this.elements.commandsCheckbox().click();
    }
  
    verifySelection(expectedStr) {
      cy.log(`Verifying selection contains: ${expectedStr}`);
      this.elements.result().should('contain.text', expectedStr);
    }
  }
  
  export default new CheckboxPage();