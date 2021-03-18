
describe('Successful Login and Create Session', ()=>{



    it('Succesful Login', () => {
        
      //Visit baseUrl
      cy.visit('/')

      //Check if Create One button exists
      cy.get('.jss31 > .jss21').should('exist')
      cy.get('.MuiCardContent-root > :nth-child(4)').should('exist')

      //Homepage Login button click 
      cy.get('.MuiCardContent-root > :nth-child(4)').click()

      var email = 'fran.filipe.rodrigues@gmail.com';
      //Insert email and password and click login
      cy.get('#email').type(email)
        .get('#password').type('Usertest1')
        .wait(4000)

      cy.get('#email').should('have.value', email)

      //Check if the email was written  
      //cy.get('#email').should('have.value', 'fran.filipe.rodrigues@gmail.com')


      //Login button click
      cy.get('.MuiButtonBase-root').click()

    })

      it('Create Session-Copy ID', ()=>{

        //Create new session
        cy.get('.jss20 > :nth-child(1)').click()
        .wait(4000)

        //Copy ID to Clipboard click
        cy.get('.MuiCardActions-root > .MuiButtonBase-root').click()

       //Verifies that the clipboard copies the ID
        cy.get('.MuiCardActions-root > .MuiButtonBase-root').click().then(() => {
        cy.task('getClipboard').then(($clip) => {
          const sessionId = $clip;
          cy.log('This is what is in clipboard: ', sessionId);
        });
     });
      })


  /*  it('login',()=>{
        
        cy.visit('http://glarassist.com/')

        cy.get('.MuiCardContent-root > :nth-child(4)').click()

        cy.login('fran.filipe.rodrigues@gmail.com','Usertest1')

        cy.get('.MuiButtonBase-root').click()
    })
 */

})

