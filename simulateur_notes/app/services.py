def calculer_resultat(notes):
    moyenne = sum(notes) / len(notes)

    if moyenne >= 10:
        statut = "Validé"
    elif moyenne >= 8:
        statut = "Rattrapage"
    else:
        statut = "Non validé"

    return {
        "moyenne": round(moyenne, 2),
        "statut": statut
    }