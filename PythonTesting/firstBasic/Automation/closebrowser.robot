*** Settings ***
Library     SeleniumLibrary
*** Test Cases ***
closingbrowser
     openbrowser    https://www.google.com/     chrome
     Maximize Browser Window
     Sleep    2


     Open Browser      https://www.flipkart.com/    chrome
     Maximize Browser Window
     Sleep    3

     #Close Browser *(only close the latest browser)*
     Close All Browsers