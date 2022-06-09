
describe("OHRM Search User", ()=>{

    Cypress.config('experimentalSessionSupport', true)
    
    beforeEach(() => {
        cy.login('Admin ', 'admin123')
    })

    it('Search Added Users',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.get('#menu_admin_viewAdminModule').click()
        cy.url().should('include', 'viewSystemUsers')
        cy.get('#searchSystemUser_userName').type('Hassan Qayum')
        cy.get('#searchBtn').click()
        cy.get('table tbody tr.odd td.left').children().as('searchedUser')
        cy.get('@searchedUser').first().contains('Hassan Qayum')
        cy.wait(5000)
        // cy.get('#searchSystemUser_userName').clear()
        cy.get('#searchSystemUser_userName').clear()
        cy.get('#searchSystemUser_userName').type('Automation Enginer')

        cy.get('#searchBtn').click()
        cy.get('@searchedUser').first().contains('Automation Enginer')

    })

    



})