*** Settings ***
Library     SeleniumLibrary


*** Test Cases ***
test speed case
    ${speed}    Get Selenium Speed
    Log To Console    ${speed}
    Open Browser    https://www.discussoftware.com/     firefox
    Maximize Browser Window
    Set Selenium Speed    3sec

    Input Text    //*[@id="is-search-input-0"]    coders
    Input Text    name:lastname    arcade
    Select Radio Button    sex    female
    Select Radio Button    exp    6

    Close Browser