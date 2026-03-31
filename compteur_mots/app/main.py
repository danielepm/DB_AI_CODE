from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from .analyzer import analyze_text

app = FastAPI(root_path="/compteur_mots")

app.mount("/static", StaticFiles(directory="app/static"), name="static")

templates = Jinja2Templates(directory="app/templates")

@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse(
        "index.html",
        {"request": request, "result": None}
    )


@app.post("/analyze", response_class=HTMLResponse)
def analyze(request: Request, text: str = Form(...)):

    result = analyze_text(text)

    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "result": result,
            "text": text
        }
    )