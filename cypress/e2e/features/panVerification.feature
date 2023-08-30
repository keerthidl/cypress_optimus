Feature: Pan verification Test cases
    Scenario: Pan verification 200 response
        When I trigger pan verification api with pan number
        Then I should get success response with status 200

    Scenario: Pan verification 400 response
        When I trigger pan verification api without pan number
        Then I should get bad request response with status 400
    
    Scenario: Pan verification 401 response
        When I trigger pan verification api without access key
        Then I should get unauthorized response with status 401