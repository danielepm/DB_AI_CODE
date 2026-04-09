from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel

app = FastAPI(root_path="/traffic_light")
templates = Jinja2Templates(directory="templates")

app.mount("/static", StaticFiles(directory="static"), name="static")

# État initial
traffic_state = {"current": "RED"}

# Transitions autorisées
TRANSITIONS = {
    "RED": "GREEN",
    "GREEN": "YELLOW",
    "YELLOW": "RED"
}

@app.get("/", response_class=HTMLResponse)
async def read_item(request: Request):
    return templates.TemplateResponse(request, "index.html", {"state": traffic_state["current"]})

@app.post("/next")
async def next_state():
    current = traffic_state["current"]
    new_state = TRANSITIONS[current]
    traffic_state["current"] = new_state
    return {"old_state": current, "new_state": new_state}

@app.get("/status")
async def get_status():
    return traffic_state