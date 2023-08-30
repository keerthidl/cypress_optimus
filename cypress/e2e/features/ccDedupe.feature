Feature: test CC Dedupe API
    Scenario: ccDedupe_200_response
        When I trigger ccDedupe with pan number and mobile number
        Then I should success response with status 200

    Scenario: ccDedupe_400_response
        When I trigger ccDedupe API without pan number or mobile number
        Then I should get bad request response with status 400
    
    Scenario: verifyOtp_401_response
        When I trigger ccDedupe without access key
        Then I should get unauthorized request response with status 401

