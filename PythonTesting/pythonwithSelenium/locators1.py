import By
import chromedriver
from selenium import webdriver
from selenium.webdriver.chrome.service import service
#from selenium.webdriver.common.by import by


serv_obj = service(path of the chromedriver)
driver = webdriver.chrome(service = serv_obj)

driver.get("link of the site on which you perform test")
driver.maximize_window() # maximize the browser window
#id & name locators
driver.find_element(By.ID,"small-searchterms").send_keys("product you to search or write")
driver.find_element(By.NAME,"q").send_keys("product or any thing you want to search or write")

#linktext & partial linktext
driver.find_element(By.LINK_TEXT, "register").click()
driver.find_element(By.PARTIAL_LINK_TEXT,"reg").click()

driver.close()# only one browser at a time
driver.quit()# close all the browser

#count the no. of slides
sliders = driver.find_element(By.CLASS_NAME,"homeslider-container")
print(len(sliders))# no. of slides - 5

#count no. of links
links = driver.find_element(By.TAG_NAME,"a")
print(len(links))# 125 total no. of links in the homepage

#CSS SELECTOR
#id & tag
driver.find_element(By.CSS_SELECTOR,"input#email").send_keys("abc")
#or
driver.find_element(By.CSS_SELECTOR,"#email").send_keys("abc")

#tag and class combination
driver.find_element(By.CSS_SELECTOR,"input.inputtext").send_keys("abc@gmail.com")
#or
driver.find_element(By.CSS_SELECTOR,".inputtext").send_keys("abc@gmail.com")

#tag and attribute combination
driver.find_element(By.CSS_SELECTOR,"input[data-tested=royal_email").send_keys("abc@gmail.com")
#or
driver.find_element(By.CSS_SELECTOR,"[data-tested=royal_email").send_keys("abc@gmail.com")

#tag ,class & attribute
driver.find_element(By.CSS_SELECTOR,"input.inputtext[data-tested = royal_pass").send_keys("xyz@gmail.com")