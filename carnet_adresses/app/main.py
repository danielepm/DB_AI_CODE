from fastapi import FastAPI, Depends, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session

from . import models, schemas, crud
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI(root_path="/carnet_adresses")

templates = Jinja2Templates(directory="app/templates")

app.mount("/static", StaticFiles(directory="app/static"), name="static")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/", response_class=HTMLResponse)
def home(request: Request, db: Session = Depends(get_db)):
    contacts = crud.get_contacts(db)
    return templates.TemplateResponse(request, "index.html", {"contacts": contacts})


@app.post("/contacts")
def add_contact(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    return crud.create_contact(db, contact)


@app.get("/contacts")
def list_contacts(db: Session = Depends(get_db)):
    return crud.get_contacts(db)


@app.delete("/contacts/{contact_id}")
def remove_contact(contact_id: int, db: Session = Depends(get_db)):
    return crud.delete_contact(db, contact_id)