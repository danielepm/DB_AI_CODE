from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI(root_path="/calculateur_tva")
app.mount("/static", StaticFiles(directory="app/static"), name="static")
templates = Jinja2Templates(directory="app/templates")

@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse(request, "index.html")

@app.post("/calculate")
async def calculate(
    request: Request, 
    amount: float = Form(...), 
    rate: float = Form(...), 
    calc_type: str = Form(...)
):
    if calc_type == "ht_to_ttc":
        tva = amount * (rate / 100)
        result = amount + tva
        label = "Prix TTC"
    else:
        result = amount / (1 + (rate / 100))
        tva = amount - result
        label = "Prix HT"

    return templates.TemplateResponse(request, "index.html", {
        "result": round(result, 2),
        "tva": round(tva, 2),
        "label": label,
        "original_amount": amount
    })