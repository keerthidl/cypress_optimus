import {When, Then} from '@badeball/cypress-cucumber-preprocessor'

When("I trigger pan verification api with pan number", () =>{
    cy.fixture("panVerification.json").then((data)=>{
        cy.request({
            method:'POST',
            url:'http://staging.signzy.xyz/nca/yboedp/panValidation',
            body:data,
            headers:{
                'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
            },
            timeout:50000,
            failOnStatusCode: false,
        }).as('panVerification');
    })
})

Then("I should get success response with status 200",()=>{
    cy.get("@panVerification").its('status').should('eq',200)
})


When("I trigger pan verification api without pan number", () =>{
        const data = {}
        cy.request({
            method:'POST',
            url:'http://staging.signzy.xyz/nca/yboedp/panValidation',
            body:data,
            headers:{
                'access-key': '6FYSZXBd9CmirVtwCLpkFplJ4KbG6PUV'
            },
            failOnStatusCode: false,
        }).as('panVerification');
})

Then("I should get bad request response with status 400",()=>{
    cy.get("@panVerification").its('status').should('eq',400)
})


When("I trigger pan verification api without access key", () =>{
        const data = {}
        cy.request({
            method:'POST',
            url:'http://staging.signzy.xyz/nca/yboedp/panValidation',
            body:data,
            headers: {},
            failOnStatusCode: false,
            timeout:50000,
        }).as('panVerification');
})

Then("I should get unauthorized response with status 401", () => {
    cy.get("@panVerification").its('status').should('eq', 401)
  });