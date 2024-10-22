import time # run the file in terminal write - python filename(amazon).py

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions

driver = webdriver.chrome()
driver.maximize_window()
driver.get("https://www.amazon.com/")
driver.find_element(By.ID,"twotabsearchtextbox").send_keys("mobile phones")
time.sleep(3)
driver.quit()
# you can use variable in place of driver.find_element(By.ID,"") just assign this value to any variable

driver.find_element(By.ID,"").click()
driver.find_element(By.ID,"").clear() # for clearing the text
driver.find_element(By.ID,"").send_keys() # for writing the text in text area

# retrieving the text
text_of_content = driver.find_element(By.ID,"").text
print(text_of_content)

# retrieving the title of current page
title_of_web_page = driver.title
print(title_of_web_page)

# retrieving the url of current page
driver.find_element(By.LINK_TEXT,"Register now").click()
url_one=driver.current_url
print(url_one)

# close the current window/ parent window not the latest
driver.close()

# close all the browser window
driver.quit()

# retrieving the value of any html element attribute
C = driver.find_element(By.ID,"").get_attribute("")
print(C)

# check whether the element is displayed on the page

if driver.find_element(By.ID,"").is_displayed():
    print("text area is displayed")
else:
    print("not displayed")

# checking the display status of hidden element on the page
if driver.find_element(By.ID,"").is_displayed():
    print("displayed")
else:
    print("not displayed")

# checking whether the element is enabled or disable
if driver.find_element(By.ID,"").is_enabled():
    print("enabled")
else:
    print("disabled")

# checking the selection status of radio button and check box field
if driver.find_element(By.ID,"").is_selected(): # same for selected and non-selected checkbox also
    print("is selected")
else:
    print("not selected")

# navigate forward and backward in browser (all are browser level command)
# first open the 2 or 3 windows by link or anything
driver.back()
driver.forward()

# refreshing the web page
driver.refresh()

# retrieving the HTML source code of web page
html_source_code=driver.page_source
print("html_source_code")

# view the web page in full screen Mode
driver.fullscreen_window()

# set the size of the window
driver.set_window_size(width,hieght) # (300,800)

# submitting the form
driver.find_element(By.XPATH,"").submit()

# taking screenshot of the webpage
driver.save_screenshot("login.png") # screenshot save with this name
driver.get_screenshot_as_file("login2.png") # you can give path as well where you want the Sc save

# retrieving the HTML tag name of web element on page
element_tag = driver.find_element(By.ID,"").tag_name
print(element_tag)

# finding the size of the web element
size_element = driver.find_element(By.ID,"").size
print(size_element) # print width and hight

# finding the location of web element (x,y - coordinate)
element_location = driver.find_element(By.NAME,"").location
print(element_location)

driver(element_location.get("x"))
driver(element_location.get("y"))

# finding the size and location of web element in single command
element_x = driver.find_element(By.ID,"").rect
print(element_x)

# setting page load time out for the website to open
driver.set_page_load_timeout(1)
driver.get("url")

# finding multiple elements in web page
options = driver.find_elements(By.XPATH,"xpath/option")
print(len(options))
for option in options:
    print(option.text)

# finding element or elements using tag name
driver.find_element(By.TAG_NAME,"a").send_keys("my name is sanket singh")
links=driver.find_elements(By.TAG_NAME,"a")
for link in links:
    print(link.get_attribute("href"))

# handling javaScripts alerts

driver.find_element(By.LINK_TEXT,"").click()
driver.find_element(By.XPATH,"").click()
alert = driver.switch_to.alert
print(alert.text)
alert.accept() # dismiss()

# for entering some data in a pop-up if the text area is present
driver.find_element(By.XPATH,"").click()
prompt_alert = driver.switch_to.alert
print(prompt_alert.text)
prompt_alert.send_keys("sanket singh")
prompt_alert.accept()

# handling application web push notification
chrome_option = options()
chrome_option.add_argument("--disable-notification")
driver = webdriver.chrome(options=chrome_option)
driver.maximize_window()
driver.get("url")

# handling bootstrap model dialogs
driver.find_element(By.ID,"").click()
wait = webdriverwait(driver,30)
heading = wait.until(expected_condition.visibility_of_element_located((By.ID,"")))
print(heading.text)
text_on_dialog = driver.find_element(By.XPATH,"").text
print(text_on_dialog)

