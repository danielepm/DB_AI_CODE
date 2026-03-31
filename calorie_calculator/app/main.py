from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

from app.calculator import calculate_calories

app = FastAPI(root_path="/calorie_calculator")

templates = Jinja2Templates(directory="app/templates")

app.mount("/static", StaticFiles(directory="app/static"), name="static")


@app.get("/")
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.post("/calculate")
def calculate(
    request: Request,
    activity: str = Form(...),
    weight: float = Form(...),
    duration: float = Form(...)
):

    calories = calculate_calories(activity, weight, duration)

    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "calories": calories
        }
    )