from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.requests import Request

from app.routers import calculator

app = FastAPI(root_path="/calculatrice", title="Calculatrice")

# Static files
app.mount("/static", StaticFiles(directory="app/static"), name="static")

# Templates
templates = Jinja2Templates(directory="app/templates")

# Routers
app.include_router(calculator.router)


@app.get("/")
def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})