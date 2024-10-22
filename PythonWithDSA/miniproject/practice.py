# cities = ["chennai","mumbai","delhi","banglore","pune"]
# vegies = ["bringel","ladyfinger","potato","cauliflower"]

# def print_list():
#     return print_list


# def list_iterate(item):
#     for list in item:
#         print(list,end="\n")

# list_iterate(vegies)


# def fact(n):
#     if(n==0 or n ==1):
#         return 1
#     else:
#         return fact(n-1)* n
# print(fact(12))

# def print_list(list , idx=0):
#     if(idx==len(list)):
#         return
#     print(list[idx])
#     print_list(list,idx+1)

# fruit = ["banana","mango","lichi","apple"]
# print(print_list(fruit))

# def swap_list(list):
#     start, *middle, end = list

#     list = [end, *middle, start]
#     return list
# new_list = [25,5,56,4,5,5,8]
# print(swap_list(new_list))


# def checkFor_word():
#  word = "learning"
#  with open("C:\Users\Lenovo\PYTHON\practice.txt","r") as f:
#        data = f.read()
#        if(data.find(word) != -1):
#            print("found")
#        else:
#           print("not found")

# def check_for_line():
#      word = "learning"
#      data = True
#      line_no = 1
#      with open("C:\Users\Lenovo\PYTHON\practice.txt","r") as f:
#            while data:
#                data = f.read()
#                if(word in data):
#                    print(line_no)
#                    return
#                line_no += 1

#      return -1
# print(check_for_line())


# count = 0
# with open("C:\Users\Lenovo\PYTHON\practice.txt","r") as f:
#     data = f.read()

#     num = data.split(",")
#     for val in num:
#         if(val(num) % 2 == 0):
#             count += 1

# print(count)

# class car:
#     brand = "hyndai"

#     def __init__(self,modal,price):
#         self.modal = modal
#         self.price = price
#         print("some info about the car brnand")

#     def Welcome(self):
#         print("welcome students",self.brand)


# C1 = car("santro","12lakh")
# C1.Welcome()
# print(C1.Welcome)
# print(C1.modal,C1.price)
# print(car.brand)

#create strudents class that takes names and marks of 3 subjectas argument in constructor.then create the method to printr the average?


# class student:
#     def __init__(self,name,marks):
#         self.name = name
#         self.marks = marks

#         def get_avg(self):
#             sum = 0
#             for val in self.marks:
#                 sum += val
#             print("hi",self.name,"your avg score is", sum/3)

# s1 = student("tony stark",[98,96,94])
# s1.get_avg()

# s1.name = "ironman"
# s1.get_avgI()
# class account:
#     def __init__(self,balance,account):
#         self.balance = balance
#         self.account_no = account

#     def debit(self,amount):
#         self.balance -= amount
#         print("Rs", amount,"was detbited")
#         print("total balance :", self.get_balance())


#     def credit(self,amount):
#          self.balance += amount
#          print("Rs", amount,"was credited")
#          print("total balance :", self.get_balance())


#     def get_balance(self):
#         return self.balance

# class complex:
#     def __init__(self,real,img):
#         self.real = real
#         self.img = img


#     def showNumber(self):
#         print(self.real,"i+",self.img,"j")

#     def __add__(self,num2):
#         newReal = self.real + num2.real
#         newImg = self.img + num2.img
#         return complex(newReal,newImg)
    

# num1 =  complex(1,3)
# num1.showNumber()

# num2 = complex(5,6)
# num2.showNumber()

# class circle:
#     def __init__(self,radius):
#         self.radius = radius

#     def area(self):
#         return 22/7 * self.radius ** 2
    
#     def perimeter(self):
#         return 2 * 22/7 * self.radius
    
# c1 = circle(21)
# print(c1.area())
# print(c1.perimeter())

# class employee:
#     def __init__(self,role,dept,salary):
#         self.role = role
#         self.dept = dept
#         self.salary = salary

#     def showdetail(self):
#         print("role = ", self.role)
#         print("dept = ", self.dept)
#         print("salary = ", self.salary)

# class engineer(employee):
#     def __init__(self,name, age):
#         self.name = name
#         self.age = age
#         super().__init__("engineer","IT","750000")


# engg1 =engineer("elon bhau", 40)
# engg1.showdetail

#Q.) guess the number
# import random

# target = random.randint(1,100)
# while True:
    
#     userchoice = int(input("guess the no. or quit press Q for quit"))
#     if (userchoice == "Q"):
#        break

#     userchoice = int(userchoice)
#     if(userchoice == target):
#      print("you guess the correct no.")
#      break
#     elif(userchoice > target):
#        print("try to choose smaller no.")
#     else:
#        print("try to guess the bigger no")

# print("----game over----")

#Q). Random password generate.

import random
import string

pass_len = 8
charvalue = string.ascii_letters + string.digits + string.punctuation
password = ""

# another way to generate random password by list comprihension
password = "".join([random.choice(charvalue) for i in range(pass_len)])

print("your random password is : ", password)
    






   



