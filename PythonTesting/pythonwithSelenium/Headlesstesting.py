from selenium import webdriver

def headless_chrome():#edge/firefox
    from selenium.webdriver.chrome.service import Service #edge//firefox
    serv_obj = service("path of the chrome driver")
    ops=webdriver.chromeOption()#edge/firefox
    ops.headless =True
    driver=webdriver.chrome(service=serv_obj)# edge/firefox
    return driver

driver =headless_chrome()# edge/firefox

driver.get("https://demo.nopcommerce.com/")
print(driver.title)
print(driver.current_url)
driver.close()