from fastapi import FastAPI, Depends, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session

from . import models, schemas, crud
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI(root_path="/gestion_rendezvous")

templates = Jinja2Templates(directory="app/templates")

app.mount("/static", StaticFiles(directory="app/static"), name="static")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def home(request: Request):
    return templates.TemplateResponse(request, "index.html")


@app.get("/rdv", response_model=list[schemas.RendezVous])
def read_rdv(db: Session = Depends(get_db)):
    return crud.get_rendezvous(db)


@app.post("/rdv", response_model=schemas.RendezVous)
def create_rdv(rdv: schemas.RendezVousCreate, db: Session = Depends(get_db)):
    return crud.create_rendezvous(db, rdv)


@app.delete("/rdv/{rdv_id}")
def delete_rdv(rdv_id: int, db: Session = Depends(get_db)):
    crud.delete_rendezvous(db, rdv_id)
    return {"message": "deleted"}