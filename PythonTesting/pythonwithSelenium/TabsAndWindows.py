from selenium import webdriver
from selenium.webdriver import keys
from selenium.webdriver.chrome.service import service
from selenium.webdriver.common.by import by


serv_obj = Service("path of the crome driver")
driver = webdriver.chrome(service = serv_obj)
driver.implicitly_wait(10)

driver.get("https://demo.nopcommerce.com/")
driver.maximize_window()
regilink = keys.CONTROL+keys.RETURN
driver.find_element(By.LINK_TEXT,"register").send_keys(regilink)

## new tab - selenium4: opens a new tab and switches to new tab
driver.get("https://www.opencart.com/")
driver.switch_to.new_window('tab')# ("window")open a new browser window
driver.get("https://www.orangehrm.com/")
