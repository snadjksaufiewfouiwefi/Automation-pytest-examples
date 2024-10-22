*** Settings ***
Library  SeleniumLibrary
*** Variables ***
${url}  https://www.flipkart.com
${Browser}  chrome

*** Test Cases ***
ValidationTest
    Open Browser    ${url}  ${Browser}
    wait until page contains    ${url}
    Maximize Browser Window
    #Title Should Be    /html/body/div[3]/div/div/div/div[1]/p
    ${input_text}   Set Variable    xpath:/html/body/div[3]/div/div/div/div[1]/p
    Element Should Be Enabled    ${input_text}
    Element Should Be Visible    ${input_text}
    Sleep    3
    Input Text    xpath://html/body/div[3]/div/div/div/div[1]/p    8109708020
    Sleep    3
    Clear Element Text  xpath:/html/body/div[3]/div/div/div/div[1]/p
    Sleep    3
    Close Browser





*** Keywords ***
