*** Settings ***

Library     SeleniumLibrary

*** Test Cases ***
alertWindow
        Open Browser    https://testautomationpractice.blogspot.com/    chrome
        Click Button    xpath://button[@onclick='myFunctionAlert()']
        Sleep    2
        #Handle Alert    accept//dismiss --> cancel
        # verify the text on the alert window
        Alert Should Be Present     I am an alert box!
        Close Browser

