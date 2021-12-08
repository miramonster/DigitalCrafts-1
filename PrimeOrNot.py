#checks if the given number is a prime number
def is_prime(number):    
    #numbers less than or equal to one cannot be prime numbers
    if number <= 1:
        return False
    #check for factors, if a factor is found then the number is not a prime number
    for index in range(2, number):
        if number % index == 0:
            return False    
    #anything with no factors is a prime number
    return True

user_number = int(input("Enter a number: "))

if (is_prime(user_number)):
    print("Prime Number")
else:
    print("Not a Prime Number")