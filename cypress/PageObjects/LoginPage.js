class Login {

        getEmail() {
        return  cy.get('#email').clear()
                         .should('be.visible', 'Email')
        }
        
        getPassword() {
        return  cy.get('#adminPassword').clear()
                             .should('be.visible', 'Password')
        }
        
        clickLogin() {
        return  cy.get("button[type='submit']").click()
                            .should('contain', 'Login')
        }
        
        verifyLogin() {
            cy.get("h3", {timeout: 8000})
                            .should('have.text', 'Hello, John Emmanuel')
        }

        keepMelgnChkbx() {
        return   cy.get('.PrivateSwitchBase-input').click()
        }
}

export default Login;