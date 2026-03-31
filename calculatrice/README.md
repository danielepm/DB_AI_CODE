# 🧮 Calculatrice – FastAPI + Docker + Nginx

Projet de calculatrice web développé en Python avec FastAPI, disposant d’une interface graphique simple.
L’application est containerisée avec Docker et exposée via Nginx utilisé comme reverse proxy.

---

## 🚀 Fonctionnalités

- Interface graphique web
- Opérations mathématiques de base :
  - Addition
  - Soustraction
  - Multiplication
  - Division
- API REST FastAPI
- Reverse proxy Nginx
- Déploiement Docker / Docker Compose

---

## 🗂️ Structure du projet

calculatrice/
│
├── app/
│   ├── main.py
│   ├── routers/
│   │   └── calculator.py
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css
│   │   └── js/
│   │       └── calculator.js
│   └── templates/
│       └── index.html
│
├── nginx/
│   └── nginx.conf
│
├── requirements.txt
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
└── README.md

---

## 🧠 Architecture

Client → Nginx (port 80) → FastAPI (port 8000)

- Nginx agit comme reverse proxy
- FastAPI n’est pas exposé directement
- Communication interne via le réseau Docker

---

## ▶️ Lancer le projet

### Prérequis

- Docker
- Docker Compose

### Démarrage

docker compose up --build

Puis ouvrir le navigateur :

http://localhost

---

## ⛔ Arrêt de l’application

docker compose down

---

## 🔌 API

### Endpoint

GET /api/calculate

Paramètres :
- a : float
- b : float
- operation : add | sub | mul | div

Exemple :

/api/calculate?a=10&b=5&operation=add

Réponse :

{
  "result": 15
}

---

## ❌ Gestion des erreurs

- Division par zéro
- Opération inconnue
- Paramètres invalides

---

## 🌱 Améliorations possibles

- HTTPS avec Let's Encrypt
- Mode production avec workers Uvicorn
- Logs Nginx
- Authentification
- Monitoring

---

## 📄 Licence

Projet R&D, SCALIAN Insights.

---

## 👤 Auteur

Développé par IA (ChatGPT)