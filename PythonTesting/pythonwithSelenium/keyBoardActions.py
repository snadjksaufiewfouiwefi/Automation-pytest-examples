# Ctrl +A
# Ctrl +C
# Tab
# Ctrl +V
from selenium import webdriver
from selenium.webdriver import ActionChains, keys
from selenium.webdriver.common.by import by
from selenium.webdriver.chrome.service import service

serv_obj = Service("path of the crome driver")
driver = webdriver.chrome(service = serv_obj, option = ops)
driver.implicitly_wait(10)

driver.get("https://text-compare.com/")
driver.maximize_window()

input1 = driver.find_element(By.XPATH,"//textarea[@id= 'inputText1]")
input2 = driver.find_element(By.XPATH,"//textarea[@id= 'inputText2]")

input1.send_keys("welcome to selenium")

act=ActionChains(driver)

# input1 ---> ctrl + A select the text
act.key_down(keys.CONTROL)
act.send_keys("a")
act.key_up(keys.CONTROL)
act.perform()
# single statement for the above command
act.key_down(keys.CONTROL).send_keys("a").key_up(keys.CONTROL).perform()

#input1 ---> ctrl+c copy text
act.key_down(keys.CONTROL)
act.send_keys("c")
act.key_up(keys.CONTROL)
act.perform()

# single statement for the above command
act.key_down(keys.CONTROL).send_keys("c").key_up(keys.CONTROL).perform()


# press tab key to navigate to input2(second)

act.send_keys(keys.TAB)
act.perform()
# combine into one statement of above 2
act.send_keys(keys.TAB).perform()

#input2 ---> ctrl+v paste the text
act.key_down(keys.CONTROL)
act.send_keys("v")
act.key_up(keys.CONTROL)
act.perform()

# single statement for the above command
act.key_down(keys.CONTROL).send_keys("v").key_up(keys.CONTROL).perform()


