Feature: Testing prequalify form for different types of employment status

    Each user should have a different experience

    Background: User should launch the site
        Given I launch the drive site and clicked the prequalify button

    Scenario Outline: A user should be able to fill prequalify form with different <residence> and <empstatus>
        When I entered the username
        When I entered the lastname
        When I entered the emailaddress 
        When I entered the confirmemailaddress
        When I entered the phonenumber 
        Then I clicked the next button one
        When I entered the addone
        When I entered the addtwo
        When I entered the city 
        When I entered the zipcode 
        When I selected the state
        Then I selected the "<residence>"
        When I entered the monthlypayment
        Then I clicked the next button two
        Then I selected different "<empstatus>"
        When I entered employername
        When I entered the jobtitle
        When I entered the grossannualincome 
        Then I clicked the next button three 
        When I entered the socialsecuritynumber
        When I entered the dob
        Then I clicked the next button four
        When I checked the checkboxes
        Then I clicked the recaptcha 

        # First Approach

         Examples:
                | residence| empstatus    | 
                | rent     | employed     | 
                | own      | employed     | 
      #          | rent     | self employed|
      #          | own      | self employed|
       #         | rent     | retired      |
      #          | own      | retired      |
      #          | rent     | unemployed   |
      #          | own      | unemployed   |
      #          | rent     | other        |
       #         | own      | other        |
        