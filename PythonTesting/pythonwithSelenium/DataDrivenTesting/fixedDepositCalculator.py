import time
from selenium import webdriver
from selenium.webdriver.chrome.service import service
from selenium.webdriver.chrome.service import service
from selenium.webdriver.support.vi import select
from DataDrivenTesting import XLUtility
serv_obj = Service("path of the chrome driver") 
driver = webdriver.chrome(service = serv_obj)
driver.implicitly_wait(10)

driver.get("https://moneycontrol.com/")
driver.maximize_window()

file = "path of the xlsx file from your pc"
rows = XLUtility.getRowCount(file,"sheet1")

for r in range(2,rows+1):
    #reading data from excel
    principle = XLUtility.readData(file,"sheet1",r,1)
    rateofinterest = XLUtility.readData(file, "sheet1", r, 2)
    per1 = XLUtility.readData(file, "sheet1",r,3)
    per2 = XLUtility.readData(file, "sheet1",r,4)
    frequency = XLUtility.readData(file, "sheet1",r,5)
    exp_mvalue = XLUtility.readData(file, "sheet1", r, 6)

    #passing data to the application

    driver.find_element(By.XPATH,"//input[@id='principal']").send_keys(principle)
    driver.find_element(By.XPATH, "//input[@id='interest']").send_keys(rateofinterest)
    driver.find_element(By.XPATH, "//input[@id='tenure']").send_keys(per1)

    perioddrp = select(driver.find_element(By.XPATH,"//select[@id = 'tenurePeriod']"))
    perioddrp.select_by_visible_text(per2)

    frequencydrp = select(driver.find_element(By.XPATH,"//select[@id = 'frequency']"))
    frequencydrp.select_by_visible_text(frequency)
    driver.find_element(By.XPATH, "//input[@id='tenure']").click() #calculate button
    act_mvalue=driver.find_element(By.XPATH, "//span[@id='resp_matval']/strong").text

   #validation
    if float(exp_mvalue) == float(act_mvalue):
        print("test passed")
        XLUtility.writeData(file,"sheet1",r,8,'passed')
        XLUtility.fillGreencolor(file,"sheet1",r,8)
    else:
        print("test failed")
        XLUtility.writeData(file,"sheet1",r,8,'failed')
        XLUtility.fillGreencolor(file,"sheet1",r,8)
    driver.find_element(By.XPATH,"//*[@id='fdmatval']/div[2]/a[2]/img").click()
    time.sleep(2)

driver.close()