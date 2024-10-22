*** Settings ***

Library     SeleniumLibrary

*** Test Cases ***
Tablevalidation
        Open Browser      https://testautomationpractice.blogspot.com/       chrome
        Maximize Browser Window
        ${row}      Get Element Count   //table[@name='BookTable']/tbody/tr
        ${coloumn}      Get Element Count       //table[@name='BookTable']/tbody/tr/th
        
        Log To Console    ${row}
        Log To Console    ${coloumn}

        ${data}     Get Text    //table[@name='BookTable']/tbody/tr[3]/td[2]

        Log To Console    ${data}
        
        Table Column Should Contain   //table[@name='BookTable']    1       BookName
        Table Row Should Contain    //table[@name='BookTable']    5    Mukesh
        Table Cell Should Contain    //table[@name='BookTable']    6    2    Amod
        Table Header Should Contain    //table[@name='BookTable']    BookName

        close browser