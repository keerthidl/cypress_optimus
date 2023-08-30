Feature: test Cibil Api
    Scenario: cibil_200_response
        When I trigger cibil api with apiToken
        Then I should get success response with status 200

    Scenario: cibil_400_response
        When I trigger cibil api without data
        Then I should get bad request response with status 400

    Scenario: cibil_401_response
        When I trigger cibil api without access key
        Then I should get unauthorized error with status 401
