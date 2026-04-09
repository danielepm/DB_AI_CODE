from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from .password_checker import check_password

app = FastAPI(root_path="/password_checker")

templates = Jinja2Templates(directory="app/templates")
app.mount("/static", StaticFiles(directory="app/static"), name="static")

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse(request, "index.html", {"result": None})

@app.post("/", response_class=HTMLResponse)
async def verify_password(request: Request, password: str = Form(...)):
    result = check_password(password)
    return templates.TemplateResponse(request, "index.html", {"result": result, "password": password})