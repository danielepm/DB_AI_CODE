activities = {
    "marche": 3.5,
    "course": 8,
    "velo": 7.5,
    "natation": 6,
    "yoga": 3
}


def calculate_calories(activity: str, weight: float, duration_minutes: float):
    if activity not in activities:
        return None

    met = activities[activity]

    hours = duration_minutes / 60

    calories = met * weight * hours

    return round(calories, 2)