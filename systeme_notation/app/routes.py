from fastapi import APIRouter, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from app.scoring import appreciation

router = APIRouter()

templates = Jinja2Templates(directory="app/templates")


@router.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@router.post("/score", response_class=HTMLResponse)
async def calculate(request: Request, score: float = Form(...)):

    result = appreciation(score)

    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "result": result,
            "score": score
        }
    )