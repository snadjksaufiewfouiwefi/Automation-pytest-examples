from selenium import webdriver
from selenium.webdriver.chrome.service import service
from selenium.webdriver.common.by import By

serv_obj = service("path of the chromedriver")
driver = webdriver.chrome(service = serv_obj)

driver.get("https://itera-qa.azurewebsites.net/home/automation")
driver.maximize_window()

#1). select specific checkbox
driver.find_element(By.Xpath,"//input[@id = 'monday']").click()

#2) select all the checkboxes
checkboxes = driver.find_element(By.Xpath,"//input[@type='checkbox' and contains(@id,'day')]")
print(len(checkboxes))

#approach 1
for I in range(len(checkboxes)):
    checkboxes[I].click()

#approach 2
for checkbox in checkboxes:
    checkbox.click()

#3) select multiple chechboxes by choice
for checkbox in checkboxes:
    weekname = checkbox.get_attribute('id')
    if weekname == 'monday' or weekname == 'sunday':
        checkbox.click()

#4) select last 2 checkboxes
#totalnumberofelements -2 = starting index
for i in range(len(checkboxes)-2,len(checkboxes)):#range(5,7)--->6,7
    checkboxes[i].click()

#5) select first 2 checkboxes
for i in range (len(checkboxes)):
    if i < 2:
        checkboxes[i].click()

#6) clearing all the check boxes
for checkbox in checkboxes:
    if checkbox.is_selected():
       checkbox.click()



driver.quit()