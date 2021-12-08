#returns the reverse of a given string
def reverse_string(string):        
    reverse_string = ""    
    #loop to reverse the string
    for index in range(len(string) - 1, -1, -1):
        reverse_string += string[index]        
    return reverse_string

#checks if the given string is a palindrome
def is_palindrome(string):        
    #compare the string to its reversed version
    if string == reverse_string(string):
        return True        
    return False

user_input = input("Enter a word: ")

if is_palindrome(user_input):
    print(f"{user_input} is a palindrome")
else:
    print(f"{user_input} is not a palindrome")