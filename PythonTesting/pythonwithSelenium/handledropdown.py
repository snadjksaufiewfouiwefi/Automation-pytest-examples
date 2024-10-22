from selenium import webdriver
from selenium.webdriver.chrome.service import service
from selenium.webdriver.common.by import By

serv_obj = service("path of the chromedriver")
driver = webdriver.chrome(service = serv_obj)

driver.get("opencart.com")
driver.maximize_window()

drpcountry_ele = driver.find_element(By.XPATH,"//select[@id='input-country']")
drpcountry=select(driver.find_element(By.XPATH,"//select[@id = 'input-country']"))

#select option from the edropdown
drpcountry.select_by_visible_text("india")
drpcountry.select_by_value("10")
drpcountry.select_by_index(13) # index

#capture all the option and print them
alloptions = drpcountry.options
print("total number of options:", len(alloptions))

for opt in alloptions:
    print(opt.text)

#select option from dropdown without using built-in method

for opt in alloptions:
    if opt.text == "india":
        opt.click()
        break

alloptions = driver.find_element(By.XPATH,'//*[@id = "input-country"]/option')
print(len(alloptions))