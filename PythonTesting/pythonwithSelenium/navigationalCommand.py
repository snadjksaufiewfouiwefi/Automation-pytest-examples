from selenium import webdriver
from selenium.webdriver.chrome.service import service

serv_obj = service("path of the chromedriver")
driver = webdriver.chrome(service = serv_obj)

driver.get("https://www.snapdeal.com")
driver.get("https://www.amazon.com")
driver.back()# this will go to snapdeal.com
driver.forward()# again amzon

driver.refresh()

driver.quit()
