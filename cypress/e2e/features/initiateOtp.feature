Feature: testinitiateOtp
    Scenario: initiateOtp_200_response
        When I trigger initiate otp api with mobile number
        Then I should get success response with status code 200

    Scenario: initiateOtp_400_response
        When I trigger initiate otp with empty mobile number
        Then I should get bad request response with status 400

    Scenario: initiateOtp_401_response
        When I trigger initiate otp api without access key
        Then I should get unauthorized error with status 401

