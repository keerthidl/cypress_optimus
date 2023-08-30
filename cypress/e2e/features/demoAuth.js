import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When("I trigger demo auth API", () => {
    cy.fixture("demoAuth.json").then((data) => {
        cy.request({
            method: "POST",
            url: "https://api-staging.signzy.app/api/v3/yboedp/demoAuth",
            body: data,
            headers: {
                'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
            },
            failOnStatusCode:false
        });
    }).as('demoAuthRequest');
})

Then("I should get success response", () => {
    cy.get("@demoAuthRequest").its('status').should('eq', 200)
});


When("I trigger demo Auth API with no data", () => {
        const data = {}
        cy.request({
            method: "POST",
            url: "https://api-staging.signzy.app/api/v3/yboedp/demoAuth",
            body: data,
            headers: {
                'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
            },
            timeout:10000,
            failOnStatusCode:false
    }).as('demoAuthRequest');
})

Then("I should get Bad request response", () => {
    cy.get("@demoAuthRequest").its('status').should('eq', 400)
});

When("I trigger demo Auth API with no access key", () => {
    cy.fixture("demoAuth.json").then((data) => {
        cy.request({
            method: "POST",
            url: "https://api-staging.signzy.app/api/v3/yboedp/demoAuth",
            body: data,
            headers: {
            },
            failOnStatusCode:false
        })
    }).as('demoAuthRequest');
})

Then("I should get Unauthorized request response", () => {
    cy.get("@demoAuthRequest").its('status').should('eq', 401)
});