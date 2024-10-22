*** Settings ***

Library     SeleniumLibrary

*** Variables ***
${url1}      https://testautomationpractice.blogspot.com/
${url2}      https://www.google.com/
${browser}      chrome

*** Test Cases ***
practisetest
        ${pagetitle}    launchingbrowser    ${url2}      ${browser}
        Log To Console    ${pagetitle}
        Log     ${pagetitle}
        #inputvalues


*** Keywords ***
launchingbrowser
        [Arguments]     ${weburl}    ${webbrowser}
        Open Browser    ${weburl}      ${webbrowser}
        Maximize Browser Window
        ${title}    Get Title
        [Return]    ${title}

inputvalues
        Input Text    //input[@id='name']    sanket
        Input Text    //input[@id='email']    abc.@gmail.com
