import Login from "../PageObjects/LoginPage";

before( () =>{
  cy.visit('https://instaclean-admin-dashboard.onrender.com/login')
}
)


it ('Settings', () =>{


    const ln=new Login()

    ln.getEmail().type('admin@instaclean.io')
    ln.getPassword().type('newpass123')
    ln.clickLogin();
    ln.verifyLogin();
  

  cy.get('a',).contains('Settings', {timeout: 10000}).click() 

  cy.get('.css-ruh28a > :nth-child(1)').should('contain','Settings')
  cy.get('.css-ruh28a > :nth-child(1)').should('contain','Here you can change a thing or two')
  cy.get('.css-1a8i767').should('have.text', 'House Types')
  cy.get('.css-63kbjd').should('have.text', 'House Sections').click()

   cy.get('.css-0 > .MuiButton-contained').scrollIntoView()
   cy.get('.css-0 > .MuiButton-contained').click()

   cy.get('.MuiDialogContent-root').should('contain', 'New House Section')
   cy.get('#house').type('Studio')
   cy.get('#price').clear()
   cy.get('.MuiButton-containedSecondary').click()

   cy.get('.css-0 > .MuiButton-contained').click()
   cy.get('#house').clear()
   cy.get('#house').type('automationHouse')
   cy.get('#price').type('1000')
   cy.get('.css-j7qwjs > .MuiButton-containedPrimary').click()

   cy.get('.css-0 > .MuiTypography-root', {timeout: 13000})
                                    .should('be.visible').and('contain.text', 'You have successfully added a new house section')

   cy.get(':nth-child(1) > .MuiGrid-grid-sm-6 > .MuiStack-root > .MuiButton-textPrimary').click()
   cy.get('#house').type('Section')
   cy.get('#price').clear()
   cy.get('#price').type('7568')
   cy.get('.css-j7qwjs > .MuiButton-containedPrimary').should('contain', 'Update').click()



  cy.get(':nth-child(1) > .MuiGrid-grid-sm-6 > .MuiStack-root > .MuiButton-textError').should('have.text', 'Delete Section').click()
  cy.contains('Cancel').click()
  cy.get(':nth-child(1) > .MuiGrid-grid-sm-6 > .MuiStack-root > .MuiButton-textError').should('have.text', 'Delete Section').click()
  cy.get('.MuiButton-containedError').click()
  cy.get('.css-0 > .MuiTypography-root', {timeout: 12000})
  


  cy.get(':nth-child(1) > .MuiGrid-grid-sm-6 > .MuiStack-root > .MuiButton-textPrimary')


   cy.get('.css-63kbjd').should('have.text', 'House Types').click()

   cy.get('.css-0 > .MuiButton-contained').scrollIntoView() 
   cy.get('.css-0 > .MuiButton-contained').should('contain', 'Add New House Type').click()

   cy.get('.MuiDialogContent-root').should('contain', 'New House Type')
   cy.get('#house').type('AutomationHouseTyp')
   cy.get('#price').clear()
   cy.get('.MuiButton-containedSecondary').click()

   cy.get('.css-0 > .MuiButton-contained').click()
   cy.get('#price').type('5000')
   cy.get('.css-j7qwjs > .MuiButton-containedPrimary').click()

   
   cy.get(':nth-child(1) > .MuiGrid-grid-sm-6 > .MuiStack-root > .MuiButton-textPrimary').should('have.text', 'Edit Type').click()
   cy.get('#house').clear().type('AutomationHouseType')
   cy.get('#price').clear().type('5000')
   cy.get('.css-j7qwjs > .MuiButton-containedPrimary').click()



    cy.get(':nth-child(1) > .MuiGrid-grid-sm-6 > .MuiStack-root > .MuiButton-textError').should('have.text', 'Delete Type')
    //cy.wait(7000)
    cy.get(':nth-child(1) > .MuiGrid-grid-sm-6 > .MuiStack-root > .MuiButton-textError').click()
    cy.get(':nth-child(1) > .MuiGrid-grid-sm-6 > .MuiStack-root > .MuiButton-textError').should('have.text', 'Delete Type')
    cy.get('.MuiButton-containedError').click()
    

})

