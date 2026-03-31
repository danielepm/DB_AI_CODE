import re

def check_password(password: str) -> dict:
    """
    Vérifie la complexité d'un mot de passe.
    Règles:
        - Minimum 8 caractères
        - Au moins une majuscule
        - Au moins une minuscule
        - Au moins un chiffre
        - Au moins un caractère spécial
    """
    rules = {
        "longueur_min": len(password) >= 8,
        "majuscule": bool(re.search(r"[A-Z]", password)),
        "minuscule": bool(re.search(r"[a-z]", password)),
        "chiffre": bool(re.search(r"[0-9]", password)),
        "special": bool(re.search(r"[!@#$%^&*(),.?\":{}|<>]", password))
    }
    rules["valid"] = all(rules.values())
    return rules