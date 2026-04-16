import checkboxPage from '../pages/checkboxPage';

describe('Checkbox Page', () => {

  it('should interact with checkbox tree', () => {

    checkboxPage.visit();

    checkboxPage.expandAll();

    checkboxPage.selectCommands();

    checkboxPage.verifySelection('commands');

    cy.log('Interacts with checkbox tree test passed')
  });

});