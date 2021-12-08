#returns the reverse of a given string
def reverse_string(string):    
    reverse_string = ""

    #loop to reverse the string
    for index in range(len(string) - 1, -1, -1):
        reverse_string += string[index]
    
    return reverse_string

#checks if the given string is a palindrome
def is_palindrome(string):    
    # get the reverse of the string
    reversed_string = reverse_string(string)

    #compare string and reversed string for non-matching characters
    for index in range (0, len(string)):
        if string[index] != reversed_string[index]:
            return False
    
    return True

user_input = input("Enter a word: ")

if is_palindrome(user_input):
    print(f"{user_input} is a palindrome")
else:
    print(f"{user_input} is not a palindrome")    