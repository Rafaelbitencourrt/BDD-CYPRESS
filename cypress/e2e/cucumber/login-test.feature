Feature: login

  Feature: This feature is required for a user to login.

  Scenario: Success Login
  
    Given A user opens the login page
    When A user enters a username "standard_user"
    And A user enters the password "secret_sauce"
    And A user clicks on the login button
    Then A user will be on the logged-in page
