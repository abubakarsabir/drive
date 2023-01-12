Feature: Shop Car Filters
  In order to test shop car filters of application
  As a Registered user
  I want to specify the features of shop car filters

   Background:
    Given 85301 is the zip code

 # Scenario: condition filter testing 
  #  When The user selects the ShopCars tab
  #  Then The user tries various "<options>" within the condition tab

  # Examples:
     |options|
     |New    |
     |Used   |   
     |Certified Pre-owned |

  Scenario: body type filter testing 
    When The user selects the body type filter tab
    Then The user tries various "<bodytypes>" option

  Examples:
     |bodytypes   |
     |convertible |
     |coupe       |
     |hatchback   |    
     |minivan     |
     |sedan       |
     |suv         |
     |truck       |
     |wagon       | 