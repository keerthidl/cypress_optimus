import {When, Then} from '@badeball/cypress-cucumber-preprocessor'


When("I trigger aadhaar verify otp api with aadhaar number",()=>{
    cy.fixture("aadhaarData.json").then((data) => {
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/aadhaarOtpVerification",
          body: data,
          headers: {
            'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
        },
        failOnStatusCode: false
        });
      }).as('aadhaarOtpVerification');
})

Then("I should get success response", () => {
    cy.get("@aadhaarOtpVerification").its('status').should('eq',200)
  });


  When("I trigger aadhaar verify otp api without aadhaar number",()=>{
    // cy.fixture("aadhaarData.json").then((data) => {
      const data = {}
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/aadhaarOtpVerification",
          body: data,
          headers: {
            'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
        },
        failOnStatusCode: false
        // });
      }).as('aadhaarOtpVerification');
})

Then("I should get bad request response", () => {
    cy.get("@aadhaarOtpVerification").its('status').should('eq',400)
  });

  When("I trigger aadhaar verify otp api without access key",()=>{
      const data = {}
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/aadhaarOtpVerification",
          body: data,
          headers: {
        },
        failOnStatusCode: false
      }).as('aadhaarOtpVerification');
})

Then("I should get unauthorized response with status 401", () => {
    cy.get("@aadhaarOtpVerification").its('status').should('eq',401)
  });