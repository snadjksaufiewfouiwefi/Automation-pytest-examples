*** Settings ***

Library     SeleniumLibrary

*** Test Cases ***
windowsdifferenttabclosing
        Open Browser        https://robotframework.org/     chrome
        Maximize Browser Window
        Sleep    3
        Click Link    xpath://a[normalize-space()='SeleniumLibrary']
        Sleep    2
        Switch Window   Robot Framework
        Sleep    3
        Close Window
        Sleep    2
        Close Browser