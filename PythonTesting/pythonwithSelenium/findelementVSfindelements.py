from selenium import webdriver
from selenium.webdriver.chrome.service import service

serv_obj = service("path of the chromedriver")
driver = webdriver.chrome(service = serv_obj)

driver.get("https://demo.nopcommerce.com/")

######## find_element()- returns single webelement

#locator matching with single webelement
element = driver.find_element(By.XPATH,"//input[@id ='small-searchterms']")
element.send_keys("apple macbook pro 13-inch")

#2) locator matching with multiple webelements
element = driver.find_element(By.XPATH,"//div[@class = 'footer']//a")
print(element.text)# return only one element

#3) element not available then throw nosuchelementexception
login_element = driver.find_element(By.LINK_TEXT,"LOG IN")
login_element.click()

##### find elements()- return multiple webelements

#1)locator matching with single webelement
elements = driver.find_elements(By.XPATH,"//input[@id ='small-searchterms']")
print(len(elements)) #1

elements[0].send_keys('apple macbook pro 13-inch')

#2) locator matching with multiple webelements
elements = driver.find_elements(By.XPATH,"//div[@class = 'footer']//a")
print(len(elements))
#print(elements[0].text)#sitemap
for ele in elements:
    print(ele.text)

#3) element not available - zero
elements = driver.find_elements(By.LINK_TEXT,"LOG")
print("elements returned:",len(elements))

