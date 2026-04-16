import checkboxPage from '../pages/checkboxPage';

describe('Checkbox Page', () => {

  it('should interact with checkbox tree', () => {

// this test will fail due to the ad overlay blocking the checkbox tree to appear. please look at defect 5 in DEFECTS.md

    checkboxPage.visit();

    checkboxPage.expandAll();

    checkboxPage.selectCommands();

    checkboxPage.verifySelection('commands');

    cy.log('Interacts with checkbox tree test passed')
  });

});