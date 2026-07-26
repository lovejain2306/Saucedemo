Feature: Login Functionality

  Background:
    Given User navigates to Sauce Demo application

  Scenario: Successful login with valid credentials
    When User enters username "standard_user"
    And User enters password "secret_sauce"
    And User clicks login button
    Then User should be redirected to inventory page
    And Inventory page should display all products

  Scenario: Login failure with invalid credentials
    When User enters username "invalid_user"
    And User enters password "invalid_password"
    And User clicks login button
    Then Login error message should be displayed
    And Error message should contain "Username and password do not match"

  Scenario: Login with empty username
    When User enters password "secret_sauce"
    And User clicks login button
    Then Login error message should be displayed
    And Error message should contain "Username is required"

  Scenario: Login with empty password
    When User enters username "standard_user"
    And User clicks login button
    Then Login error message should be displayed
    And Error message should contain "Password is required"

  Scenario: Locked out user cannot login
    When User enters username "locked_out_user"
    And User enters password "secret_sauce"
    And User clicks login button
    Then Login error message should be displayed
    And Error message should contain "Sorry, this user has been locked out"
