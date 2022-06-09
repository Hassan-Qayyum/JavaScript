  Cypress.Commands.add('login', (username, password) => {

 
    
    cy.intercept('POST', '**/auth/validateCredentials',(req) => {
        expect(req.body).to.include((`txtUsername=Admin+&txtPassword=admin123`))
    })


 
        cy.session([username, password], () => {
            cy.visit('/auth/validateCredentials');
            cy.get('form').within(($form)=>{
                cy.get('#txtUsername').type(username)
                cy.get('#txtPassword').type(password)
                cy.get('#btnLogin').click()

            })

        })

    
    // cy.intercept('POST', '**/auth/validateCredentials',(req)=>{
    //     expect(req.body).to.include(`txtUsername=Admin&txtPassword=admin123`)
    //     // expect(req.body).to.include(`txtUsername=${username} & txtPassword=${password}`)

    // }).as('loginRoute')
  
    // cy.wait('@loginRoute').its('response.statusCode').should('eq',302)
        
    
  })