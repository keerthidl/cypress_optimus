Feature: testAadhaarOtpVerfication
    Scenario: aadhaarOtpVerification_200_response
        When I trigger aadhaar verify otp api with aadhaar number
        Then I should get success response
        
    Scenario: aadhaarOtpVerification_400_response
        When I trigger aadhaar verify otp api without aadhaar number
        Then I should get bad request response

    Scenario: aadhaarOtpVerification_401_response
        When I trigger aadhaar verify otp api without access key
        Then I should get unauthorized response with status 401