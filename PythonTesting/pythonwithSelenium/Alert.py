from selenium import webdriver
from selenium.webdriver.chrome.service import service
from selenium.webdriver.common.by import By

serv_obj = service("path of the chromedriver")
driver = webdriver.chrome(service = serv_obj)

driver.get("https://the-internet.herokuapp.com/javascript_alerts")
driver.maximize_window()

driver.find_element(By.XPATH,"//button[normalize-space()='click for JS prompt']")
time.sleep(5)

alertwindow = driver.switch_to.alert

print(alertwindow.text)
alertwindow.send_keys("welcome")

alertwindow.accept()#close alert window by using OK button
alertwindow.dismiss()# close alert window by using CANCEL button

# ALERT 2
driver.find_element(By.XPATH,"//input[@value='login']").click()#LOGIN BUTTON
time.sleep(5)
driver.switch_to.alert.accept()

driver.close()