# handling accept all cookies dialog (you get in opera browser)
driver.find_element(By.XPATH,"//span[conatins(text(),'accept cookies')]").click()

# handling lightbox(background was grey)advertising purpose
driver.find_element(By.ID,"xpath of x of lightbox").click()

# default page load timeout for web page
# max 5 min takes selenium for web page load
driver.find_element(By.LINK_TEXT,"what is selenium").click()

# handling HTML dropdown field
drop_down_field = driver.find_element(By.ID,"")
select = select(drop_down_field)
select.select_by_visible_text("dropdown text value")# select_by_index, select_by_value(for value inspect and copy the value)
# for multiple selection
if select.is_multiple:
    print("it is a multiple selection box")
else:
    print("dropdown field")

# options()
drop_down_option = select.option()

for option in drop_down_option:
    print(option.text)

# print selected option
select = select(drop_down_field)
select.select_by_visible_text("doc 3")
time.sleep(3)
print(select.select_by_visible_text)
driver.quit()

# handling multi selection box field(list box)
# same as above and add deselect in all deselect all
select.select_by_visible_text("swift")
select.select_by_index(0)
select.select_by_value("audix")

select.deselect_by_visible_text("swift")
select.deselect_by_index(0)
select.deselect_by_value("audix")

select.deselect_all()

if select.is_multiple:
    print("it is a multiple selection box")
else:
    print("dropdown field")

# same above for loop
m_option = select.options
for option in m_option:
    print(option.text)
 # all selected option

select.select_by_value("audi")
select.select_by_visible_text("swift")

 m_s_options = select.all_selected_options
 for option in m_s_options:
     print(option.text)

driver.quit()

# handling bootstrap dropdown field
driver.find_element(By.ID,"xpath").click()
time.sleep(3)
driver.find_element(By.XPATH,"xpath").click()

# handling jquery dropdown(popular Js library) - multi selection
driver.find_element(By.ID,"xpath").click()
driver.find_element(By.XPATH,"").clcik()

# handling radio button
male_radio_button = driver.find_element(By.ID,"Id")
if male_radio_button.is_selected():
    pass
else:
    male_radio_button.clcik()

if male_radio_button.is_selected():
    male_radio_button.clcik()
else:
    pass

# handling stale element reference exception
text_area_field = driver.find_element(By.ID,"id").send_keys("sanket singh")
driver.find_element(By.LINK_TEXT,"link text").click()
driver.back()
text_area_field.clear()

# handling iframes and frames
driver.switch_to.frame("id of the frame if available")
driver.find_element(By.XPATH,"XPATH").clear()
# you have to switch to frames before performing any task on the frame
driver.switch_to.frame(0)# if only one frame in the page gives its index

# handling nested frame (parent frame --> child frame)
driver.switch_to.frame("")
driver.find_element(By.ID,"").send_keys("sanket")

child_frame = driver.find_element(By.ID,"")
driver.switch_to.frame(child_frame)
driver.find_element(By.NAME,"").send_keys("")
driver.find_element(By.NAME,"").clear()
driver.switch_to.parent_frame()

# handling parent child and sibling frames(direct switing frame from child to child is not possible, you have to go first parent and then child)
driver.switch_to.frame("frame top")
driver.switch_to.frame("left frame")

left_text = driver.find_element(By.XPATH,"xpath").text
print(left_text)

driver.switch_to.parent_frame()
driver.switch_to.frame("frame-middle")
middle_text = driver.find_element(By.ID,"content").text
print(middle_text)

driver.switch_to.parent_frame()
driver.switch_to.frame("frame-right")
right_text = driver.find_element(By.ID,"//body").text
print(right_text)

driver.switch_to.default_content()
driver.switch_to.frame("frame-bottom")
bottom_text = driver.find_element(By.XPATH,"//body").text
print(bottom_text)

driver.quit()

#handling info-bar (disable info-bar which written at the top that its performing automation test)

chrome_option = options()
chrome_option.add_experimental_option("excludeSwitches",["enable-automation"])
chrome_option.add_experimental_option("useAutomationExtension",false)
chrome_option.add_argument('--disable-link-feature = AutomationControl')

# use above code at the top most after import options
driver.webdriver.chrome(option=chrome_option)
driver.get("url")
print(driver.title)

