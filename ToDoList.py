def display_menu():
    print("Press 1 to add task")
    print("Press 2 to delete task")
    print("Press 3 to view all tasks")
    print("Press q to quit")
    print("")

def add_task():
    title = input("Enter a title: ")
    priority = input("Enter the priority: ")
    task_dictionary["tasks"].append({"title" : title, "priority" : priority})    
    print("")
    print("task added")
    print("")

def delete_task():
    view_tasks()
    delete = int(input("Enter number of the task to delete: "))
    del task_dictionary["tasks"][delete - 1]
    print("")
    print(f"task #{delete} deleted")
    print("")

def view_tasks():    
    counter = 1
    for task in task_dictionary["tasks"]:        
        print(f"{counter} - {task['title']} - {task['priority']} ")
        counter += 1
    print("")

task_dictionary = {"tasks" : []}

print("")

while True:
    display_menu()

    choice = input("Enter a choice: ")
    print("")

    if(choice == '1'):
        add_task()
    elif(choice == '2'):
        delete_task()
    elif(choice == '3'):
        view_tasks()
    elif(choice == 'q'):
        break