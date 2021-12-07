def multiply():
    print(f"Multiplication result: {first_number * second_number}")

def divide():
    print(f"Division result: {first_number / second_number}")

def add():
    print(f"Addition result: {first_number + second_number}")
    
def subtract():
    print(f"Subtraction result: {first_number - second_number}")

first_number = float(input("First Number: "))
operand = input("Operand: ")
second_number = float(input("Second Number: "))

if operand == '*':
    #print(f"Multiplication result: {first_number * second_number}")
    multiply()
elif operand == '/':    
    #print(f"Division result: {first_number / second_number}")
    divide()
elif operand == '+':
    add()
    #print(f"Addition result: {first_number + second_number}")
elif operand == '-':
    #print(f"Subtraction result: {first_number - second_number}")
    subtract()
else:
    print("Not a valid operand")