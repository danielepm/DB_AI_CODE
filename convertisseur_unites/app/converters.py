def convert_length(value: float, from_unit: str, to_unit: str) -> float:
    units = {
        "m": 1,
        "km": 1000,
        "cm": 0.01,
        "mm": 0.001
    }
    return value * units[from_unit] / units[to_unit]


def convert_weight(value: float, from_unit: str, to_unit: str) -> float:
    units = {
        "kg": 1,
        "g": 0.001,
        "mg": 0.000001,
        "lb": 0.453592
    }
    return value * units[from_unit] / units[to_unit]


def convert_temperature(value: float, from_unit: str, to_unit: str) -> float:
    if from_unit == to_unit:
        return value

    # Conversion vers Celsius
    if from_unit == "F":
        value = (value - 32) * 5/9
    elif from_unit == "K":
        value = value - 273.15

    # Conversion depuis Celsius
    if to_unit == "F":
        return value * 9/5 + 32
    elif to_unit == "K":
        return value + 273.15
    else:
        return value