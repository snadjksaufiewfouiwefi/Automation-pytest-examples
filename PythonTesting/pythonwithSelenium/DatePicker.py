from selenium import webdriver
import time
from selenium.webdriver.chrome.service import service
from selenium.webdriver.common.by import by

serv_obj = Service("path of the crome driver")
driver = webdriver.chrome(service = serv_obj, option = ops)

driver.get("https://jquery.com/datepicker/")
driver.maximize_window()

driver.switch_to.frame(0) #switch to frame

#driver.find_element(By.XPATH,//*[@id = 'datepicker']").send_keys("05/30/2024)

year = "2024"
month = "july"
date = "12"

driver.find_element(By.XPATH,"//*[@id='datepicker']").click()# opens datepicker

while True:
    mon = driver.find_element(By.XPATH,"//span[@class ='ui-datepicker-month").text
    yr = driver.find_element(By.XPATH,"//span[@class ='ui-datepicker-year").text


    if mon ==month and yr == year:
        break;
    else:
        driver.find_element(By.XPATH,"//*[@id='ui-datepicker-div']/div/a[2]/span").click() #next arrow
        # use any one of them (OR)
        driver.find_element(By.XPATH, "//*[@id='ui-datepicker-div']/div/a[1]/span").click()# previous Arrow -old date


    #select date
driver.find_element(By.XPATH,"//div[@id='datepicker-div']//table/tbody/tr/td/a")

for ele in dates:
    if ele.text == date:
        ele.click()
        break

# new python file for date picker for ex - flight booking where you pick both the date return date and travel date
#date of birth
driver.find_element(By.XPATH,"//input[@id='dob']").click()#open date picker

datepicker_month = select(driver.find_element(By.XPATH,"//select[@data-handler = 'selectmonth']"))
datepicker_month.select_by_visible_text("dec") # month


datepicker_year = select(driver.find_element(By.XPATH,"//select[@data-handler = 'selectyear']"))
datepicker_year.select_by_visible_text("1990") # month

alldates = driver.find_elements(By.XPATH,"//div[@id = 'ui - datepicker-div']//table/tbody/tr/td/a")


for date in alldates:
    if date.text =="25":
        date.click()
        break


