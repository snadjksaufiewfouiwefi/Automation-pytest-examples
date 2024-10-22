from selenium import webdriver
from selenium.webdriver.chrome.service import service
from selenium.webdriver.common.by import By

serv_obj = service("path of the chromedriver")
driver = webdriver.chrome(service = serv_obj)

driver.get("https://demo.nopcommerce.com")
driver.maximize_window()

#click on link
#driver.find_element(By.LINK_TEXT,"Digital downloads").click()
#driver.find_element(By.PARTIAL_LINK_TEXT,"Digital").click()

#find number of links in a page
links = driver.find_elements(By.TAG_NAME,'a')# you can use xpath also
print("total no of links:",len(links))

#print all the links names
for link in links:
    print(link.text)

