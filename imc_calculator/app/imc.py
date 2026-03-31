def calcul_imc(poids: float, taille: float):
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

    return round(imc, 2), interpretation