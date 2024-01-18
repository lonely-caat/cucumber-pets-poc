Feature: API testing with Jest and Cucumber

  Scenario: Posting a new pet to the pet store
    Given I make a POST request with a new pet object
    Then the response should be 200

  Scenario: Adding a pet with a non-unique ID
    Given I make a POST request with a pet object with a non-unique ID
    Then the response should be 409

  Scenario: Adding a pet with special characters in name
    Given I make a POST request with a pet object with special characters in the name
    Then the response should be 200

  Scenario: Adding a pet with missing required fields
    Given I make a POST request with a pet object with missing required fields
    Then the response should be 405

  Scenario: Adding a pet with a non-unique name
    Given I make a POST request with a pet object with a non-unique name
    Then the response should be 409
