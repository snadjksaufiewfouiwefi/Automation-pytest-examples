class Car:
    #color = "black"
    @staticmethod
    def start():
        print("car started...")

    @staticmethod
    def stop():
        print("car stopped.")


class TotyotaCar(Car):
    def __init__(self, brand):
        self.brand = brand

class Fortuner(TotyotaCar):
    def __init__(self, type):
         self.type = type

car1 = Fortuner("diesel")
car1.start()

# car1 = TotyotaCar("fortuner")
# car2 = TotyotaCar("prius")


# print(car1.start())
# print(car1.color)

# multiple inheritence

class A:
    varA = "welcome to class A"

class B:
    varB = "welcome to class B"

class C(A,B):
    varC = "welcome to class c"

c1 = C()

print(c1.varC)
print(c1.varB)
print(c1.varA)

#super method in heritence
class Car:
    def __init__(self, type):
        self.type = type

    @staticmethod
    def start():
        print("car started...")

    @staticmethod
    def stop():
        print("car stopped.")

class ToyotaCar(Car):
    def __init__(self, name, type):
        super().__init__(type)
        self.name = name
        super().start()

car1 = ToyotaCar("prius", "electric")
print(car1.type)