# handling mouse event
actions = Actionchains(driver)
blogs = driver.find_element(By.ID,"blogs")# by hovering on particular element you get no of option
actions.move_to_element(blogs).perform()


# hovering the mouse
#same as above for no of hovering done on same element

# mouse left click
actions = Actionchains(driver)
selenium143 = driver.find_element(By.ID,"Link1")
actions.click(selenium143).perform()

# handling slider using mouse events
min_label = driver.find_element(By.XPATH,"//input[@id="p_36/range-slider_slider-item_lower-bound-slider"]")
time.sleep(3)
actions = ActionChains(driver)
actions.drag_and_drop_by_offset(min_label,100,0).perform()
driver.quit()

# mouse right click
search_box = driver.find_element(By.NAME,"") # if you not provide the context it by own click on the empty portion
actions = ActionChains(driver)
actions.context_click(search_box).perform()

# mouse double click
elements = driver.find_element(By.ID,"doubleclick")
actions =ACtionChains(driver)
actions.double_click(elements).perform()

# mouse click and hold then release
oslo = driver.find_element(By.ID,"box1")
norway = driver.find_element(By.ID,"box101")

actions = ActionChains(driver)
actions.click_and_hold(oslo).move_to_element(norway).release().perform()
             # short cut of above commands
# dragging and dropping using mouse
oslo = driver.find_element(By.ID,"box1")
norway = driver.find_element(By.ID,"box101")

actions = ActionChains(driver)
actions.drag_and_drop(oslo,norway).perform()
driver.quit()

#Enter key class
driver.find_element(By.ID,"email").send_keys("abc@gmail.com")
driver.find_element(By.ID,"password").send_keys("123456")

actions.ActionChains(driver)
actions.send_keys(keys.ENTER).perform() # down,up,right,left all keys
driver.quit()

#key_up() and key_down() command
links = driver.find_element(By.XPATH,"//div[@id,="linklist1"]//a")

for link in links:
    actions = ActionChains(driver)
    actions.key_down(keys.CONTROL).click(link).key_up(keys.CONTROL).perform()

time.sleep(3)
driver.quit()

# handling auto suggested dropdown
driver = webdriver.chrome()
driver.maximize_window()
driver.get("https://www.makemytrip.com/")

driver.find_element(By.ID,"fromcity").click()
driver.find_element(By.XPATH,"//input[@placeholder='From']").send_keys("g")

time.sleep(3)
actions = ActionChains(driver)
action.send_keys(keys.ARROW_DOWN).send_keys(keys.ARROW_DOWN).send_keys(keys.ARROW_DOWN).send_keys(keys.ENTER).perform()

# resizing the element (drag and drop by offset)

frame_one = driver.find_element(By.CLASS_NAME,"demo-frame")
driver.switch_to.frame(frame_one)
actions = ActionChains(driver)
dd = driver.find_element(By.CSS_SELECTOR,"Css-Selector by Xpath")
actions.drag_and_drop_by_offset(dd,50,100).perform()
time.sleep(3)

#handling jquery right click menu
button = driver.find_element(By.XPATH,"//span[text()='quit']")
time.sleep(3)
actions = ActionChains(driver)
actions.context_click(button).perform()
time.sleep(3)
quit_option = driver.find_element(By.XPATH,"//li/span[text()='quit']")
actions.click(quit_option).perform()
time.sleep(3)

# pause() action chain command
driver.find_element(By.ID,"").send_keys("sanket")

actions = ActionChains(driver)
actions.send_keys(keys.TAB).pause(3).send_keys("matoori").send_keys(keys.TAB).pause(3).send_keys("email")/
 .pause(3).send_keys("1234567890").pause(3).send_keys("12345").pause(3)/
.send_keys(keys.SPACE).send_keys(keys.TAB).pause(3).send_keys(keys.ENTER).pause(5).perform()

driver.quit()

# taking screenshot using save_screenshot()
driver.save_screenshot("homepage.png")
driver.find_element(By.ID,"//div[@id='search']//button").click()
driver.save_screenshot("search page.png")
driver.quit()

#taking screenshot using get_screenshot_as_file()
driver.get_screenshot_as_file("homepage.png")
driver.find_element(By.XPATH,"//div[@id='search']//button").click()
driver.get_screenshot_as_file("search page.png")
driver.quit()

