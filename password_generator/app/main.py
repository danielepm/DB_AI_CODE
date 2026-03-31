from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from .schemas import PasswordRequest
from .generator import generate_password

app = FastAPI(root_path="/password_generator")

app.mount("/static", StaticFiles(directory="app/static"), name="static")

templates = Jinja2Templates(directory="app/templates")


@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.post("/generate")
async def generate(req: PasswordRequest):
    password = generate_password(
        req.length,
        req.uppercase,
        req.digits
    )

    return {"password": password}