from fastapi import FastAPI, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.requests import Request
from fastapi.staticfiles import StaticFiles
from datetime import datetime
from app.age import calculate_age

app = FastAPI(root_path="/age_calculator")

app.mount("/static", StaticFiles(directory="app/static"), name="static")

templates = Jinja2Templates(directory="app/templates")


@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.post("/calculate")
async def calculate(birthdate: str = Form(...)):
    birth = datetime.strptime(birthdate, "%Y-%m-%d").date()
    age = calculate_age(birth)
    return {"age": age}