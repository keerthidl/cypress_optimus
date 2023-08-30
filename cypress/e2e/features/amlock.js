import {When, Then} from '@badeball/cypress-cucumber-preprocessor'

When("I trigger amlock api with apiToken",()=>{
    cy.fixture("ckycDownload.json").then((data) => {
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/amlock",
          body: data,
          headers: {
            'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
        },
        failOnStatusCode:false
        });
      }).as('amlock');
})

Then("I should get success response with status 200", () => {
    cy.get("@amlock").its('status').should('eq',200)
  });

  When("I trigger amlock api without apiToken",()=>{
      const data = {}
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/amlock",
          body: data,
          headers: {
            'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
        },
        failOnStatusCode: false
      }).as('amlock');
})

Then("I should get bad request response with status 400", () => {
    cy.get("@amlock").its('status').should('eq',400)
  });


  When("I trigger amlock lock api without access key",()=>{
    // cy.fixture("initiateOtp.json").then((data) => {
      const data = {}
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/amlock",
          body: data,
          headers: {
        },
        failOnStatusCode: false, 
        // });
      }).as('amlock');
})

Then("I should get response with status 401", () => {
    cy.get("@amlock").its('status').should('eq',401)
  });


