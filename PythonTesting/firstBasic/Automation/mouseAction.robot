*** Settings ***

Library     SeleniumLibrary

*** Test Cases ***
MouseAction
        Open Browser    https://testautomationpractice.blogspot.com/        chrome
        Maximize Browser Window
        #Open Context Menu    xpath://button[normalize-space()='Copy Text']
        Double Click Element   xpath://button[normalize-space()='Copy Text']
        Sleep    2
        Close Browser
        
