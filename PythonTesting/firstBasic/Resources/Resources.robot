*** Settings ***
Library     SeleniumLibrary

*** Variables ***
${url}      https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F
${browser}      chrome

*** Keywords ***
opening my browser
        Open Browser    ${url}      ${browser}
        Maximize Browser Window

closing my browser
        Close All Browsers
        
loging into page
        Go To    ${url}

inputing username
        [Arguments]     ${username}
        Input Text    id:Email    ${username}

inputing password
        [Arguments]     ${password}
        Input Text    id:Password(*locator hai*)    ${password}
        
click login button
        Click Element    //button[@type='submit']
        
click logout button
        Click Link    Logout

error message should be visible
        Page Should Contain    Login was unsuccessful. Please correct the errors and try again.


dashboard page should be visible
        Page Should Contain    dashboard
