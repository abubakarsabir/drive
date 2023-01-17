Feature: Testing prequalify form 

    Background: User should launch the site

        Given I launch the drive site and clicked the prequalify button

    Scenario: Fill in the user's information

        When The user completes the form by entering personal information
        |username   |lastname   |emailaddress        |confirmemailaddress   |phonenumber   |
        |Gary       |BEATTIE    |aalrawi@autofi.io   |aalrawi@autofi.io     |6660388331    |
       
        Then I pressed the next button

        Then The user completes the form by entering residential information
        |addone                |addtwo  |city             |zipcode  |state    |residence    |mpayment    |
        |5747 W MISSOURI AVE   |LOT134  |Jefferson City   |85301    |Arizona  |own          |6000        |
        
        Then I pressed the next button 
   
        Then The user completes the form by entering employment information
        |empstatus  |empname  |jobtitle |grossincome  |
        |employed   |Ahmed    |SDET     |72000        |

        Then I pressed the next button 
        
        Then The user completes the form by credit score information
        |ssone  |sstwo  |ssthree    |month  |day    |year   |
        |000    |00     |0000       |01     |23     |1986   |

        Then I pressed the next button 

        Then I checked the checkboxes
    
        Then I clicked the recaptcha 

  