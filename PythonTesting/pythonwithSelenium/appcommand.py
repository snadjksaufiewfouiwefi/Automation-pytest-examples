import By
import chromedriver
from selenium import webdriver
from selenium.webdriver.chrome.service import service
#from selenium.webdriver.common.by import by


serv_obj = service("path of the chromedriver")
driver = webdriver.chrome(service = serv_obj)

driver.get("https://opensource-demo.orangehrmlive.com/")

print(driver.title)
print(driver.current_url)
print(driver.page_source)

driver.quit()