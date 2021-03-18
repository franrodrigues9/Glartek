
describe('New Session without Login', ()=>{
    
    it('New Session click', () => {
        
        //Visit baseUrl
        cy.visit('/')

        //New Session button click 
        cy.get(':nth-child(1) > .jss41').click()

  
     });

     it('Login page redirect', () => {
        
        //Ensure New Session and Join Session buttons are not present
        cy.get(':nth-child(1) > .jss58').should('not.exist')       
          .get(':nth-child(2) > .jss58').should('not.exist') 
        
          //check for email and password text boxes
        cy.get('#email')
          .get('#password')

     })

})
