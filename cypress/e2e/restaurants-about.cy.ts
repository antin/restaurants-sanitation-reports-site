describe('The About Page', () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    //cy.exec('npm run db:reset && npm run db:seed')
    //cy.visit('/')
    cy.window().then((win) =>  {
      win.onbeforeunload = null;
    })
    cy.visit('https://antin.github.io/restaurants-sanitation-reports-site/about/',{failOnStatusCode: false})
  })

  it('check main paragraph appears', () => {
    
    cy.contains('הצוות')
    cy.contains('אלון')    
    
  })
  
})