Feature: Checkout Process

  Background:
    Given User is logged in with username "standard_user"
    And User is on inventory page

  Scenario: Complete checkout with valid information
    When User adds "Sauce Labs Backpack" to cart
    And User adds "Sauce Labs Bike Light" to cart
    And User clicks on shopping cart
    Then Cart page should display "2" items
    When User clicks checkout button
    Then Checkout information page should be displayed
    When User enters first name "John"
    And User enters last name "Doe"
    And User enters postal code "12345"
    And User clicks continue button
    Then Order review page should be displayed
    And Order total should be calculated correctly
    When User clicks finish button
    Then Order confirmation page should be displayed
    And Confirmation message should contain "Thank you for your order"

  Scenario: Checkout with missing first name
    When User adds "Sauce Labs Backpack" to cart
    And User clicks on shopping cart
    And User clicks checkout button
    And User enters last name "Doe"
    And User enters postal code "12345"
    And User clicks continue button
    Then Checkout error message should be displayed
    And Error message should contain "First Name is required"

  Scenario: Remove item from cart during checkout
    When User adds "Sauce Labs Backpack" to cart
    And User adds "Sauce Labs Bike Light" to cart
    And User clicks on shopping cart
    And User removes "Sauce Labs Backpack" from cart
    Then Cart should display "1" item
    And Cart should not contain "Sauce Labs Backpack"

  Scenario: Continue shopping from cart
    When User adds "Sauce Labs Backpack" to cart
    And User clicks on shopping cart
    And User clicks continue shopping button
    Then Inventory page should be displayed
    And Cart badge should still show "1" item
