from datetime import datetime, timedelta

class PoolTable:
    def __init__(self, table_number):
        self.is_occupied = False 
        self.start_time = datetime.now()
        self.minutes_played = 0
        self.table_number = table_number

    def close_table(self):
        self.is_occupied = False
        self.end_time = datetime.now()
        self.minutes_played = self.get_minutes_played()

    def open_table(self):
        self.is_occupied = True
        self.start_time = datetime.now()
    
    def get_minutes_played(self):
        current_time = datetime.now()
        time_difference = current_time - self.start_time        
        return time_difference.total_seconds() / 60

    def occupied_status(self):
        if(self.is_occupied):
            return "Occupied"
        return "Not Occupied"

    def start_time_string(self):
        if(self.is_occupied):
            return f" - start time: {self.start_time.strftime('%I:%M PM')}"
        return ""

    def minutes_played_string(self):
        if(self.is_occupied):
            return f" - {self.get_minutes_played():.2f} minutes played"
        return ""