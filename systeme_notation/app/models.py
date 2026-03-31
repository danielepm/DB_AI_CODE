from pydantic import BaseModel

class ScoreInput(BaseModel):
    score: float