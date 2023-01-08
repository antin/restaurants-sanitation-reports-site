describe('The Home Page', () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    //cy.exec('npm run db:reset && npm run db:seed')
    //cy.visit('/')
    cy.window().then((win) =>  {
      win.onbeforeunload = null;
    })
    cy.visit('https://antin.github.io/restaurants-sanitation-reports-site/',{failOnStatusCode: false})
  })

  it('check main cities appears', () => {
    
    cy.contains('רמת גן')
    cy.contains('רמת השרון')    
    cy.contains('ירושלים')
    //cy.contains('ראשון')//לציון
    
    //cy.contains('תל אביב')
    cy.get('input[id=insRestaurantsSearch]').type('ראשון')
    cy.contains('ראשון')//לציון
  })
  it('check spesific Restaurant appears', () => {          
    cy.get('input[id=insRestaurantsSearch]').type('שווארמה')
    cy.contains('שווארמה')//לציון
  })
})