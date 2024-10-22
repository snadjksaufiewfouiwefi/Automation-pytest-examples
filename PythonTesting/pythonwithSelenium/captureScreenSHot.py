from selenium import webdriver
from selenium.webdriver.chrome.service import service
from selenium.webdriver.common.by import by
import  os

serv_obj = Service("path of the crome driver")
driver = webdriver.chrome(service = serv_obj)
driver.implicitly_wait(10)

driver.get("https://demo.nopcommerce.com/")
driver.maximize_window()

driver.save_screenshot("path of the location where you want to save the file")
#OR
driver.save_screenshot(os.getcwd()+"//homepage.png")
#OR
driver.get_screenshot_as_file(os.getcwd()+"//homepage.png")
#OR
driver.get_screenshot_as_png()
#BOTH ARE SAME
driver.get_screenshot_as_base64()
driver.quit()