*** Settings ***
Library     SeleniumLibrary


*** Test Cases ***
test speed case
    Open Browser    https://www.discussoftware.com/     firefox
    Maximize Browser Window
   # Set Selenium Timeout    10 seconds
   ${wait}   get Selenium Implicit Wait
   Log To Console    ${wait}
    #Wait Until Page Contains    Practice form
    set Selenium Implicit Wait  10 seconds

   ${wait}   get Selenium Implicit Wait
   Log To Console    ${wait}

    Input Text    name:firstname   coders
    Input Text    name:lastname     arcade

    Select Radio Button    sex    female
    Select Radio Button    exp    5
    Close Browser