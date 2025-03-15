import random

def get_random_ts_code():
    """
    Generates a random timestamp in the format of yyyy-mm-dd hh:mm:ss
    """
    now = datetime.now()
    return f"{now.year}-{now.month}-{now.day} {now.hour}:{now.minute}:{now.second}"
