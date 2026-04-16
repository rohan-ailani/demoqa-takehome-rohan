import alertsPage from '../pages/alertsPage';

describe('Alerts Page', () => {

  it('handles confirmation alert', () => {
    alertsPage.visit()

    alertsPage.handleConfirmAlert('Do you confirm action?')

    alertsPage.clickConfirmButton()

    alertsPage.verifyResult('Ok')
  })

})