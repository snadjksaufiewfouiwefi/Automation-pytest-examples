*** Settings ***
Library     SeleniumLibrary


*** Variables ***
${url}  https://www.google.com/
${Browser}  chrome



*** Test Cases ***
dropdown
     Select From List By Label    continent     asia
     Select From List By Index    continent     6
     Select From List By Value    locator