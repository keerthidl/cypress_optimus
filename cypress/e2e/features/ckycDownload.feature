Feature: test ckyc Download Api
    Scenario: ckycDownload_200_response
        When I trigger ckyc download api with apiToken
        Then I should get success response with status 200

    Scenario: ckycDownload_400_response
        When I trigger ckyc download api without apiToken
        Then I should get bad request response with status 400

    Scenario: ckycDownload_401_response
        When I trigger ckyc download api without access key
        Then I should get unauthorized response with status 401  
