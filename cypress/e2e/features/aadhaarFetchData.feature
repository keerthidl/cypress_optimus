Feature: test aadhaar fetch Api
    Scenario: aadhaarFetchdata_200_response
        When I trigger aadhaar fetch data api with aadhaar number aadhaar otp and consent
        Then I should get success response with status 200
        
    Scenario: aadhaarfetchData_400_response
        When I trigger aadhaar fetch api without aadhaar number aadhaar otp and consent
        Then I should get bad request response with status code 400

    Scenario: aadhaarfetchData_401_response
        When I trigger aadhaar fetch api without access key
        Then I should get unauthorized response with status code 401