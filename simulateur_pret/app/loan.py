def calcul_mensualite(capital: float, taux_annuel: float, duree_annees: int):
    
    taux_mensuel = taux_annuel / 100 / 12
    nb_mensualites = duree_annees * 12

    if taux_mensuel == 0:
        return capital / nb_mensualites

    mensualite = capital * (
        taux_mensuel * (1 + taux_mensuel) ** nb_mensualites
    ) / ((1 + taux_mensuel) ** nb_mensualites - 1)

    return round(mensualite, 2)