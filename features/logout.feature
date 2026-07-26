Feature: Logout Functionality

  Scenario: User logout from inventory page
    Given User is logged in with username "standard_user"
    And User is on inventory page
    When User clicks hamburger menu button
    Then Menu should display logout option
    When User clicks logout button
    Then User should be redirected to login page
    And Login form should be visible

  Scenario: Logout clears session
    Given User is logged in with username "standard_user"
    And User adds "Sauce Labs Backpack" to cart
    When User clicks hamburger menu button
    And User clicks logout button
    And User navigates back to inventory page
    Then Login page should be displayed
    And User should not have access to inventory page

  Scenario: Cart is cleared after logout and login
    Given User is logged in with username "standard_user"
    And User adds "Sauce Labs Backpack" to cart
    When User clicks hamburger menu button
    And User clicks logout button
    And User logs in again with username "standard_user"
    Then Cart badge should not be visible
