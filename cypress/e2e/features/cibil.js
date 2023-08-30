import {When, Then} from '@badeball/cypress-cucumber-preprocessor'

When("I trigger cibil api with apiToken",()=>{
    cy.fixture("cibil.json").then((data) => {
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/cibilPayload",
          body: data,
          headers: {
            'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
        },
        timeout:10000,
        failOnStatusCode:false
        });
      }).as('cibil');
})

Then("I should get success response with status 200", () => {
    cy.get("@cibil").its('status').should('eq',200)
  });

  When("I trigger cibil api without data",()=>{
      const data = {}
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/cibilPayload",
          body: data,
          headers: {
            'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
        },
         timeout:10000,
         failOnStatusCode:false
      }).as('cibil');
})

Then("I should get bad request response with status 400", () => {
    cy.get("@cibil").its('status').should('eq',400)
  });


  When("I trigger cibil api without access key",()=>{
      const data = {}
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/cibilPayload",
          body: data,
          headers: {
        },
         timeout:10000,
         failOnStatusCode:false
      }).as('cibil');
})

Then("I should get unauthorized error with status 401", () => {
    cy.get("@cibil").its('status').should('eq',401)
  });