#taking screenshot of particular web element
search_button = driver.find_element(By.XPATH,"//div[@id='search']//button")
search_button.screenshot("search.png")
driver.quit()

#taking screenshot of particular section

section_one = driver.find_element(By.ID,"textlist")
section_one.screenshot("section.png")
driver.quit()

# Executing javaScript code using selenium
driver.execute_script("alert('sanket')")
time.sleep(3)

# finding the total height of web page

web_page_height = driver.execute_script("return maths max(....)")
print(web_page_height)
driver.quit()

# run the chrome browser in headless mode
chrome_option = webdriver.ChromeOptions()
chrome_option.add_argument("---headless")

driver = webdriver.chrome(options = chrome_option)
driver.maximize_window()
driver.get("https://www.amazon.com/")

page_title = driver.title
print(page_title)

driver.quit()

# taking screenshot of full page
chrome_option = webdriver.ChromeOptions()
chrome_option.add_argument("---headless")

driver = webdriver.chrome(options = chrome_option)
driver.maximize_window()
driver.get("url")

width = 1920
height = driver.execute_script("return math.max(....)")
driver.set_window_size(width,height)

page_body = driver.find_element(By.TAG_NAME,"body")
page_body.screenshot("full_page_screenshot.png")
driver.quit()

# start chrome browser in maximize mode
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--start-maximized")

driver = webdriver.chrome(options = chrome_options)

time.sleep(3)

#start chrome browser
chrome_options = webdriver.chromeOptions()
chrome_options.add_argument("--kiosk")
driver = webdriver.Chrome(options = chrome_options)
time.sleep(3)

# Handling multiple windows
driver.find_element(By.LINK_TEXT,"").click()
para_one_text = driver.find_element(By.ID,"").text
print(para_one_text) # gives no such exception  error
# the above code does not work for multiple windows

parent_window_id = driver.current_window_handle

driver.find_element(By.LINK_TEXT,"open a popup window").click()
time.sleep(3)
windows = driver.window_handles

for w in windows:
    driver.switch_to.window(w)
    if driver.title.__eq__("basic web page title"):
        para_one_text = driver.find_element(By.ID,"para1").text
        print(para_one_text)
        driver.close()
        break

driver.switch_to.window(parent_window_id)
driver.find_element(By.ID,"ta1").send_keys("sanket singh")
time.sleep(3)
driver.close()

#handling multiple window
app_one_title = driver.title
print(app_one_title)

time.sleep(3)
driver.switch_to.new_window("tab")

driver.get("url of new window")

time.sleep(3)

app_two_title = driver.title
print(app_two_title)
time.sleep(3)

# no such window exception
#(on trying to switch to a window which doesn't exist)
driver.switch_to.window("xyz")
driver.close()

# waiting mechanism - implicit and explicit *****
driver.implicitly_wait(10) # use before driver.get (global wait)
driver.find_element(By.CLASS_NAME,"dropbtn").click()
# below two line are explicit wait
wait = webdriverWait(driver,30)
flipkart_option = wait.until(expected_condition.visibility_of_element_located((By.LINK_TEXT,"FLIPKART")))
flipkart_option.click()

# fluent wait(advance explicit wait) not use in real time (poll frequency = after every interval of time)
wait = webdriverWait(driver,timeout = 30,poll_frequency = 5, ignored_exception=[NoSuchElementException])
flipkart_option = wait.until(expected_condition.visibility_of_element_located((By.LINK_TEXT,"FLIPKART")))
flipkart_option.click()

# wait for an element to be visible

#driver.find_element(By.CLASS_NAME,"Dropbtn").click()

wait = webdriverWait(driver,30)
wait.until(expected_conditions.visibility_of_element_located((By.LINK_TEXT,"FLIPKART")))

time.sleep(3)
driver.quit()

# wait for the presence of element(hidden element does not consider)
driver.find_element(By.CLASS_NAME,'dropbtn').click()

wait = webdriverWait(driver,30)
flipkart_option=wait.untill(expected_conditions.presence_of_element_located((By.LINK_TEXT,"flipkart")))
flipkart_option.click()
hidden_button_label = hidden_button.get_attribute("value")
print(hidden_button_label)
time.sleep(3)

