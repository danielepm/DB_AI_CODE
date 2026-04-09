from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from .schemas import PriorityRequest, PriorityResponse

app = FastAPI(root_path="/calculateur_priorite", title="Calculateur de Priorité")

templates = Jinja2Templates(directory="app/templates")
app.mount("/static", StaticFiles(directory="app/static"), name="static")

def calculate_priority(urgence: int, impact: int) -> str:
    score = urgence * 0.6 + impact * 0.4
    if score >= 8:
        return "Haute"
    elif score >= 5:
        return "Moyenne"
    else:
        return "Basse"

@app.get("/", response_class=HTMLResponse)
async def read_form(request: Request):
    return templates.TemplateResponse(request, "index.html", {"priority": None})
    #return templates.TemplateResponse("index.html", {"request": request, "priority": None})

@app.post("/", response_class=HTMLResponse)
async def calculate(request: Request, urgence: int = Form(...), impact: int = Form(...)):
    priority = calculate_priority(urgence, impact)
    return templates.TemplateResponse(request, "index.html", {"priority": priority, "urgence": urgence, "impact": impact})

@app.post("/api/calculate", response_model=PriorityResponse)
async def api_calculate(request: PriorityRequest):
    priority = calculate_priority(request.urgence, request.impact)
    return PriorityResponse(priority=priority)