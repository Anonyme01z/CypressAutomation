import Login from "../PageObjects/LoginPage";



before( () =>{
    cy.visit('https://instaclean-admin-dashboard.onrender.com/login')
}
)
    it('customers', () => {

    const ln=new Login();

    ln.getEmail().type('admin@instaclean.io')
    ln.getPassword().type('newpass123')
    ln.clickLogin();
    ln.verifyLogin();


    cy.get('a',).contains('Customers', {timeout: 10000}).click()

    cy.get('.MuiButtonBase-root').contains('Add New Customer').click()

    cy.get('.css-1n9tyna').contains('Add Customer')
    cy.get('#lastName').type('Fola')
    cy.get('#firstName').type('Anon')
    cy.get('#phoneNumber').type('09128934562')
    cy.get('#email').type('folashade@gmail.com')
    cy.get('.css-ekl2dt > .MuiButton-containedPrimary')
    cy.get('.css-ekl2dt ').contains('Create Account')





})

