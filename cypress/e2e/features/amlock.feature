Feature: test Amlock Api
    Scenario: amlock_200_response
        When I trigger amlock api with apiToken
        Then I should get success response with status 200

    Scenario: amlock_400_response
        When I trigger amlock api without apiToken
        Then I should get bad request response with status 400
    
    Scenario: amlock_401_response
        When I trigger amlock lock api without access key
        Then I should get response with status 401
