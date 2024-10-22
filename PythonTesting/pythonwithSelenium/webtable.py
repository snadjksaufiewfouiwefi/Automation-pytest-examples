# 1)count number of rows and column
# 2)read specific row & column data
# 3) read all the rows & column data
# 4)read data based on condition(list books name whose author is mukesh)

from selenium import webdriver
from selenium.webdriver.chrome.service import service
from selenium.webdriver.common.by import by

serv_obj = Service("path of the crome driver")
driver = webdriver.chrome(service = serv_obj, option = ops)

driver.get("https://testautomationpractice.blogshot.com/")
driver.maximize_window()

# 1)count number of rows and column
noOfRows = len(driver.find_element(By.XPATH,"//tbale[@name = ,booktable,]//tr"))

noOfColumns=len(driver.find_element(By.XPATH,"//tbale[@name = ,booktable,]//tr[1]/th"))
print(noOfRows)
print(noOfColumns)

# 2)read specific row & column data
data = driver.find_element(By.XPATH,"//tbale[@name = ,booktable,]//tr[5]/td[1]").text
print(data)

# 3) read all the rows & column data
print("printing all the rows and columns data.......... ")

for r in range(2,noOfRows+1):
    for c in range(1,noOfColumns+1)
        data = driver.find_element(By.XPATH, "//tbale[@name = ,booktable,]//tr["+str(r)+"]/td["+str(c)+"]").text
        print(data, end = '  ')
    print()

# 4)read data based on condition(list books name whose author is mukesh)
for r in range(2,noOfRows+1):
    authorName = driven.find_element(By.XPATH,"//table[@name = 'bookTable']/tobody/tr["+str(r)+"]/td[2]").text
    if authorName == "mukesh":
        bookName = driven.find_element(By.XPATH, "//table[@name = 'bookTable']/tobody/tr[" + str(r) + "]/td[1]").text
        price = driven.find_element(By.XPATH, "//table[@name = 'bookTable']/tobody/tr[" + str(r) + "]/td[4]").text
        print(bookName,"  ", authorName,"  ",price)



driver.close()