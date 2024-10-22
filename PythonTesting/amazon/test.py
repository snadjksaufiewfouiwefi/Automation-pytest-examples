from selenium import webdriver
from selenium.webdriver.common.by import By

# Initialize the WebDriver (assuming you're using Chrome)
driver = webdriver.Chrome()

# Open the webpage containing the slider
driver.get('https://www.amazon.in/s?k=mobile+phone&s=price-asc-rank&crid=1LX7W437OENJS&qid=1726932164&sprefix=mobile+phone%2Caps%2C239&ref=sr_st_price-asc-rank&ds=v1%3AlCGh%2BVmk%2BPSCbVFfV1nkQZxbqGMmYtS%2F%2FvyhiCAwv3U')  # Replace with the actual URL

# Locate the lower and upper bound slider elements using their ids
lower_bound_slider = driver.find_element(By.ID,'p_36/range-slider_slider-item_lower-bound-slider')
upper_bound_slider = driver.find_element(By.ID,'p_36/range-slider_slider-item_upper-bound-slider')

# Get the min, max, and current values of the lower and upper bound sliders
lower_min = lower_bound_slider.get_attribute('min')
lower_max = lower_bound_slider.get_attribute('max')
lower_value = lower_bound_slider.get_attribute('value')

upper_min = upper_bound_slider.get_attribute('min')
upper_max = upper_bound_slider.get_attribute('max')
upper_value = upper_bound_slider.get_attribute('value')

# Print the results
print(f"Lower Bound Slider - Min: {lower_min}, Max: {lower_max}, Current Value: {lower_value}")
print(f"Upper Bound Slider - Min: {upper_min}, Max: {upper_max}, Current Value: {upper_value}")

# Close the driver
driver.quit()
