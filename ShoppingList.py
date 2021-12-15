import GroceryItem

class ShoppingList:
    def __init__(self, title, address):
        self.title = title
        self.address = address
        self.grocery_items = []

    def add_item(self, item):
        self.grocery_items.append(item)