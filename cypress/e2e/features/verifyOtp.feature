Feature: test verify Otp Wrapper
    Scenario: verifyOtp_200_response
        When I trigger initiate otp api with customerId otpKey otpValue panNumber
        Then I should get success response with status 200

    Scenario: verifyOtp_400_response
        When I trigger initiate otp with customerId otpKey otpValue panNumber
        Then I should get bad request response with status 400
    
    Scenario: verifyOtp_401_response
        When I trigger initiate otp without access key
        Then I should get unauthorized request response with status 401

