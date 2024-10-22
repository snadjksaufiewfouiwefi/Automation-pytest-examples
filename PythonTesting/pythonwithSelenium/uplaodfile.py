from selenium import webdriver
from selenium.webdriver.chrome.service import service
from selenium.webdriver.common.by import by

serv_obj = Service("path of the crome driver")
driver = webdriver.chrome(service = serv_obj)

driver.get("https://www.monsterindia.com/")
driver.maximize_window()

driver.find_element(By.XPATH,"//span[@class='uprcse semi-bold,]").click()
driver.find_element(By.XPATH,"//*[@id='file-uplaod']").send_keys("C:\selenium\sample.pdg")
