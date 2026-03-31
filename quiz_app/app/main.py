from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI(root_path="/quiz_app")

# Montage des fichiers statiques et templates
app.mount("/static", StaticFiles(directory="app/static"), name="static")
templates = Jinja2Templates(directory="app/templates")

# Base de données simple des questions
QUIZ_DATA = [
    {"id": 0, "q": "Quelle est la capitale de la France ?", "ops": ["Lyon", "Paris", "Marseille"], "ans": "Paris"},
    {"id": 1, "q": "Quel langage utilise FastAPI ?", "ops": ["Java", "Python", "C++"], "ans": "Python"},
    {"id": 2, "q": "Que signifie le 'P' dans API ?", "ops": ["Protocol", "Programming", "Performance"], "ans": "Programming"}
]

@app.get("/", response_class=HTMLResponse)
async def read_item(request: Request):
    return templates.TemplateResponse("index.html", {"request": request, "questions": QUIZ_DATA})

@app.post("/submit", response_class=HTMLResponse)
async def submit_quiz(request: Request):
    form_data = await request.form()
    score = 0
    results = []
    
    for item in QUIZ_DATA:
        user_answer = form_data.get(str(item["id"]))
        is_correct = user_answer == item["ans"]
        if is_correct:
            score += 1
        results.append({"q": item["q"], "correct": is_correct, "ans": item["ans"]})

    return templates.TemplateResponse("index.html", {
        "request": request, 
        "score": score, 
        "total": len(QUIZ_DATA),
        "results": results
    })