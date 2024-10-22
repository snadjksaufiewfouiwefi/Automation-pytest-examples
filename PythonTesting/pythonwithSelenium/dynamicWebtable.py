from selenium import webdriver
from selenium.webdriver.chrome.service import service
from selenium.webdriver.common.by import by

serv_obj = Service("path of the crome driver")
driver = webdriver.chrome(service = serv_obj, option = ops)

driver.get("https://testautomationpractice.blogshot.com/")
driver.maximize_window()

#login
driver.find_element(By.ID,"txtUsername").send_keys("Admin")
driver.find_element(By.ID,"txtUPassword").send_keys("Admin123")
driver.find_element(By.ID,"btnlogin").click()
time.sleep(3)

#admin--> user management --> user
driver.find_element(By.XPATH,"//*[@id ='menu_admin_viewAdminModule']/b").click()
driver.find_element(By.XPATH,"//*[@id ='menu_admin_usermanangement']/b").click()
driver.find_element(By.XPATH,"//*[@id ='menu_admin_viewsystemuser']/b").click()

#total rows in a table
rows  = len(driver.find_element(By.XPATH,"//table[@id='resultTable']//tbody/tr))
print('total no. of rows in a table :', rows)

count = 0
for r in range(1,rows+1):
   status =  driver.find_element(By.XPATH,"//table[@id='resultTable']//tbody/tr["+str(r)+"]/td[5]").text
   if status == "enabled":
       count = count+1
print("total no. of users:", rows)
print("number of enabled users:", count)
print("number of disabled users:",(rows-count))

driver.close()
