from selenium import webdriver
from selenium.webdriver.chrome.service import service

ops = webdriver.chromeOption()
ops.add_argument("--disable-notifications")

serv_obj = Service("path of the crome driver")

driver = webdriver.chrome(service = serv_obj, option = ops)

driver.get("https://whatmylocation.com/")
driver.maximize_window()