from selenium import webdriver
import time
from selenium.webdriver.chrome.service import service
from selenium.webdriver.common.by import By

serv_obj = service("path of the chromedriver")
driver = webdriver.chrome(service = serv_obj)

driver.get("https://demo.automationtesting.in/frames.html")
driver.maximize_window()

driver.find_element(By.XPATH,"//a[normalize-space()='iframe with in an Iframe']").click()

outerframe = driver.find_element(By.XPATH,"//iframe[@src = 'multipleframes.html']")
driver.switch_to.frame(outerframe)

innerframe = driver.find_element(By.XPATH,"/html/body/section/div/div/iframe")
driver.switch_to.frame(innerframe)

driver.find_element(By.XPATH,"//input[@type='text']").send_keys("welcome")

driver.switch_to.parent_frame()#directly switch to parent frame(outer frame)