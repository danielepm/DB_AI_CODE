def appreciation(score: float) -> str:

    if score >= 90:
        return "Excellent"
    elif score >= 75:
        return "Très bien"
    elif score >= 60:
        return "Bien"
    elif score >= 50:
        return "Passable"
    else:
        return "Insuffisant"