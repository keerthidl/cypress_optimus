import {When, Then} from '@badeball/cypress-cucumber-preprocessor'

When("I trigger ckyc search api with apiToken",()=>{
    cy.fixture("ckycSearch.json").then((data) => {
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/ckycSearch",
          body: data,
          headers: {
            'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
        },
        failOnStatusCode:false
        });
      }).as('ckycSearch');
})

Then("I should get success response with status 200", () => {
    cy.get("@ckycSearch").its('status').should('eq',200)
  });

  When("I trigger ckyc search api without apiToken",()=>{
      const data = {}
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/ckycSearch",
          body: data,
          headers: {
            'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
        },
        failOnStatusCode:false
      }).as('ckycSearch');
})

Then("I should get bad request response with status 400", () => {
    cy.get("@ckycSearch").its('status').should('eq',400)
  });

  When("I trigger ckyc search api without access key", () => {
    cy.fixture("ckycSearch.json").then((data) => {
      cy.request({
        method: "POST",
        url: "https://api-staging.signzy.app/api/v3/yboedp/ckycSearch",
        body: data,
        headers: {
        },
        failOnStatusCode:false
      })
    }).as('ckycSearch');
  })
  
  Then("I should get unauthorized response with status 401", () => {
    cy.get("@ckycSearch").its('status').should('eq', 401)
  });