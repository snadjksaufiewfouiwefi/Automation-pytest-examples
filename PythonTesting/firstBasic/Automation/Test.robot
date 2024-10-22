*** Settings ***
Library  SeleniumLibrary
*** Variables ***
${url}  https://www.google.com/
${Browser}  chrome

*** Test Cases ***
Google
   insidegoogle




*** Keywords ***
insidegoogle
     Open Browser  ${url}    ${Browser}
    Maximize Browser Window
    Sleep    10
    Close Browser