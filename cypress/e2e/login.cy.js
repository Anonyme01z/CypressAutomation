import Login from "../PageObjects/LoginPage"


before( () =>{
  cy.visit('https://instaclean-admin-dashboard.onrender.com/login')
}
)

  it ('Login', function() {

      const ln=new Login();


      //Empty fields Login
      ln.getEmail()
      ln.getPassword()
      ln.keepMelgnChkbx()
      ln.clickLogin()
      cy.get('.css-0 > .MuiTypography-root')
                                      .should('have.text', 'Please provide your email and password')

      
      //Invalid Email Address
      ln.getEmail().type('admin@clean.io')
      ln.getPassword().type('newpass123')
      ln.clickLogin();
      cy.get('.css-0 > .MuiTypography-root')
                                      .should('contain', 'Incorrect email or password')

      //Invalid Password
      ln.getEmail().type('admin@instaclean.io')
      ln.getPassword().type('new123')
      ln.clickLogin();
      cy.get('.css-0 > .MuiTypography-root')
                                      .should('contain', 'Incorrect email or password')

      // //Valid login
      ln.getEmail().type('admin@instaclean.io')
      ln.getPassword().type('newpass123')
      ln.keepMelgnChkbx();
      ln.clickLogin();
      ln.verifyLogin();
      

  })