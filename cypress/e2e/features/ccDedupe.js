import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I trigger ccDedupe with pan number and mobile number", () => {
  cy.fixture("verifyOtp.json")
    .then((data) => {
      cy.request({
        method: "POST",
        url: "https://api-staging.signzy.app/api/v3/yboedp/verifyOTP",
        body: data,
        headers: {
          "access-key": "6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV",
        },
        failOnStatusCode: false
      });
    })
    .as("verifyOtp");
});

Then("I should success response with status 200", () => {
  cy.get("@verifyOtp").its("status").should("eq", 200);
});

When("I trigger ccDedupe API without pan number or mobile number", () => {
  // cy.fixture("verifyOtp.json")
  //   .then((data) => {
    const data = {}
      cy.request({
        method: "POST",
        url: "https://api-staging.signzy.app/api/v3/yboedp/verifyOTP",
        body: data,
        headers: {
          "access-key": "6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV",
        },
        failOnStatusCode: false
      // });
    })
    .as("verifyOtp");
});

Then("I should get bad request response with status 400", () => {
  cy.get("@verifyOtp").its("status").should("eq", 400);
});

When("I trigger ccDedupe without access key", () => {
  cy.fixture("verifyOtp.json")
    .then((data) => {
      cy.request({
        method: "POST",
        url: "https://api-staging.signzy.app/api/v3/yboedp/verifyOTP",
        body: data,
        headers: {},
        failOnStatusCode: false
      });
    })
    .as("verifyOtpRequest");
});

Then("I should get unauthorized request response with status 401", () => {
  cy.get("@verifyOtpRequest").its("status").should("eq", 401);
});
