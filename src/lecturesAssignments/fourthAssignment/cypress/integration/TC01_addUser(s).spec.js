
describe("OHRM Add User(s)", ()=>{



    Cypress.config('experimentalSessionSupport', true)
    
    beforeEach(() => {
        cy.intercept("GET", "/index.php/dashboard").as("dashboard-name");
        cy.login('Admin ', 'admin123')
    })
    

    it('Add users', ()=>{
        cy.wait("@dashboard-name").its("response.body").should("contain", "Welcome");

        // cy.get('@test')
        cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.url().should('include','dashboard')
        cy.get('#menu_admin_viewAdminModule').click()
        cy.wait(10000)
        cy.url().should('include', 'viewSystemUsers')
        // Adding first user
        cy.get('#btnAdd').click()
        cy.url().should('include','saveSystemUser')
        cy.get('#systemUser_userType').select('Admin')
        cy.get('#systemUser_employeeName_empName').type('John Smith')
        cy.get('#systemUser_userName').type('Hassan')
        cy.get('#systemUser_status').select('Enabled')
        cy.get('#systemUser_password').type('delete12')
        cy.get('#systemUser_confirmPassword').type('delete12')
        cy.get('#btnSave').click()
        cy.wait(10000)
        cy.url().should('include', 'viewSystemUsers')

        //Adding second user
        cy.get('#btnAdd').click()
        cy.url().should('include','saveSystemUser')
        cy.get('#systemUser_userType').select('ESS')
        cy.get('#systemUser_employeeName_empName').type('Alice Duval')
        cy.get('#systemUser_userName').type('Automation')
        cy.get('#systemUser_status').select('Disabled')
        cy.get('#systemUser_password').type('delete12')
        cy.get('#systemUser_confirmPassword').type('delete12')
        cy.get('#btnSave').click()
        cy.wait(100000)
        cy.url().should('include', 'viewSystemUsers')
    })



})