*** Settings ***
Documentation   Example Robot Framework Test Suite for Login Page
Library          SeleniumLibrary
Library          OperatingSystem

*** Variables ***
${BROWSER}       Chrome
${URL}           https://example.com
${USERNAME}      user@example.com
${PASSWORD}      password123

*** Test Cases ***
Login Test
    Open Browser To Login Page
    Input Username
    Input Password
    Submit Login Form
    Welcome Page Should Be Open

*** Keywords ***
Open Browser To Login Page
    Open Browser    ${URL}    ${BROWSER}
    Maximize Browser Window
    Title Should Be    Example Website

Input Username
    Input Text    id=username_field    ${USERNAME}

Input Password
    Input Text    id=password_field    ${PASSWORD}

Submit Login Form
    Click Button    id=login_button

Welcome Page Should Be Open
    Wait Until Page Contains Element    id
