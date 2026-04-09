from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from .converters import convert_length, convert_weight, convert_temperature

app = FastAPI(root_path="/convertisseur_unites")

app.mount("/static", StaticFiles(directory="app/static"), name="static")
templates = Jinja2Templates(directory="app/templates")


@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse(request, "index.html")


@app.post("/convert")
def convert(value: float = Form(...),
            category: str = Form(...),
            from_unit: str = Form(...),
            to_unit: str = Form(...)):

    if category == "length":
        result = convert_length(value, from_unit, to_unit)
    elif category == "weight":
        result = convert_weight(value, from_unit, to_unit)
    elif category == "temperature":
        result = convert_temperature(value, from_unit, to_unit)
    else:
        return {"error": "Invalid category"}

    return {"result": round(result, 4)}