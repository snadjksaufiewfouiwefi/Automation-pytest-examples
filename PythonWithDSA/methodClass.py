class Person:
    name = "anonymous"

    # def changeName(obj, name):
    #     obj.__class__.name = "Rahul"


    @classmethod
    def changeName(cls, name):
        cls.name = name

p1 = Person()
p1.changeName("rahul kumar")
print(p1.name)
print(Person.name) 


#property method 

class Student:
    def __init__(self, phy, chem, maths):
        self.phy = phy
        self.chem = chem
        self.maths = maths

    @property
    def percentage(self):
        return str((self.phy + self.chem +self.maths)/3) + "%"
    

    stu1 = Student(98, 97, 99)
    print(stu1.percentage)

    stu1.phy = 86
    print(stu1.percentage)