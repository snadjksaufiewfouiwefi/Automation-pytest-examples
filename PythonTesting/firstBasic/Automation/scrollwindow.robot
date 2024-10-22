*** Settings ***

Library     SeleniumLibrary

*** Test Cases ***
scrollwindow
        Open Browser    xpath://https://en.wikipedia.org/wiki/Main_Page/     chrome
        Maximize Browser Window
        Sleep    2

        #Execute Javascript  window.scrollTo(0,1000) scroll upto 1000pxl 0 is for horizontal full margin
        #Scroll Element Into View    xpath://img[@alt='Venus Anadyomene'] scroll up to perticular image of which you paste the xpath
        Execute Javascript     window.scrollTo(0,document.body.scrollHeight)
        Sleep    2
        Execute Javascript     window.scrollTo(0,-document.body.scrollHeight)

