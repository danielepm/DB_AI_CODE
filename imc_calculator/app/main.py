from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

from app.imc import calcul_imc

app = FastAPI(root_path="/imc_calculator")

templates = Jinja2Templates(directory="app/templates")

app.mount("/static", StaticFiles(directory="app/static"), name="static")


@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse(request, "index.html")


@app.post("/calculer", response_class=HTMLResponse)
def calculer(request: Request, poids: float = Form(...), taille: float = Form(...)):
    imc, interpretation = calcul_imc(poids, taille)

    return templates.TemplateResponse(request,
        "index.html",
        {
            "imc": imc,
            "interpretation": interpretation
        }
    )