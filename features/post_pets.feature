Feature: API testing with Jest and Cucumber

  Scenario: Posting a new pet to the pet store
    Given I make a POST request to "https://petstore.swagger.io/v2/pet"
    When I send the pet data
    Then the response should be 200
