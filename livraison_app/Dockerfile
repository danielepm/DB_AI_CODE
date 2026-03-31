# Utilisation d'une image légère de Python
FROM python:3.9-slim

# Définition du dossier de travail dans le conteneur
WORKDIR /app

# Copie du fichier des dépendances
COPY requirements.txt .

# Installation des dépendances sans cache pour réduire la taille de l'image
RUN pip install --no-cache-dir -r requirements.txt

# Copie de tout le contenu du dossier backend (code + templates)
COPY . .

# Exposition du port interne utilisé par FastAPI
EXPOSE 8000

# Commande de lancement (sera surchargée par docker-compose si nécessaire)
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]