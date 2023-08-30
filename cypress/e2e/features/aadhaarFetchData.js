import {When, Then} from '@badeball/cypress-cucumber-preprocessor'

When("I trigger aadhaar fetch data api with aadhaar number aadhaar otp and consent",()=>{
    cy.fixture("aadhaarData.json").then((data) => {
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/aadhaarFetchData",
          body: data,
          headers: {
            'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
        },

        failOnStatusCode: false
        });
      }).as('aadhaarFetchData');
})

Then("I should get success response with status 200", () => {
    cy.get("@aadhaarFetchData").its('status').should('eq',200)
  });


  When("I trigger aadhaar fetch api without aadhaar number aadhaar otp and consent",()=>{
      const data = {}
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/aadhaarFetchData",
          body: data,
          failOnStatusCode: false,
          headers: {
            'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
        },
      }).as('aadhaarFetchData');
})

Then("I should get bad request response with status code 400", () => {
    cy.get("@aadhaarFetchData").its('status').should('eq',400)
  });


  When("I trigger aadhaar fetch api without access key",()=>{
      const data = {}
        cy.request({
          method: "POST",
          url: "https://api-staging.signzy.app/api/v3/yboedp/aadhaarFetchData",
          body: data,
          headers: {
        },
        failOnStatusCode: false
      }).as('aadhaarFetchData');
})

Then("I should get unauthorized response with status code 401", () => {
    cy.get("@aadhaarFetchData").its('status').should('eq',401)
  });