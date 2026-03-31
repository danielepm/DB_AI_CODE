from fastapi import FastAPI, Form, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

from app.loan import calcul_mensualite

app = FastAPI(root_path="/simulateur_pret",title="Simulateur de prêt")

templates = Jinja2Templates(directory="app/templates")

app.mount("/static", StaticFiles(directory="app/static"), name="static")


@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.post("/simulate", response_class=HTMLResponse)
def simulate(
    request: Request,
    montant: float = Form(...),
    taux: float = Form(...),
    duree: int = Form(...)
):
    
    mensualite = calcul_mensualite(montant, taux, duree)

    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "mensualite": mensualite,
            "montant": montant,
            "taux": taux,
            "duree": duree
        }
    )