def printN(n):
    if n>0:
        printN(n-1)
        print(n,end=" ")
printN(10)
# reverse 
def printNreverse(n):
    if n>0:
        print(n,end=" ")
        printNreverse(n-1)
printNreverse(10)
#odd
def printNodd(n):
    if n>0:
        printNodd(n-1)
        print(2*n-1,end=" ")
printNodd(10)
#even
def printNeven(n):
    if n>0:
        printNeven(n-1)
        print(2*n,end=" ")
printNeven(10)
#oddreverse
def printNoddreverese(n):
    if n>0:
        print(2*n-1,end=" ")
        printNoddreverese(n-1)
printNoddreverese(10)
#evenreverse
def printNevenreverse(n):
    if n>0:
        print(2*n,end=" ")
        printNevenreverse(n-1)
printNevenreverse(10)
# more problem of recursion
#sun of n natural no.
def sumN(n):
    if n==1:
        return 1
    return n+sumN(n-1)
#sum of odd no.
def sumNodd(n):
    if n==1:
        return 1
    return 2*n-1 +sumNodd(n-1)

#sum of even no
def sumNeven(n):
    if n==1:
        return 2
    return 2*n +sumNeven(n-1)
#sum of factorial
def fact(n):
    if n==0:
        return 1
    return n* fact(n-1)
#sum of n square no.
def sumNsquare(n):
    if n==1:
        return 1
    return n*n+sumNsquare(n-1)

print("sum is",sumNsquare(5))