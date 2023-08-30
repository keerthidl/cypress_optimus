Feature: test ckyc search Api
    Scenario: ckycSearch_200_response
        When I trigger ckyc search api with apiToken
        Then I should get success response with status 200

    Scenario: ckycSearch_400_response
        When I trigger ckyc search api without apiToken
        Then I should get bad request response with status 400

     Scenario: ckycSearch_401_response
        When I trigger ckyc search api without access key
        Then I should get unauthorized response with status 401
