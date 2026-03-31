from fastapi import FastAPI, Depends, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse
from sqlalchemy.orm import Session

from .database import SessionLocal, engine
from . import models, crud

models.Base.metadata.create_all(bind=engine)

app = FastAPI(root_path="/tableau_scores")

templates = Jinja2Templates(directory="app/templates")

app.mount("/static", StaticFiles(directory="app/static"), name="static")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def read_scores(request: Request, db: Session = Depends(get_db)):
    scores = crud.get_scores(db)
    return templates.TemplateResponse(
        "index.html",
        {"request": request, "scores": scores}
    )


@app.post("/add")
def add_score(
    player: str = Form(...),
    points: int = Form(...),
    db: Session = Depends(get_db)
):
    crud.create_score(db, {"player": player, "points": points})
    return RedirectResponse(url="/", status_code=303) #{"message": "Score ajouté"}