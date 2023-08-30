import {When, Then} from '@badeball/cypress-cucumber-preprocessor'

When("I trigger initiate otp api with mobile number",()=>{
    cy.fixture("initiateOtp.json").then((data) => {
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/initiateOtp",
          body: data,
          headers: {
            'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
        },
        failOnStatusCode: false,
        });
      }).as('initiateOtp');
})

Then("I should get success response with status code 200", () => {
    cy.get("@initiateOtp").its('status').should('eq',200)
  });

  When("I trigger initiate otp with empty mobile number",()=>{
      const data = {}
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/initiateOtp",
          body: data,
          headers: {
            'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
        },
        failOnStatusCode: false, 
      }).as('initiateOtp');
})

Then("I should get bad request response with status 400", () => {
    cy.get("@initiateOtp").its('status').should('eq',400)
  });


  When("I trigger initiate otp api without access key",()=>{
    // cy.fixture("initiateOtp.json").then((data) => {
      const data = {}
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/initiateOtp",
          body: data,
          headers: {
        },
        failOnStatusCode:false
        // });
      }).as('initiateOtp');
})

Then("I should get unauthorized error with status 401", () => {
    cy.get("@initiateOtp").its('status').should('eq',401)
  });


