Feature: Shop Car Filters
  In order to test shop car filters of application
  As a Registered user
  I want to specify the features of shop car filters

  Scenario: 
    Given 85301 is the zip code
    When The user selects the ShopCars tab
    Then The user tries various "<options>" within the condition tab

  #Scenario: GitHub Bootcamp Section
   # Given user is on GitHub home page
   # When user focuses on GitHub Bootcamp Section
   # Then user gets an option to setup git
   # And user gets an option to create repository
   # And user gets an option to Fork Repository
   # And user gets an option to work together

  #Scenario: Top Banner content
   # Given user is on GitHub home page
   # When user focuses on Top Banner
   # Then user gets an option of home page
   # And user gets an option to search
   # And user gets settings options
   # And user gets an option to logout

   Examples:
                |options |
                |New   |
                | Used |   
                | Certified Pre-owned |