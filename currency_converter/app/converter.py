from .rates import RATES


def convert(amount: float, from_currency: str, to_currency: str) -> float:
    if from_currency not in RATES or to_currency not in RATES:
        raise ValueError("Devise non supportée")

    eur_amount = amount / RATES[from_currency]
    converted = eur_amount * RATES[to_currency]

    return round(converted, 2)