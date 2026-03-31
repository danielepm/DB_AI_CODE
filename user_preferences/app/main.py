from fastapi import FastAPI, Depends, Request
from fastapi.responses import HTMLResponse
from sqlalchemy.orm import Session
from fastapi.templating import Jinja2Templates

from . import models, schemas, crud
from .database import engine, SessionLocal, Base

Base.metadata.create_all(bind=engine)

app = FastAPI(root_path="/user_preferences")

templates = Jinja2Templates(directory="app/templates")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/preferences/{user}")
def read_preferences(user: str, db: Session = Depends(get_db)):
    return crud.get_preferences(db, user)


@app.post("/preferences")
def create_preferences(pref: schemas.PreferenceCreate, db: Session = Depends(get_db)):
    return crud.create_preferences(db, pref)


@app.put("/preferences/{user}")
def update_preferences(user: str, pref: schemas.PreferenceCreate, db: Session = Depends(get_db)):
    return crud.update_preferences(db, user, pref)