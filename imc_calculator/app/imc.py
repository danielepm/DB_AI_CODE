def calcul_imc(poids: float, taille: float):
    if taille <= 0:
        raise ValueError("La taille doit être supérieure à 0")

    if poids <= 0:
        raise ValueError("Le poids doit être supérieur à 0")
    
    imc = poids / (taille ** 2)

    if imc < 18.5:
        interpretation = "Insuffisance pondérale"
    elif 18.5 <= imc < 25:
        interpretation = "Corpulence normale"
    elif 25 <= imc < 30:
        interpretation = "Surpoids"
    elif 30 <= imc < 35:
        interpretation = "Obésité modérée"
    elif 35 <= imc < 40:
        interpretation = "Obésité sévère"
    else:
        interpretation = "Obésité morbide"

    return round(imc, 1), interpretation