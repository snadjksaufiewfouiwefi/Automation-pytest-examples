*** Settings ***
Library     SeleniumLibrary


*** Variables ***
${url}  https://www.google.com/
${Browser}  chrome



*** Test Cases ***
input
    Open Browser    ${url}  ${Browser}
    Maximize Browser Window
    Sleep    2
    Input Text   XPATH://*[@id="input"]    amazon
    Press Keys  Return
    Clear Element Text    xpath://*[@id="APjFqb"]
    Sleep    2
    Input Text   xpath://*[@id="APjFqb"]        facebook
    Click Button    xpath://*[@id="tsf"]/div[1]/div[1]/div[2]/button




*** Keywords ***