# wait for element to be clickable
driver.find_element(By.XPATH,"xpath").click()
wait = webdriverWait(driver,10)
checkbox_field = wait.until(expected_conditions.element_to_be_clickable((By.ID,"dte")))

checkbox_field.click()

#wait for a element to be invisible in selenium python
driver.get("url")
driver.find_element(By.XPATH,"xpath").click()
wait = webdriverWait(driver,30)
wait.until(expected_conditions.invisibility_of_element_located((By.ID,"")))
heading_text = driver.find_element((By.XPATH,"")).text
print(heading_text)
driver.quit()

# wait for an alert to be displayed
driver.find_element(By.ID,"alert").click()


wait = webdriverWait(driver,5)
wait.until(expected_conditions.alert_is_present())

al = driver.switch_to.alert
alert_text = al.text
print(alert_text)
time.sleep(3)
al.accept()

driver.quit()

# handling ajax calls
#use explicit , implicit or fluent wait

#solve synchronization problem(each and every element loading)
# use explicit, implicit or fluent wait

# handling dynamic XPATH expression
for i in range(1,6): #itterate
    xpath_text = "(//div[@id='linkList1']//a)//a["+str(i)+"]"
    time.sleep(3)
    driver.find_element(By.XPATH,xpath_text).click()
    time.sleep(3)
    driver.back()

# handling calender type-1
driver.find_element(By.ID,"DATEPICKER").click()
wait = webdriverWait(driver,5)
wait.until(expected_conditions.visibility_of_element_located((By.ID,"ui-datepicker-div")))

def select_date_in_calender(month,year,day):
     current_month = driver.find_element(By.CLASS_NAME,"").text
     current_year = driver.find_element(By.CLASS_NAME,"").text

     while not(current_month.__eq__("november") and current_year.__eq__("2024")):
          driver.find_element(By.XPATH,"//span[text()='next']").click()
          current_month = driver.find_element(By.CLASS_NAME,"").text
          current_year = driver.find_element(By.CLASS_NAME,"").text
     xpath_text = "//td[@data-handler="selectDay']/a[text()='"day+"']'
     driver.find_element(By.XPATH,"").click()

select_date_in_calender("june",2024,17)
time.sleep(3)
driver.quit()

#handling calender 1 using javaScript
driver.execute_script("document.getElementById('datepicker').value='25/09/2024'")
time.sleep(3)

#handling calender type -2
#for page load because instantly calender disappeared
time.sleep(5)
driver.find_element(By.ID,"form-field-travel-comp_date").click()
wait = webdriverWait(driver,10)
wait.until(expected_conditions.visibility_of_element_located(By.CSS_SELECTOR,"div.flatpicker-calender")))
driver.find_element(By.CLASS_NAME,"flatpicker-next-month")

current_month = driver.find_element(By.CLASS_NAME,"cur-month").text.strip()

while not(current_month.__eq__("october")):
    driver.find_element(By.CLASS_NAME,"flatpicker-next-month").click()
    current_month = driver.find_element(By.CLASS_NAME, "cur-month").text.strip()
    time.sleep(3)
driver.find_element(By.XPATH,"//span[contains(@class,"flatpicker-day")][text()='25']").click()

time.sleep(3)

# selecting past date in calender
driver.find_element(By.ID,"datepicker").click()

wait = webdriverWait(driver,10)
wait.untill(expected_conditions.visibility_of_element_located(By.ID,"ui-datepicker-div"))

current_month = driver.find_element(By.CLASS_NAME,"ui-datepicker-month").text
current_year = driver.find_element(By.CLASS_NAME,"ui-datepicker-year").text


while not(current_month.__eq__("august") and current_year.__eq__("2022")):
    driver.find_element(By.XPATH,"//span[text()='prev']").click()
    current_month = driver.find_element(By.CLASS_NAME,"ui-datepicker-month").text
    current_year = driver.find_element(By.CLASS_NAME,"ui-datepicker-year").text

driver.find_element(By.XPATH,"//td[@data = handler="selectDay]/a[text()='17']").click()
time.sleep(3)

#select past and future dates in calender
driver.find_element(By.ID,"").click()

wait = webdriverWait(driver,10)
wait.untill(expected_conditions.visibility_of_element_located(By.ID,""))

