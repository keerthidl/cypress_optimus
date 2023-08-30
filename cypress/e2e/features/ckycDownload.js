import {When, Then} from '@badeball/cypress-cucumber-preprocessor'

When("I trigger ckyc download api with apiToken",()=>{
    cy.fixture("ckycDownload.json").then((data) => {
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/ckycDownload",
          body: data,
          headers: {
            'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
        },
        failOnStatusCode:false
        });
      }).as('ckycDownload');
})

Then("I should get success response with status 200", () => {
    cy.get("@ckycDownload").its('status').should('eq',200)
  });

  When("I trigger ckyc download api without apiToken",()=>{
      const data = {}
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/ckycDownload",
          body: data,
          headers: {
            'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
        },
        failOnStatusCode:false
      }).as('ckycDownload');
})

Then("I should get bad request response with status 400", () => {
    cy.get("@ckycDownload").its('status').should('eq',400)
  });

  When("I trigger ckyc download api without access key", () => {
    cy.fixture("ckycDownload.json").then((data) => {
      cy.request({
        method: "POST",
        url: "https://api-staging.signzy.app/api/v3/yboedp/ckycDownload",
        body: data,
        headers: {
        },
        failOnStatusCode:false
      })
    }).as('ckycDownload');
  })
  
  Then("I should get unauthorized response with status 401", () => {
    cy.get("@ckycDownload").its('status').should('eq', 401)
  });