*** Settings ***
Library     SeleniumLibrary


*** Variables ***
${url}      http://practiceselenium.com/
${browser}      chrome


*** Test Cases ***
checking radio buttons and check boxes
    Open Browser    ${url}  ${browser}
    Maximize Browser Window
    
    #selecting the radio buttons
    Select Radio Button    sex    female
    Select Radio Button    exp    6
     
    Select Checkbox    locator
    Unselect Checkbox    locator

*** Keywords ***