class Employee:
    def __init__(self, empid=None, name= None, salery=None):
        self.empid = empid
        self.name = name
        self.salery = salery
    def setempid(self,empid):
        self.empid = empid
    def setname(self,name):
        self.name= name
    def setsalery(self,salery):
        self.salery = salery
    def getempid(self):
        return self.empid
    def getname(self):
        return self.name
    def getsalery(self):
        return self.salery
e1 = Employee()
e2 = Employee(4,"rohan",50000)
e1.setempid(2)
e1.setname("raju rastogi")
print(e1.getempid(),e1.getname,e1.getsalery())
print(e2.getempid(),e2.getname(),e2.getsalery())