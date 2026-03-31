from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates

from .database import add_product, get_products, delete_product

app = FastAPI(root_path="/gestion_produits")

templates = Jinja2Templates(directory="app/templates")


@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    products = get_products()
    return templates.TemplateResponse("index.html", {
        "request": request,
        "products": products
    })


@app.post("/add")
def add(name: str = Form(...), price: float = Form(...)):
    add_product(name, price)
    return RedirectResponse("/", status_code=303)


@app.get("/delete/{product_id}")
def delete(product_id: int):
    delete_product(product_id)
    return RedirectResponse("/", status_code=303)