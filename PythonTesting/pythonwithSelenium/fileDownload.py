import time
from selenium import webdriver
from selenium.webdriver.common.by import By
import os
location = os.getcwd()

def chrome_setup():
    from selenium.webdriver.chrome.service import Service
    serv_obj = service("path of the chrome driver")
    #download files in desired location
    preferences = {'download.default_directory':location,"plugins.always_open_pdf_externally":True}# true preference download the file

    ops = webdriver.chromeOptions()
    ops.add_experimental_option("prefs", preferences)
    driver = webdriver.chrome(service=serv_obj,options = ops)
    return driver

def edge_setup():
    from selenium.webdriver.edge.service import Service
    serv_obj = service("path of the edge driver")
    #download files in desired location
    preferences = {'download.default_directory':location}
    ops = webdriver.edgeOptions()
    ops.add_experimental_option("prefs", preferences)
    driver = webdriver.edge(service=serv_obj,options = ops)
    return driver

def firefox_setup():
    from selenium.webdriver.firefox.service import Service
    serv_obj = service("path of the edge driver")
    #settings
    ops = webdriver.firefoxOptions()
    ops.set_preference("browser.helperApps.neverAsk.saveToDisk","application/msword")# in place of msword write pdf for download
    ops.set_preference("browser.download.manager.showWhenStarting",False)
    ops.set_preference("browser.download.folderlist",2)#0-desktop,1-download folder,2-desired location
    ops.set_preference("browser.download.dir",location)
    ops.set_preference("pdfjs.disabled", True) #for pdf
    driver = webdriver.firefox(service=serv_obj,options = ops)
    return driver


#Automation code
driver=edge_setup()
driver=firefox_setup()
#driver=chrome_setup()
driver.get("https://file-examples.com/index.php/sample-document-download/asample-doc-download/")
driver.maximize_window()
driver.find_element(By.XPATH,"//tbody/tr[1]/td[5]/a[1]").click()