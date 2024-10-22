from selenium import webdriver
from selenium.webdriver.chrome.service import service

serv_obj = Service("path of the crome driver")
driver = webdriver.chrome(service = serv_obj)
driver.implicitly_wait(10)

driver.get("https://demo.nopcommerce.com/")
driver.maximize_window()

#capture cookies from the browser
cookies = driver.get_cookies()
print("size of cookies:", len(cookies))#4

#print details of all cookies
for c in cookies:
    #print(c)
    print(c.get("name"),":",c.get("value"))


#add new cookies to the browser
driver.add_cookie({"name":"mycookie","value":"12345"})
cookies = driver.get_cookies()
print("size of cookies after adding new one:", len(cookies))#5

#delete specific cookie from the browser
driver.delete_cookie("mycookie")
cookies = driver.get_cookies()
print("size of cookies after deleting one:", len(cookies))#4

#delete all the cookies
driver.delete_all_cookies()
cookies = driver.get_cookies()
print("size of cookies after deleting all the cookies :", len(cookies))

driver.quit()