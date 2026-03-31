from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

from app.calculator import calculer_moyenne

app = FastAPI(root_path="/calculateur_moyenne")

templates = Jinja2Templates(directory="app/templates")

app.mount("/static", StaticFiles(directory="app/static"), name="static")


@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse(
        "index.html",
        {"request": request, "resultat": None}
    )


@app.post("/calculer", response_class=HTMLResponse)
async def calculer(
    request: Request,
    note1: float = Form(...),
    coeff1: float = Form(...),
    note2: float = Form(...),
    coeff2: float = Form(...),
    note3: float = Form(...),
    coeff3: float = Form(...),
):

    notes = [note1, note2, note3]
    coeffs = [coeff1, coeff2, coeff3]

    moyenne = calculer_moyenne(notes, coeffs)

    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "resultat": moyenne
        }
    )