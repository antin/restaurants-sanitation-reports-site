describe('The Home Page', () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    //cy.exec('npm run db:reset && npm run db:seed')
  })

  it('successfully loads', () => {
    //cy.visit('/')
    cy.visit('https://antin.github.io/restaurants-sanitation-reports-site/about/',{failOnStatusCode: false})
  })

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('#team').should('have.value', 'צוות')
    //.cy.get('.action-email')
      //.type('fake@email.com').should('have.value', 'fake@email.com')


  })
})
/*
/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    //cy.visit('https://antin.github.io/restaurants-sanitation-reports-site/about/',{failOnStatusCode: false})
    cy.visit('http://localhost:8080/about/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('#team').should('have.value', 'צוות')
    //.cy.get('.action-email')
      //.type('fake@email.com').should('have.value', 'fake@email.com')


  })
})
*/

