*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
browsercommand
    Open Browser    https://www.google.com/     chrome
    Maximize Browser Window
    Sleep    2
    
    Go To    https://www.yahoo.com/

    Sleep    2

    Go Back

    Sleep    3s

    Close Browser