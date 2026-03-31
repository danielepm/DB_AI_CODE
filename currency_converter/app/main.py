from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from .converter import convert
from .rates import RATES

app = FastAPI(root_path="/currency_converter")

app.mount("/static", StaticFiles(directory="app/static"), name="static")
templates = Jinja2Templates(directory="app/templates")


@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "currencies": list(RATES.keys()),
            "result": None
        }
    )


@app.post("/convert", response_class=HTMLResponse)
def convert_currency(
    request: Request,
    amount: float = Form(...),
    from_currency: str = Form(...),
    to_currency: str = Form(...)
):

    result = convert(amount, from_currency, to_currency)

    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "currencies": list(RATES.keys()),
            "result": result,
            "amount": amount,
            "from_currency": from_currency,
            "to_currency": to_currency
        }
    )