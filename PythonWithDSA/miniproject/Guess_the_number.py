import random

target = random.randint(1,100)



while True:
    userChoice = int(input("guess the target OR Quit:"))
    if(userChoice == "Quit"):
        break


    userChoice = int(userChoice)
    if(userChoice == target):
        print("Success : Correct Guess!!")
        break
    elif(userChoice < target):
        print("your number was too small. take a bigger guess..")

    else:
        print("your number was too big. take a bigger guess..")

print("____GAME OVER____")