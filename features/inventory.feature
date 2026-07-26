Feature: Inventory Management

  Background:
    Given User is logged in with username "standard_user"
    And User is on inventory page

  Scenario: View all products on inventory page
    Then Inventory page should display "6" products
    And Each product should have name, price and add to cart button

  Scenario: Add product to cart
    When User adds "Sauce Labs Backpack" to cart
    Then Cart badge should show "1" item
    And "Add to Cart" button should change to "Remove"

  Scenario: Remove product from cart
    When User adds "Sauce Labs Backpack" to cart
    And User removes "Sauce Labs Backpack" from cart
    Then Cart badge should not be visible
    And "Remove" button should change back to "Add to Cart"

  Scenario: Sort products by price low to high
    When User sorts products by "Price (low to high)"
    Then Products should be sorted in ascending order by price

  Scenario: Sort products by name A to Z
    When User sorts products by "Name (A to Z)"
    Then Products should be sorted alphabetically

  Scenario: Navigate to product details
    When User clicks on product "Sauce Labs Backpack"
    Then Product details page should be displayed
    And Product details should show name, description, price and image
