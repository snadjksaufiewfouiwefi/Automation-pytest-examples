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
admin=driver.find_element(By.XPATH,"//*[@id ='menu_admin_viewAdminModule']/b")
usergmt=driver.find_element(By.XPATH,"//*[@id ='menu_admin_usermanangement']/b")
users=driver.find_element(By.XPATH,"//*[@id ='menu_admin_viewsystemuser']/b")

#mousehover

act = ActionChains(driver)

act.move_to_element(admin).move_to_element(usermgmt).move_to_element(user).click().perform()

#right click Action
driver.get("https://swisnl.github.io/jQuery-contextMenu/demo.html")
driver.maximize_window()

button = driver.find_element(By.XPATH,"//span[@class='context-menu-one btn btn-neutal']")
act = ActionChains(driver)
act.context_click(button).perform() # right click

# double click action
driver.get("https://w3schools.com/")
driver.maximize_window()

driver.switch_to.frame("iframeResult")# switch to frame
field1 = driver.find_element(By.XPATH,"//input[@id='field1']")
field1.clear()
field1.send_keys("welcome")

button = driver.find_element(By.Xpath,"//button[normalize-space()='copy text']")

act = ActionChains(driver)
act.double_click(button).perform()# double click action

#drag and drop method
driver.implicitly_wait(10)

driver.get("https://www.dhtmlgoodies.com/script/drag-drop-custom/demo-drag-drop-3.html")
driver.maximize_window()

source_ele = driver.find_element(By.ID,"box6")
target_ele = driver.find_element(By.ID,"box106")

act = ActionChains(driver)
act.drag_and_drop(source_ele,target_ele).perform()# drag and drop action

#slider

driver.get("https://www.jqueryscript.net/demo/price-range-slider-jQuery-UI")
driver.maximize_window()

min_slider = driver.find_element(By.XPATH,"//body//div//span[1]")
max_slider = driver.find_element(By.XPATH,"//body//div//span[2]")

print("location of sliders before moving.....")
print(min_slider.location) # {x -59, y - 252}
print(max_slider.location) # {x - 639, y - 252}

act = ActionChains(driver)

act.drag_and_drop_by_offset(min_slider,100,0).perform()# x axis and y axis 
act.drag_and_drop_by_offset(max_slider,-39,0).perform()

print(min_slider.location)#{x -158, y - 252}
print(max_slider.location)#{x -598, y - 252}

#scrolling operation

driver.get("https://www.countries-ofthe-world.com/flags-of-the-world.html")
driver.maximize_window()

# scroll down page by pixel
driver.execute_script("window.scrollBy(0,3000)","")
value = driver.execute_script("return window.pageYOffset;")
print("number of pixels:", value)

# second approach --> scroll down till the element is visible
flag = driver.find_element(By.XPATH,"//img[@alt=flag of India,]")
driver.execute_script("argument[0].scrollIntoView();",flag)
value = driver.execute_script("return window.pageYOffset;")
print("number of pixels:", value) # gives the pixel value

# scroll down the page till end
driver.execute_script("window.scrollBy(0,document.body.scrollHeight)")
value = driver.execute_script("return window.pageYOffset;")
print("number of pixels:", value)

#scroll down to starting point
driver.execute_script("window.scrollBy(0,-document.body.scrollHeight)")
value = driver.execute_script("return window.pageYOffset;")
print("number of pixels:", value)




