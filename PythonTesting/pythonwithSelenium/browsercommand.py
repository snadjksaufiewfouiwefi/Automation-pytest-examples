from selenium import webdriver
from selenium.webdriver.chrome.service import service

serv_obj = service("path of the chromedriver")
driver = webdriver.chrome(service = serv_obj)

driver.get("https://demo.OrnageHRM.com/register")
driver.maximize_window()


driver.find_element(By.LINK_TEXT,"OrnageHRM,Inc").click()
time.sleep(5)
driver.close()# close the first browser

#OR
 
driver.quit()#close the multiple browser window