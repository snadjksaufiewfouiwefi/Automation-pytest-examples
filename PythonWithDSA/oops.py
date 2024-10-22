class Student:
    college_name = "ABC College"
   # name = "anonymous"
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks
        print("adding new student in database..")


s1 = Student("karan", 97)
print(s1.name, s1.marks)# karan


s2 = Student("arjun", 96)
print(s2.name, s2.marks)

print(s2.college_name)

# question of loos
class Student:
    def __init__(self):
        sum = 0
        for val in self.marks:
            sum += val
            print("hi", self.name,"your avg score is:", sum/3)

s1 = Student("tony stark", [99,98,97])
s1.get_avg()

#abstraction in OOPS
class Car:
    def __init__(self):
        self.acc = False
        self.brk = False
        self.clutch = False

        def start(self):
             self.acc = True
             self.clutch = True
             print("car started...")

car1 = Car()
car1.start()

#queston for accunt debit credit & printing

class Account:
    def __init__(self, bal , acc):
        self.balance = bal
        self.account_no = acc

    #debit method
    def debit(self, amount):
        self.balance -= amount
        print("Rs.", amount, "was debitted")
        print("total balance = ", self.get_balance())

#credit
    def credit(self, amount):
        self.balance += amount
        print("Rs.", amount, "was creditted")
        print("total balance = ", self.get_balance())

    def get_balance(self):
        return self.balance


acc1 = Account(1000, 123456)
acc1.debit(1000)
acc1.credit(500)

# private attribute
class Account:

    def __init__(self, account_no, account_pass):
        self.account_no = account_no
        self.__account_pass = account_pass#__ makes the thing private

    def reset_pass(self):
        print(self.__account_pass)


acc1 = Account("12345", "abcde")

print(acc1.account_no)
print(acc1.reset_pass())

#another example of public and private
class Person:
    __name = "anonymous"

    def __hello(self):
        print("hello person")

    def welcome(self):
        self.__hello()

p1 = Person()

print(p1.welcome())