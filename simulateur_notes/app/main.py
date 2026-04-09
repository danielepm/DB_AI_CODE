from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

from app.services import calculer_resultat

app = FastAPI(root_path="/simulateur_notes", title="Simulateur de notes")
app.mount("/static", StaticFiles(directory="app/static"), name="static")

templates = Jinja2Templates(directory="app/templates")


@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse(request, "index.html")


@app.post("/simuler", response_class=HTMLResponse)
async def simuler(
    request: Request,
    note1: float = Form(...),
    note2: float = Form(...),
    note3: float = Form(...),
):
    notes = [note1, note2, note3]

    resultat = calculer_resultat(notes)

    return templates.TemplateResponse(request,
        "index.html",
        {
            "resultat": resultat,
            "notes": notes
        }
    )