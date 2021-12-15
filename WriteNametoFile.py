name = input("What is your name? ")

with open("name.txt", "w") as file:
    file.write(name)