expected_date = "2025-09-27"
formatted_date = datetime.strptime("%y-%m-%d")
expected_day = formatted_date.day
expected_month = formatted_date.month
expected_year = formated_date.year
print(expected_month)
print(expected_day)
print(expected_year)

current_month_text = driver.find_element(By.CLASS_NAME,"").text
month_number = {"january":1,"february":2,"march":3......."upto december"}
current_month_number = month_number[current_month_text]
current_year_text = driver.find_element(By.CLASS_NAME,"").text
current_year_number = int(current_year_text)

#for future date
while current_year_number < expected_year or current_month_number < expected_month:
    driver.find_element(By.XPATH,"").click()
    current_month_text = driver.find_element(By.CLASS_NAME, "").text
    month_number = {"january": 1, "february": 2, "march": 3......."upto december"}
    current_month_number = month_number[current_month_text]
    current_year_text = driver.find_element(By.CLASS_NAME, "").text
    current_year_number = int(current_year_text)

#for past date
while current_year_number > expected_year or current_month_number > expected_month:
    driver.find_element(By.XPATH,"").click()
    current_month_text = driver.find_element(By.CLASS_NAME, "").text
    month_number = {"january": 1, "february": 2, "march": 3......."upto december"}
    current_month_number = month_number[current_month_text]
    current_year_text = driver.find_element(By.CLASS_NAME, "").text
    current_year_number = int(current_year_text)

driver.find_element(By.XPATH,"//td[@data-handler='selectDay']/a[text()='"+str(expected_day)+"').click()
time.sleep(3)

# handling calendar type 3
driver.get("url")
driver.find_element(By.NAME,"").send_keys("15102024")
driver.find_element(By.NAME,"").send_keys(keys.TAB)
driver.find_element(By.NAME,"").send_keys("1050")

driver.find_element(By.ID,"").click()

time.sleep(3)

# handling calender type 4(dropdown)
driver.find_element(By.ID,"").click()

wait = webdriverWait(driver,10)
wait.until(expected_conditions.visibility_of_element_located((By.ID,"")))

dropdown_month = driver.find_element(By.CLASS_NAME,"")
select_month = select(dropdown_month)
select_month.select_by_visible_text("nov")

dropdown_year = driver.find_element(By.CLASS_NAME,"")
select_year = select(dropdown_year)
select_year.select_by_visible_text("2024")

driver.find_element(By.XPATH,"//td[@data-handler='selectDay']/a[text()='25']").click()
time.sleep(3)

# handling calendar type 5
driver.get("url")
driver.find_element(By.ID,"").click()

wait = webdriverWait(driver,10)
wait.until(expected_conditions.visibility_of_element_located(By.ID,""))

month_dropdown = driver.find_element(By.CLASS_NAME,"")

select_month = select(month_dropdown)
select_month.select_by_visible_text("nov")

year_dropdown = driver.find_element(By.CLASS_NAME,"")
select_year = select(year_dropdown)
select_year.select_by_visible_text("2025")

driver.find_element(By.XPATH,"//td[not(contains(@class,""))]/a[text()='26']")).click()

#handle calender type 6
driver.webdriver.chrome()
driver.maximize_window()
driver.get("url")

driver.find_element(By.CLASS_NAME,"").click()

wait = webdriverWait(driver,10)
wait.until(expected_conditions.visibility_of_element_located((By.ID,"")))

driver.find_element(By.CSS_SELECTOR,"").click()

time.sleep(5)
driver.quit()

#pre-requisite for handling tables
#//table[@id='table1']/tbody
#//table[@id='table1']//tb
#//table[@id='table1']/tbody/tr/td
#//table[@id='table1']/tbody/tr[1]/td
#//table[@id='table1']/tbody/tr[3]/td[1]
#//table[@id='table1']/tbody/tr/td[3]--(only tr contain all data)

# retrieve table heading
 driver.get("url")
 table heading = driver.find_element(By.XPATH,"//table[@id='table']//th")
 for heading in table_heading:
     print(heading.text)

driver.quit()

# retrieve table data
driver.get("url of table")
table_data = driver.find_element(By.XPATH,"//table[@id='table1']//td")

for data in table_data:
    print(data.text)

driver.quit()

# retrieve data from first row
driver.get("url")

table_data = driver.find_elements(By.XPATH,"//table[@id='table1']/tbody/tr[1]/td")
for data in table_data:
    print(data.text)

driver.quit()