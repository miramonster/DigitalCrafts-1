from PoolTable import PoolTable
from datetime import datetime

pool_tables = []

def create_twelve_tables():
    for index in range(0, 12):
        pool_tables.append(PoolTable(index + 1))

def table_display():
    print("")
    for pool_table in pool_tables:
        print(f"{pool_table.table_number} - {pool_table_occupied_string(pool_table)} {pool_table_start_time_string(pool_table)} {time_played_string(pool_table)}")

def time_played_string(pool_table):
    pool_table.calculate_time_played()
    if(pool_table.is_occupied):
        if pool_table.minutes_played <= 0:
            return f" - {pool_table.seconds_played} second(s) played"
        elif pool_table.hours_played <= 0:
            return f" - {pool_table.minutes_played} minute(s) and {pool_table.seconds_played} second(s) played"
        else:
            return f" - {pool_table.hours_played} hour(s) and {pool_table.minutes_played} minute(s) and {pool_table.seconds_played} second(s) played"
    return ""

def pool_table_start_time_string(pool_table):
    if(pool_table.is_occupied):
        return f" - start time: {pool_table.start_time.strftime('%I:%M PM')}"
    return ""

def pool_table_occupied_string(self):
    if(self.is_occupied):
        return "Occupied"
    return "Not Occupied"

def open_table():
    table_display()
    
    try:
        selection = int(input("\nSelect a table to open: "))
    except ValueError:
        print("\nnumbers only")
    else:
        if selection > 0 and selection <= 12:
            pool_table = pool_tables[selection - 1]
            if pool_table.is_occupied:
                print(f"\npool table number {pool_table.table_number} is currently occupied")
            else:
                pool_table.open_table()
                print(f"\npool table number {pool_table.table_number} is now open")
        else:
            print("\nvalid table numbers only")

def close_table():
    table_display()

    try:
        selection = int(input("\nSelect a table to close: "))
    except ValueError:
        print("\nnumbers only")
    else:
        if selection > 0 and selection <= 12:
            pool_table = pool_tables[selection - 1]
            if pool_table.is_occupied == False:
                print(f"\npool table number {pool_table.table_number} is not currently occupied")
            else:
                pool_table.close_table()
                log_table(pool_table)
                print(f"\npool table number {pool_table.table_number} is now closed")
        else:
            print("\nvalid table numbers only")

def log_table(pool_table):
    date = datetime.now().strftime("%m-%d-%Y")
    with open(f"{date}.txt", 'a') as file:
        file.write(f"{pool_table.table_number},\n")
        file.write(f"{pool_table.start_time},\n")
        file.write(f"{pool_table.end_time},\n")
        file.write(f"{pool_table.minutes_played},\n")


create_twelve_tables()

while True:
    print("\n1. Table Display")
    print("2. Open Table")
    print("3. Close Table")
    print("4. Exit")

    try:
        selection = int(input("\nSelect an option: "))
    except ValueError:
        print("\nnumbers only")
    else:
        if selection == 1:
            table_display()
        elif selection == 2:
            open_table()
        elif selection == 3:
            close_table()
        elif selection == 4:
            break   