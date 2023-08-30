import {When, Then} from '@badeball/cypress-cucumber-preprocessor'

When("I trigger initiate otp api with customerId otpKey otpValue panNumber",()=>{
    cy.fixture("verifyOtp.json").then((data) => {
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/verifyOTP",
          body: data,
          headers: {
            'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
        },
        failOnStatusCode: false
        });
      }).as('verifyOtp');
})

Then("I should get success response with status 200", () => {
    cy.get("@verifyOtp").its('status').should('eq',200)
  });

  When("I trigger initiate otp with customerId otpKey otpValue panNumber",()=>{
    // cy.fixture("initiateOtp.json").then((data) => {
      const data = {}
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/verifyOTP",
          body: data,
          headers: {
            'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
        },
        failOnStatusCode: false, 
        // });
      }).as('initiateOtp');
})

Then("I should get bad request response with status 400", () => {
    cy.get("@initiateOtp").its('status').should('eq',400)
  });

  When("I trigger initiate otp without access key", () => {
    cy.fixture("verifyOtp.json").then((data) => {
      cy.request({
        method: "POST",
        url: "https://api-staging.signzy.app/api/v3/yboedp/verifyOTP",
        body: data,
        headers: {},
        failOnStatusCode: false
      });
    }).as('verifyOtpRequest');
  })
  
  Then("I should get unauthorized request response with status 401", () => {
    cy.get("@verifyOtpRequest").its('status').should('eq', 401)
  });
  
  