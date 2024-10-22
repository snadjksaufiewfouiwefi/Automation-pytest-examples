from selenium import webdriver
from selenium.webdriver.chrome.service import service

serv_obj = service("path of the chromedriver")
driver = webdriver.chrome(service = serv_obj)

driver.get("https://demo.nopcommerce.com/register")
driver.maximize_window()

#is_displayed() is_enabled()
searchbox = driver.find_element(By.XPATH,"//input[@id='small-searchterms']")
print("display status:",searchbox.is_displayed())
print("enabled status:", searchbox.is_enabled())

#is_selected()
rd_male=driver.find_element(By.XPATH,"//input[@id = 'gender-male']")
rd_female=driver.find_element(By.XPATH,"//input[@id = 'gender-female']")

print("dafault radio button status...")
print(rd_male.is_selected())
print(rd_female.is_selected())

rd_male.click()#select male radio button
print("after selecting mae radio button...")
print(rd_male.is_selected())

driver.quit()