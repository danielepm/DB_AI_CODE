from fastapi import FastAPI, Depends, Request, Form
from fastapi.responses import HTMLResponse, RedirectResponse
from sqlalchemy.orm import Session
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

from . import models, database, crud, schemas

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(root_path="/feedback_system")

templates = Jinja2Templates(directory="app/templates")

app.mount("/static", StaticFiles(directory="app/static"), name="static")


def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/", response_class=HTMLResponse)
def read_root(request: Request):
    return templates.TemplateResponse(request, "index.html")


@app.post("/feedback")
def submit_feedback(
    rating: int = Form(...),
    comment: str = Form(...),
    db: Session = Depends(get_db)
):
    crud.create_feedback(db, schemas.FeedbackCreate(rating=rating, comment=comment))
    return RedirectResponse("feedbacks", status_code=303)


@app.get("/feedbacks", response_class=HTMLResponse)
def list_feedbacks(request: Request, db: Session = Depends(get_db)):
    feedbacks = crud.get_feedbacks(db)
    return templates.TemplateResponse(request, 
        "feedbacks.html",
        {"feedbacks": feedbacks}
    )