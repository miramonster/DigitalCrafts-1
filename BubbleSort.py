numbers = [2,1,45,67,89,4,5,7,9]

print(numbers)

for first in range(0,len(numbers)):
    for index in range(0, len(numbers) - first - 1):
        if (numbers[index] > numbers[index + 1]):
            numbers[index], numbers[index+1] = numbers[index+1], numbers[index]

print(numbers)