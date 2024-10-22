from selenium import webdriver
from selenium.webdriver.chrome.service import service

serv_obj = service("path of the chromedriver")
driver = webdriver.chrome(service = serv_obj)

driver.get("https://admin-demo.nopcommerce.com/login")

emailbox = driver.find_element(By.XPATH,"//input[@id='Email']")
email.clear()
emailbox.send_keys("abc@gmail.com")

print("result of text:",emailbox.text)# printing nothing
print("result of get_attribute:",emailbox.get_attribute('value'))# print abc@gmail.com

# reverse of above
button = driver.find_element(By.XPATH,"//button[normalize-space()='log in']")
print("result of text:",button.text)#
print("result of get_attribute():", button.get_attribute("value"))#