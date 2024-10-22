Library    SeleniumLibrary
*** Settings ***
Library     SeleniumLibrary
*** Variables ***

*** Test Cases ***


*** Keywords ***
start Testcase
    Open Browser    http://www.ebay.com     crome
    Maximize Browser Window
    Sleep    4s

finish Testcase
    Close Browser

