# list1 = [1,2,3,2,1]
# list2 = [1,2,3,4,5]

# copy_list1 = list1.copy()
# copy_list1.reverse()

# if(copy_list1 == list1):
#     print("palandrome")
# else: 
#     print("NOT palandrome")

grade = ("A", "B", "A", "C", "D", "A")
print(grade.count("A"))

dict = {
    "name" : "sanket",
    "key" : "value",
    "cgpa" : "9.6",
    "marks" : [96,98,94],
    "age" : 35,
    "is_adult" : True,
    12.54 : 85.2
}


# print(dict["marks"])
# print(dict["key"])

# dict["name"] = "sunny"
# dict["surnmae"] = "thakur"
# print(dict)

null_dict = {}
null_dict["name"] = "apnaschool"
print(null_dict)

student = {
    "name" : "sanket",
    "score" : {
        "phy" : 98,
        "chem" : 95,
        "maths" : 96
    }
}

print(student["score"]["chem"])
print(student.keys())
print(list(student.keys()))

student.update({"city" : "jaipur"})

print(student)

# sets
collection = { 1,23,4,5,66,"hello","world"}

print(collection)
print(type(collection))

#empty set 
collection = set()
print(type(collection))

collection.add(1)
collection.add(5)
collection.add("hello")
collection.remove(5)
collection.add((1,2,3,4))
collection.add([1,2,3,4])# not added because it is list

print(collection)


# pop in set removes random value
collection = {1,56,"string","golu",2.56}
print(collection.pop())


#union in set

set1 = {1,2,3,4}
set2 = {4,5,6,7}

print(set1.union(set2))
print(set1.intersection(set2))

#qusetion
marks = {}
x = int(input("enter phy no."))
marks.update({"phy": x})

y = int(input("enter maths no."))
marks.update({"maths": y})

z = int(input("enter chem no."))
marks.update({"chem": z})

print(marks)

# for loop

veggies = ["brinjal","potato","bottlegaurd","ladyfinger","cucumber"]

for val in veggies:
    print(val)
    #for tuple

    tuple = [1,2,3,4,5,6]

    for num in tuple:
        print(num)

        # question = print the element of the following list using loops

        list = [1,4,9,16,25,36,49,64,81,100]

        for num in list:
            print(num)

            # question = serach for a number x in this tuple using loop:
list = [1,4,9,16,25,36,49,64,81,100,49]

x = 49

idx = 0
for el in list:
    if(el == x):
        print ("number found at idx", idx)
        break #for stopping at first where 49 found
    idx += 1

    # question = print the multiplication tabler of a number n.

n = int(input("enter the number : "))


for i in range(1 , 11):
    print(n * i)

    #questrion = WAP to find the sum of first n numbers.(using while loop)

    n = 6

    sum = 0
    for i in range (1, n+1):
        sum += 1

        print("sum of number", sum)
# same question with while loop

n = 8
sum = 0
i = 1
while i <= n:
    sum += i
    i += 1

    print("total sum =", sum)

    # question = WAP to find the factorial of first n number(using for loop)

    num = 6
    fact = 1
    i = 1

    while i <= n:
        fact += i
        i += 1
        print("factorial of a no. :", fact)

        # same question using for loop

        n = 5
        fact = 1
        for i in range(1, n+1):
            fact *= i

            print("factorial = ", fact)

            #question

            cities = ["mumbai","delhi","banglore","pune","hydrabad","ahmedabad"]
            heroes = ["superman", "aquaman","thor","captain america","ironman"]

            def print_len(list):
                print(len(list))

                # print_len(cities)
                # print_len(heroes)

                #question 2nd
                def print_list(list):
                    for item in list:
                        print(item, end = " ")

                        print_list(heroes)
                        print()

                        #question for factorial with function

                        def calc_fact(n):
                            fact = 1
                            for i in range(n, n+1):
                                fact *= i
                                print(fact)

                            calc_fact(5)


# question usd to inr conversion

def convertion(usd_val):
    inr_val = usd_val*83
    print(usd_val,"USD =", inr_val, "INR =")

convertion(50)

# recursive function
def show(n):
    if(n == 0):
        return
    print(n)
    show(n-1)
    print("END")
    show(5)

    # FACTORIAL RECURSION QUESTION

    def fact(n):
        if(n == 1 or n == 0):
          return 1
    return fact (n-1) * n
print(fact(3))

# calculate the sum of n no. in recursion

def calc_sum(n):
    if(n == 0):
        return 0
    return calc_sum(n-1) + n
add = calc_sum(5)
print(add)

# write a recursive function to print all elemenet in the list

def print_list(list, idx =0):
    if(idx == len(list)):
        return
    print(list[idx])
    print_list(list, idx+1)

fruits = ["mango", "banana", "guava", "lichi", "apple"]

print_list(fruits)