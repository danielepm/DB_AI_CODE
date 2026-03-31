# Convertisseur d'Unités

Application web de conversion d'unités développée en **Python** avec
**FastAPI**, conteneurisée avec **Docker** et exposée via **Nginx**.

------------------------------------------------------------------------

## 📖 Présentation

Le projet **Convertisseur d'Unités** est une application web permettant
d'effectuer des conversions dans les catégories suivantes :

-   **Longueur** : mètre (m), kilomètre (km), centimètre (cm),
    millimètre (mm)\
-   **Poids** : kilogramme (kg), gramme (g), milligramme (mg), livre
    (lb)\
-   **Température** : Celsius (°C), Fahrenheit (°F), Kelvin (K)

L'application propose :

-   Une interface graphique accessible via navigateur\
-   Une API REST construite avec FastAPI\
-   Une architecture conteneurisée avec Docker\
-   Un reverse proxy Nginx

------------------------------------------------------------------------

## 🏗️ Architecture

    convertisseur-unites/
    │
    ├── app/
    │   ├── main.py
    │   ├── converters.py
    │   ├── templates/
    │   │   └── index.html
    │   └── static/
    │       ├── style.css
    │       └── script.js
    │
    ├── nginx/
    │   └── nginx.conf
    │
    ├── Dockerfile
    ├── docker-compose.yml
    ├── requirements.txt
    └── README.md

------------------------------------------------------------------------

## 🛠️ Technologies utilisées

-   Python 3.11
-   FastAPI
-   Jinja2
-   Docker
-   Docker Compose
-   Nginx

------------------------------------------------------------------------

## ⚙️ Prérequis

Avant l'installation, assurez-vous d'avoir :

-   Docker installé
-   Docker Compose installé

Vérification :

``` bash
docker --version
docker-compose --version
```

------------------------------------------------------------------------

## 🚀 Installation

### 1. Cloner le dépôt

``` bash
git clone <URL_DU_REPO>
cd convertisseur-unites
```

Remplacez `<URL_DU_REPO>` par l'URL de votre repository.

------------------------------------------------------------------------

## ▶️ Lancement de l'application

Depuis la racine du projet :

``` bash
docker-compose up --build
```

Cette commande :

-   Construit l'image Docker de l'application
-   Démarre le conteneur FastAPI
-   Démarre le conteneur Nginx
-   Expose l'application sur le port 80

------------------------------------------------------------------------

## 🌐 Accès à l'application

Ouvrez votre navigateur à l'adresse suivante :

http://localhost

------------------------------------------------------------------------

## 📘 Documentation API

FastAPI génère automatiquement une documentation interactive accessible
via :

http://localhost/docs

------------------------------------------------------------------------

## 🛑 Arrêt de l'application

Pour arrêter les conteneurs :

``` bash
docker-compose down
```

Pour arrêter et supprimer les volumes :

``` bash
docker-compose down -v
```

------------------------------------------------------------------------

## 🔄 Redémarrage

``` bash
docker-compose restart
```

------------------------------------------------------------------------

## 📜 Logs

Afficher les logs en temps réel :

``` bash
docker-compose logs -f
```

------------------------------------------------------------------------

## 🔍 Fonctionnement interne

-   **FastAPI** gère :

    -   Les routes API
    -   La logique métier de conversion
    -   Le rendu de l'interface HTML

-   **Nginx** agit comme reverse proxy et redirige les requêtes vers
    l'application FastAPI.

-   **Docker Compose** orchestre les services et configure leur
    communication réseau.

------------------------------------------------------------------------

## 🚀 Évolutions possibles

-   Ajout d'un historique des conversions
-   Ajout d'une authentification utilisateur
-   Mise en place de tests unitaires (Pytest)
-   Intégration CI/CD
-   Déploiement sur serveur cloud ou VPS
-   Amélioration UI (Bootstrap, React, Vue)

------------------------------------------------------------------------

## 📄 Licence

Projet à but pédagogique.
