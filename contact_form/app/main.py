from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from pydantic import ValidationError
from .schemas import ContactForm

app = FastAPI(root_path="/contact_form")

templates = Jinja2Templates(directory="app/templates")

app.mount("/static", StaticFiles(directory="app/static"), name="static")


@app.get("/", response_class=HTMLResponse)
async def form(request: Request):
    return templates.TemplateResponse("form.html", {"request": request})


@app.post("/submit", response_class=HTMLResponse)
async def submit(
    request: Request,
    name: str = Form(...),
    email: str = Form(...),
    message: str = Form(...)
):
    try:
        form = ContactForm(name=name, email=email, message=message)
        return templates.TemplateResponse(
            "form.html",
            {
                "request": request,
                "success": "Message envoyé avec succès !"
            }
        )

    except ValidationError as e:
        return templates.TemplateResponse(
            "form.html",
            {
                "request": request,
                "errors": e.errors()
            }
        )