*** Settings ***

Library     SeleniumLibrary

*** Test Cases ***
dragAndDrop
        Open Browser    https://testautomationpractice.blogspot.com/        chrome
        Maximize Browser Window
        Sleep    1
        Drag And Drop    xpath://div[@id='draggable']    xpath://div[@id='droppable']
        # same command for more drag and drop images