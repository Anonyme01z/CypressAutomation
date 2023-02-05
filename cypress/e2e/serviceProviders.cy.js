import Login from "../PageObjects/LoginPage";

    before( () =>{
        cy.visit('https://instaclean-admin-dashboard.onrender.com/login')
    }
    )

it('serviceproviders', () => {

    const ln=new Login();

    ln.getEmail().type('admin@instaclean.io')
    ln.getPassword().type('newpass123')
    ln.clickLogin();
    ln.verifyLogin();

    cy.get('a',).contains('Service Providers', {timeout: 10000}).click()
    cy.get('.MuiBox-root.css-1dvv1sw').contains('Daniel Olusoga').click()
   
    //Change Email

    // cy.get('.css-n00yer').contains('Change email').click()
    // cy.get('.css-1n9tyna').should('have.text', 'Change Email')
    // cy.get('#email').clear().clear()
    // cy.get('.MuiButton-containedSecondary').contains('Cancel').click()

    // cy.get(':nth-child(3)').contains('Change email').
    // click()
    // cy.get('#email').clear()
    // cy.get('#email').type('Olusogadaniel001@gmail.com')

    // cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
    // cy.get('#adminPassword').type('newpass123')
    // cy.get('.css-j7qwjs').contains("Change email").click()
    // cy.get('.MuiTypography-paragraph').should('have.text', 'Email has been changed successfully and a confirmation email has been sent to the user for verification.')
    // cy.get('.MuiDialogContent-root > .MuiButton-root').click()

    // //Change Address
    
    // cy.get('.css-n00yer').contains('Change address').click()
    // cy.get('.css-1n9tyna').should('have.text', 'Change Address')
    // cy.get('.MuiButton-containedSecondary').should('contain', 'Cancel').click()
    // cy.get('.css-n00yer').contains('Change address').click()
    // cy.get('#country')
    //                 .should('be.visible','Nigeria')
    // cy.get('#state').click()
    // cy.get('#menu-state > .MuiPaper-root').scrollTo('bottom')
    // cy.get('[data-value="zamfara"]').click()
    // cy.get('#address').type('41 Adeola Close Ashanti')
    // cy.get('.css-j7qwjs > :nth-child(4)')
    //                     .should('contain','Proof Of Address')

    // const imgFile = '\proofOfAddress.png';
    
    // cy.get('#proofOfAddress').attachFile(imgFile)

    // cy.get('.css-ekl2dt > .MuiButton-containedPrimary')
    //                     .should('have.text', 'Save & Verify').click()

    // cy.get('.css-70qvj9 > .css-0 > .MuiTypography-root')
    //                     .should('have.text', 'Address updated successfully')

    
    //Delete & Add Photo
    cy.get('.css-n00yer').click()
    cy.get('.MuiButton-outlinedPrimary').contains('Change photo').click()
    cy.get('.css-1n9tyna > .MuiBox-root > .MuiTypography-root').contains('Change Profile Photo')

    const disProFilePic = '\displayPic.jpg';
    cy.get('.dropzone.MuiBox-root.css-lafk1b').attachFile(disProFilePic)
    cy.get('.MuiDialogContent-root > :nth-child(2) > .MuiButtonBase-root')
                                                                .should('contain', 'Save').click()


    // cy.get('.css-ikzlcq').contains('Delete photo').click()



    // Add New Service Provider

    // cy.get('.MuiStack-root > .MuiButtonBase-root').should('contain.text', 'Add New Service Provider').click()
    // cy.get('.MuiDialogContent-root').should('contain','Add Service Provider')

    // cy.get('#firstName').should('be.visible', 'Enter Frst name').type('Taiwo')
    // cy.get('#lastName').type('Shuga')
    // cy.get('#email').type('taiwoshuga@gamil.com')
    // cy.get('#phoneNumber').type('09812763562')




})