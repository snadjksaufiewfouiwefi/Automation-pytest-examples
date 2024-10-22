*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
captureScreenshot

    Open Browser        https://www.wikipedia.org/      chrome
    Maximize Browser Window

    Capture Element Screenshot    xpath://nav[@aria-label='Top languages']      world.jpg
    Capture Page Screenshot     frontpage.jpg

    Close Browser
