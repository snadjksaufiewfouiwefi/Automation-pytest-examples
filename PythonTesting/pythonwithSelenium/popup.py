from selenium import webdriver
import time
from selenium.webdriver.chrome.service import service
from selenium.webdriver.common.by import By

serv_obj = service("path of the chromedriver")
driver = webdriver.chrome(service = serv_obj)

driver.get("https://admin:admin@the-internet.herokuapp.com/basic_auth")

driver.maximize_window()

driver.switch_to.frame("packageListFrame")
driver.find_element(By.LINK_TEXT,"org.openqa.selenium").click()
driver.switch_to.default_content() # go back to main page

driver.switch_to.frame("packageFrame")
driver.find_element(By.LINK_TEXT,"webdriver").click()
driver.switch_to.default_content() # go back to main page

driver.switch_to.frame("classFrame")
driver.find_element(By.LINK_TEXT,"/html/body/header/nav/div[1]/ul/li[8]").click()