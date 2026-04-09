from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from app.search import filter_items
from app.data import items

app = FastAPI(root_path="/recherche_simple")

templates = Jinja2Templates(directory="app/templates")

app.mount("/static", StaticFiles(directory="app/static"), name="static")


@app.get("/")
def home(request: Request):
    return templates.TemplateResponse(request, "index.html", {
        "items": items
    })


@app.get("/search")
def search(query: str = ""):
    results = filter_items(query, items)
    return {"results": results}