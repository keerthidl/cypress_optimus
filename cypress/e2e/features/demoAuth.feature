Feature: demoAuth
    Scenario: demoAuthSuccess_200_response
        When I trigger demo auth API
        Then I should get success response

    Scenario: demoAuthBadRequest_400_response
        When I trigger demo Auth API with no data
        Then I should get Bad request response
    
     Scenario: demoAuthBadRequest_401_response
        When I trigger demo Auth API with no access key
        Then I should get Unauthorized request response