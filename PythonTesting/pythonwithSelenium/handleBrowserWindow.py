from selenium import webdriver
import time
from selenium.webdriver.chrome.service import service
from selenium.webdriver.common.by import By

serv_obj = service("path of the chromedriver")
driver = webdriver.chrome(service = serv_obj)

driver.get("https://opensource-demo.orangehrmlive.com")
driver.maximize_window()

window = driver.current_window_handle
print(windowid)# CDwindow- 461986612654112564(random)

driver.find_element(By.LINK_TEXT,"orangeHRM,inc").click()
windowsIDs = driver.window_handles

parentwindowid = windowsIDs[0]
childwindowid = windowsIDs[1]

#print(parentwindowid,childwindowid)

driver.switch_to.window(childwindowid)
print("title of the child window",driver.title)

driver.switch_to.window(parentwindowid)
print("title of the parent window",driver.title)

driver.close()

#Approach 2 if the windows id is many (8-10)

for winid in windowsIDs:
    driver.switch_to.window(winid)
    print(driver.title)

#multiple browser window, based on our own choice we have to close perticular window
for winid in windowsIDs:
    driver.switch_to.window(winid)
    if driver.title == 'orangeHRM' and/or driver.title ="xys":# close specific windows
        driver.close()
