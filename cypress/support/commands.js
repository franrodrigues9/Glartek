// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login1', (email, password) => {
    // Make a POST request to our backend
    // We are using GraphQL, so as a body we are passing mutation:
    cy
      .request({
        url: 'http://www.glarassist.com',
        method: 'POST',
        body: {
          login_id: $username, password: $password
        },
      })
      .then(resp => {
        // assert response from server
        expect(resp.status).to.eq(200);
        expect(resp.body).to.have.property('data');
        // all our private routes check for auth token stored in redux store, so let's pass it there
        window.localStorage.setItem(
          'reduxPersist:user',
          JSON.stringify({ refreshToken: resp.body.data.loginUser })
        );
        // go to Dashboard
        cy.visit('/api/users/me');
      });
  });

  Cypress.Commands.add('login', (userType, options = {}) => {
    // this is an example of skipping your UI and logging in programmatically
  
    // setup some basic types
    // and user properties
    
  
    // grab the user
   // const user = types[userType]
  
    // create the user first in the DB
    cy.request({
      url: '/', // assuming you've exposed a seeds route
      method: 'POST',
      body: {
            name: 'fran.filipe.rodrigues@gmail.comm',
            password: 'Usertest1',
          }

    })
    
  })