from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse

app = FastAPI(root_path="/livraison_app")
templates = Jinja2Templates(directory="app/templates")

# Simulation de base de données de tarifs
TARIFS_ZONE = {
    "Zone A (Local)": 5.0,
    "Zone B (National)": 10.0,
    "Zone C (International)": 25.0
}

@app.get("/", response_class=HTMLResponse)
async def read_item(request: Request):
    return templates.TemplateResponse(request, "index.html", {"zones": TARIFS_ZONE.keys()})

@app.post("/calculer", response_class=HTMLResponse)
async def calculer_frais(request: Request, poids: float = Form(...), zone: str = Form(...)):
    prix_base = TARIFS_ZONE.get(zone, 0)
    total = prix_base + (poids * 1.5)  # 1.5€ par kg supplémentaire
    return templates.TemplateResponse(request, "index.html", { 
        "resultat": f"{total:.2f} €",
        "zones": TARIFS_ZONE.keys()
    })