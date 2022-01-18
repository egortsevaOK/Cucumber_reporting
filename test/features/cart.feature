@smoke
Feature: Shopping cart

Background:
Given I go to shop.scholastic.com

@cart
Scenario: Sign in with wrong credentials after adding item to cart 
  When I click on 'New Programs' link from the side menu
  And I add to cart the first item from the product list
  And I save item name in world
  And I click on checkout button in the pop up window notified about item added to cart
  And I sign in with wrong credentials
  And I close sign in form
  And I navigate to shopping cart
  Then cart banner should be 'Shopping Cart'
  And item added to the cart should be 'First Little Readers Parent Pack: Guided Reading Level A'

@filter
 Scenario Outline: Filter items by <Category> <Subcategory> and sort by <SortOption>
  When I hover over '<Category>' 
  And I click on '<Subcategory>'
  Then page banner should be '<Subcategory>'
  And I sort items by '<Sort Option>'
  Then items should be sorted by '<Sort Option>'

  Examples:
      | Category                     | Subcategory          | Sort Option        |
      | Programs, books & libraries  | Independent Reading  | Most Recent        |
      | Subject, genre, theme        | Math                 | Price Low To High  |
      | Category                     | Workbooks            | Price High To Low  |
       
       