
describe('template spec', () => {
  it('passes', () => {
    cy.window().then((win) =>  {
      win.onbeforeunload = null;
    })
    cy.visit('http://localhost:4200/',{failOnStatusCode: false})
    cy.contains('רמת')
  })
})