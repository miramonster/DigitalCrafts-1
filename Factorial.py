#returns the factorial of a given number
def factorial (number):
    for index in range(2, number):
        number *= index    
    return number

user_number = int(input("Enter a whole number: "))

print(factorial(user_number))