from selenium import webdriver
from selenium.webdriver.chrome.service import service
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_condition as EC


serv_obj = service("path of the chromedriver")
driver = webdriver.chrome(service = serv_obj)
#mywait = WebDriverWait(driver,10)# basic
mywait = WebDriverWait(driver,10,pole_frequency=2,ignored_exception = [nosuchelementexception,
                                                      elementnotvisibleexception,
                                                      elementnotselectebleexception,
                                                      exception]) # explicit wait declaration

driver.get("https://www.google.com/")
driver.maximize_window()

searchbox = driver.find_element(By.NAME, "q")

searchbox.send_keys("selenium")
searchbox.submit()

searchlink = mywait.until(EC.presence_of_element_located((By.XPATH,"//h3[text()='selenium']")))
searchlink.click()

driver.quit()