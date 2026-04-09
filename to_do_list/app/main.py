from fastapi import FastAPI, Depends, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

from sqlalchemy.orm import Session

from .database import SessionLocal, engine
from . import models, crud

# Création des tables SQLite
models.Base.metadata.create_all(bind=engine)

# Initialisation FastAPI
app = FastAPI(root_path="/to_do_list")

# Montage des fichiers statiques
app.mount("/static", StaticFiles(directory="app/static"), name="static")

# Templates HTML
templates = Jinja2Templates(directory="app/templates")


# Dépendance DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Page principale
@app.get("/", response_class=HTMLResponse)
def home(request: Request, db: Session = Depends(get_db)):
    todos = crud.get_todos(db)

    return templates.TemplateResponse(request,
        "index.html",
        {
            "todos": todos
        }
    )


# Ajouter une tâche
@app.post("/add")
def add(title: str, db: Session = Depends(get_db)):
    return crud.create_todo(db, title)


# Marquer une tâche comme terminée
@app.post("/done/{todo_id}")
def done(todo_id: int, db: Session = Depends(get_db)):
    return crud.mark_done(db, todo_id)


# Supprimer une tâche
@app.delete("/delete/{todo_id}")
def delete(todo_id: int, db: Session = Depends(get_db)):
    return crud.delete_todo(db, todo_id)