def calculer_moyenne(notes, coefficients):
    if len(notes) != len(coefficients):
        raise ValueError("Le nombre de notes et coefficients doit être identique")

    somme = 0
    somme_coeffs = 0

    for note, coeff in zip(notes, coefficients):
        somme += note * coeff
        somme_coeffs += coeff

    if somme_coeffs == 0:
        return 0

    return round(somme / somme_coeffs, 2)