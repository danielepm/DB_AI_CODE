from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse

app = FastAPI(root_path="/calculateur_remise")
templates = Jinja2Templates(directory="app/templates")

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse(request, "index.html")

@app.post("/calculer", response_class=HTMLResponse)
async def calculer(
    request: Request,
    prix_initial: float = Form(...),
    valeur_remise: float = Form(...),
    type_remise: str = Form(...)
):
    if type_remise == "pourcentage":
        montant_economise = prix_initial * (valeur_remise / 100)
    else:
        montant_economise = valeur_remise

    prix_final = max(0, prix_initial - montant_economise)
    
    return templates.TemplateResponse(request, "index.html", {
        "resultat": round(prix_final, 2),
        "economie": round(montant_economise, 2)
    })