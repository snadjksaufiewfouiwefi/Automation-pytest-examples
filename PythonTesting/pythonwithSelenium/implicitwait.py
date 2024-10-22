from selenium import webdriver
from selenium.webdriver.chrome.service import service
import time

serv_obj = service("path of the chromedriver")
driver = webdriver.chrome(service = serv_obj)
driver.implicitly_wait(10) # seconds # implicit wait

driver.get("https://www.google.com/")
driver.maximize_window()

searchbox = driver.find_element(By.NAME, "q")

searchbox.send_keys("selenium")
searchbox.submit()

#time.sleep(5)
driver.find_element(By.XPATH,"//h3[text()='selenium']").click()
driver.quit()