@smoke
Feature: Shopping cart

Background: Open home page
Given I go to shop.scholastic.com

@cart
Scenario: Select item and add it to cart 
  When I click on 'New Programs' link from the side menu
  And I add to cart the first item in the list 
  And I click on checkout button
  And I login as an unauthorized user
  And I close sign in form
  And I view cart
  Then cart banner should be 'Shopping Cart'

@filter
 Scenario Outline: Filter items by <Category> <Subcategory> and sort by <SortOption>
  When I hover over '<Category>' 
  And I click on '<Subcategory>'
  And I sort items by '<SortOption>'
  Then page banner should be '<Subcategory>'
  And items should be sorted by '<SortOption>'

  Examples:
      | Category                     | Subcategory          |SortOption           |
      | PROGRAMS, BOOKS & LIBRARIES  | Independent Reading  |Most Recent          |
      | SUBJECT, GENRE, THEME        | Math                 |Price Low To High    |
      | CATEGORY                     | Workbooks            |Price High To Low    |
       
       