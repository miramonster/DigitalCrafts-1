from datetime import datetime, timedelta

class PoolTable:
    def __init__(self, table_number):
        self.is_occupied = False 
        self.start_time = datetime.now()
        self.seconds_played = 0
        self.minutes_played = 0
        self.hours_played = 0
        self.table_number = table_number

    def close_table(self):
        self.is_occupied = False
        self.end_time = datetime.now()
        self.calculate_time_played()

    def open_table(self):
        self.is_occupied = True
        self.start_time = datetime.now()
    
    def calculate_time_played(self):
        current_time = datetime.now()        
        total_seconds = (current_time - self.start_time).total_seconds()

        minutes, seconds = divmod(total_seconds, 60)
        hours, minutes = divmod(minutes, 60)
        
        self.seconds_played = int(seconds)
        self.minutes_played = int(minutes)
        self.hours_played = int(hours)