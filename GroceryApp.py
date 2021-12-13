
shopping_lists = []

class ShoppingList:
    def __init__(self, title, Address):
        self.title = title
        self.address = Address
        self.grocery_items = []

class GroceryItem:
    def __init__(self, title, price, quantity):
        self.title = title
        self.price = price
        self.quantity = quantity

class Address:    
    def __init__(self, street, city, state, zip_code):
        self.street = street
        self.city = city
        self.state = state
        self.zip_code = zip_code

def display_menu():
    print("\n1. Create New Shopping List")
    print("2. Display Shopping Lists")
    print("3. Add Item To Shopping List")
    print("4. Quit")
    return int(input("\nPlease select an option: "))

def create_new_shopping_list():
    title = input("\nEnter the title for the shopping list: ")
    street = input(f"Enter the street address for {title}: ")
    city = input(f"Enter the city for {title}: ")
    state = input(f"Enter the state for {title}: ")
    zip_code = input(f"Enter the zip code for {title}: ")
    shopping_lists.append(ShoppingList(title, Address(street, city, state, zip_code)))    
    print(f"\nShopping List {title} created successfully")

def display_shopping_lists():
    if(len(shopping_lists) == 0):
        print("\nno shopping lists")
        return

    print("\nSHOPPING LISTS")
    for index in range(len(shopping_lists)):
        shopping_list = shopping_lists[index]
        print(f"\n{index + 1}. {shopping_list.title} - {shopping_list.address.street} {shopping_list.address.city} {shopping_list.address.state}, {shopping_list.address.zip_code}")

        if(len(shopping_list.grocery_items) == 0):
            print("    no grocery items on the shopping list")
        else:
            for index in range(len(shopping_list.grocery_items)):
                grocery_item = shopping_list.grocery_items[index]
                print(f"    {index + 1}. {grocery_item.title}(price:${grocery_item.price} quantity:{grocery_item.quantity})")
        
def add_grocery_item_to_shopping_list():
    if(len(shopping_lists) == 0):
        print("\nno shopping lists")
        return

    display_shopping_lists()

    while True:
        selection = int(input("\nEnter the number of the shoppping list you would like to add a grocery item to: "))

        if selection <= 0 or selection > len(shopping_lists):
            print("invalid selection")
        else: 
            break
    
    shopping_list = shopping_lists[selection - 1]

    title = input("\nEnter the title of the grocery item: ")
    price = input("Enter the price of the grocery item: ")
    quantity = input("Enter the quantity of the grocery item: ")
    
    shopping_list.grocery_items.append(GroceryItem(title, price, quantity))
    
    print(f"\ngrocery item {title}(${price}, quantity:{quantity}) successfully added to shopping list {shopping_list.title}")

while True:
    selection = display_menu()   

    if(selection == 1):
        create_new_shopping_list()
    elif(selection == 2):
        display_shopping_lists()
    elif(selection == 3):
        add_grocery_item_to_shopping_list()
    elif(selection == 4):
        break
    else:
        print("invalid selection")